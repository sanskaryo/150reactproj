// import { useState } from 'react'

// export default function Navbar({ query, setQuery }) {
//   const [val, setVal] = useState(query || '')

//   function onChange(e) {
//     const v = e.target.value
//     setVal(v)
//     setQuery(v)
//   }

//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-2">

//           <svg className="logo-small" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.2" />

//             <path d="M7 10h10" stroke="currentColor" strokeWidth="1.2" />
//           </svg>
//           <span className="font-medium text-slate-800">Web3 Shopping Cart</span>
//         </div>
//         <div className="w-72">
//           <div className="relative">
//             <input
//               value={val}
//               onChange={onChange}
//               placeholder="Search products..."
//               className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-300"
//             />
//             <button className="absolute right-1 top-1 bottom-1 px-3 text-sm bg-black text-white rounded">Search</button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }


import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";

export default function Navbar({ query, setQuery }) {
  const [val, setVal] = useState(query || "");

  function clearSearch() {
    setVal("");
    setQuery("");
  }

  function onChange(e) {
    const v = e.target.value;
    setVal(v);
    setQuery(v);
  }

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <BsCart2 size={20} className="text-black" />
          <span className="font-bold  text-black text-[15px]">
            Web3 Shopping Cart
          </span>
        </div>

        <div className="relative w-64">
          <input
            value={val}
            onChange={onChange}
            placeholder="Search products..."
           className="border w-full rounded-xl px-4 py-1.5 pr-10 pl-4 text-sm focus:outline-none"

          />

          {val.length > 0 && (
            <RxCross2
              size={18}
              onClick={clearSearch}
              className="absolute right-9 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          )}

          <FiSearch
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          />
        </div>

      </div>
    </header>
  );
}
