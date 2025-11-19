import { defineConfig } from "vite";
import { resolve } from "path"; // Necesario para resolver las rutas de entrada

export default defineConfig({
  // Indica que la raíz del proyecto para el desarrollo es la carpeta 'src'
  root: "./src", 
  
  // La ruta base debe ser relativa ('./') para que funcione correctamente
  // cuando el proyecto se sirve desde un subdirectorio en GitHub Pages.
  base: "./", 

  build: {
    // Especifica la carpeta de salida (docs) para GitHub Pages
    outDir: "../docs", 
    
    rollupOptions: {
      input: {
        // Definimos todas las entradas HTML. 
        // Es crucial incluir el path completo desde la raíz del proyecto
        main: resolve(__dirname, "src/index.html"),    // Página principal
        about: resolve(__dirname, "src/about.html"),   // Página 'Sobre mí'
        contact: resolve(__dirname, "src/contact.html"), // Página 'Contacto'
      },
    },
  },
});