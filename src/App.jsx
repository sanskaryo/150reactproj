

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
