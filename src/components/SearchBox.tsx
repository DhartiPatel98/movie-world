"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [enabled, setEnabled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/search")) {
      clearSearch();
    }
  }, [pathname]);

  function clearSearch() {
    setSearch("");
    setEnabled(false);
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (search) {
      setEnabled(false);
      router.push(`/search/${search}`);
    }
  };

  return (
    <form
      className="flex justify-between relative mt-10"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 bg-transparent flex-1 border border-gray-400 hover:border-gray-500 focus:border-gray-500 pl-4 pr-20"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value) {
            setEnabled(true);
          } else {
            setEnabled(false);
          }
        }}
      />
      <div className="absolute right-4 top-4">
        {search && (
          <button
            className="text-amber-600 disabled:text-gray-400 mr-5"
            type="button"
            onClick={clearSearch}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <button
          className="text-amber-600 disabled:text-gray-400"
          disabled={!enabled}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}
