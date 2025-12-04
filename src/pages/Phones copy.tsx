import { useMemo, useState, useEffect } from "react";
import phones from "../apis/phones.json";
import Card from "../components/Card";

function Phones() {
  const [sort, setSort] = useState<
    "default" | "price-asc" | "price-desc" | "alpha"
  >("default");

  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  type Phone = {
    id: string | number;
    name?: string;
    price?: string | number;
    [key: string]: unknown;
  };

  const sortedPhones = useMemo(() => {
    const list = [...phones];
    const getPrice = (p: Phone) =>
      parseFloat(String(p?.price ?? 0).replace(/[^\d.-]/g, "")) || 0;

    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => getPrice(a) - getPrice(b));
      case "price-desc":
        return list.sort((a, b) => getPrice(b) - getPrice(a));
      case "alpha":
        return list.sort((a, b) =>
          String(a?.name ?? "").localeCompare(
            String(b?.name ?? ""),
            undefined,
            {
              sensitivity: "base",
            }
          )
        );
      default:
        return list;
    }
  }, [sort]);

  // Reset to first page when changing items per page or sort
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedPhones.length / itemsPerPage));

  // Ensure currentPage is valid for rendering (derived, not setState)
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const pagedPhones = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return sortedPhones.slice(start, start + itemsPerPage);
  }, [sortedPhones, safePage, itemsPerPage]);

  // Generate pagination array with first, last and "..." when needed
  function getPagination(current: number, total: number, delta = 2) {
    if (total <= 1) return [1];
    const pages: (number | string)[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    pages.push(1);

    if (left > 2) {
      pages.push("...");
    } else {
      for (let p = 2; p < left; p++) pages.push(p);
    }

    for (let p = left; p <= right; p++) {
      pages.push(p);
    }

    if (right < total - 1) {
      pages.push("...");
    } else {
      for (let p = right + 1; p < total; p++) pages.push(p);
    }

    if (total > 1) pages.push(total);

    // dedupe and keep order
    const result: (number | string)[] = [];
    for (const item of pages) {
      if (result.length === 0 || result[result.length - 1] !== item) {
        result.push(item);
      }
    }
    return result;
  }

  return (
    <section className="">
      <div className="flex items-center justify-between mb-6 gap-4">
        <h2 className="font-semibold text-2xl">Mobile Phones</h2>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-sm">Ordenar:</span>
            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value as
                    | "default"
                    | "price-asc"
                    | "price-desc"
                    | "alpha"
                )
              }
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="default">Padrão</option>
              <option value="price-asc">Mais barato</option>
              <option value="price-desc">Mais caro</option>
              <option value="alpha">Alfabética</option>
            </select>
          </label>

          <label className="flex items-center gap-2">
            <span className="text-sm">Por página:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={16}>16</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pagedPhones.map((card) => {
          return <Card key={card.id} {...card} prefixImg={"/phones/"} />;
        })}
      </div>

      {/* Pagination controls */}
      <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={safePage === 1}
          className={`px-3 py-1 rounded border text-sm ${
            safePage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          &laquo; Prev
        </button>

        {getPagination(safePage, totalPages, 2).map((page, idx) =>
          page === "..." ? (
            <span
              key={`dots-${idx}`}
              className="px-2 text-gray-400 select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrentPage(Number(page))}
              aria-current={page === safePage ? "page" : undefined}
              className={`px-3 py-1 rounded border text-sm ${
                page === safePage
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={safePage === totalPages}
          className={`px-3 py-1 rounded border text-sm ${
            safePage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next &raquo;
        </button>
      </div>
    </section>
  );
}

export default Phones;
