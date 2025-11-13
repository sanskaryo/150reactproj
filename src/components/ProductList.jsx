

import ProductCard from './ProductCard'

export default function ProductList({ products }) {

  if (!products) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map(p => (
        <div key={p.id}>

          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}
