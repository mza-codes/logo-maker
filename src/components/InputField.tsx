import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { useRef } from "react";
import { qAtom } from "../atoms";

function InputField() {
  const searchRef = useRef<any>(null);
  const setQuery = useAtom(qAtom)[1];

  return (
    <div className="flex flex-col relative max-w-[600px]">
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") setQuery(searchRef.current?.value);
        }}
        ref={searchRef}
        placeholder="Enter Your Query"
        id="q"
        className="p-3 outline-none rounded-lg bg-gray-100 font-medium tracking-wide shadow-xl"
      />
      <Icon
        onClick={() => setQuery(searchRef.current?.value)}
        icon="mdi:database-search"
        width={33}
        className="text-rose-800 hover:text-rose-700 absolute right-1 top-1 cursor-pointer"
      />
    </div>
  );
}

export default InputField;
