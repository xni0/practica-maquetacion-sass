import { defineConfig } from "vite";

export default defineConfig({
  // Establece 'src' como la raíz del proyecto para que busque index.html y assets ahí
  root: "./src", 
  
  // Establece la carpeta de salida a 'docs' para producción
  build: {
    outDir: "../docs", 
  },
});