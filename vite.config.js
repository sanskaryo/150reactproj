import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 import rollupWasm from "@rollup/wasm-node";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),rollupWasm()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//

// export default defineConfig({
//   plugins: [react(), rollupWasm()],
// })
