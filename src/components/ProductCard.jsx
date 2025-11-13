export default function ProductCard({ product }) {
  return (

    <div className="bg-white border rounded-lg p-4 shadow-sm h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-40 object-contain" />

      </div>
      <div className="mb-3">
        <h3 className="text-sm font-medium text-slate-800 line-clamp-2">{product.title}</h3>

        <p className="text-xs text-slate-500 mt-1">${product.price} USD</p>
      </div>
      <div className="mt-auto">
        
        <button className="w-full py-2 rounded text-white bg-black hover:bg-slate-800">View Details</button>
      </div>
    </div>
  )
}
