// import { useState, useEffect } from 'react'
// import './App.css'

// function App() {
//   const [ productsData , setProductsData] = useState([])
//   const [ isLoadingStuff, setIsLoadingStuff ] = useState(true)
//   const  [searchTxt,  setSearchTxt] = useState('')

//   useEffect(() => {
//     const getProducts = async() => {
//       try{
//         const res = await fetch('https://fakestoreapi.com/products')
//         const dataJson  = await res.json()
//         setProductsData(dataJson)
//         setIsLoadingStuff(false)
//       }catch(err){
//         console.log(err)
//         setIsLoadingStuff(false)
//       }
//     }
//     getProducts()
//   }, [])

//   const filteredItems = productsData.filter(item => 
//     item.title.toLowerCase().includes(searchTxt.toLowerCase())
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <h1 className="text-2xl font-bold">Web3 Shopping Cart</h1>
//           </div>
//           <div className="relative">
//             <input 
//               type="text"
//               placeholder="Search products..."
//               value={searchTxt}
//               onChange={(e) => setSearchTxt(e.target.value)}
//               className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//             <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-gray-900 mb-3">Store</h2>
//           <p className="text-gray-500 text-lg">Buy with web3 wallet!</p>
//         </div>

//         {isLoadingStuff ? (
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredItems.map((prod) => (
//               <div key={prod.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="aspect-square bg-white p-8 flex items-center justify-center">
//                   <img 
//                     src={prod.image} 
//                     alt={prod.title}
//                     className="max-h-full max-w-full object-contain"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
//                     {prod.title}
//                   </h3>
//                   <p className="text-2xl font-bold text-gray-900 mb-4">
//                     ${prod.price} USD
//                   </p>
//                   <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App

import { BsCart2 } from "react-icons/bs";

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
// import Footer from './components/Footer'

export default function App() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(e => {
        setError('Failed to load products')
        setLoading(false)
      })
  }, [])

  const filtered = products.filter(p => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return p.title.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q)
  })

  return (
    <div className="min-h-screen">
      <Navbar query={query} setQuery={setQuery} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-extrabold mb-1">Store</h1>

        <p className="text-center text-sm text-slate-600 mb-6">Buy with web3 wallet!</p>
        {loading && <div className="text-center text-slate-500">Loading products...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {!loading && !error &&
          <ProductList products={filtered} />
        }
      </main>
      {/* <Footer /> */}
    </div>
  )
}
