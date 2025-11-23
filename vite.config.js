import { defineConfig } from "vite";
import { resolve } from "path"; 

export default defineConfig({

  root: "./src", 
  

  base: "/practica-maquetacion-sass/", 

  build: {
 
    outDir: "../dist",
    emptyOutDir: true, 
    
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        contact: resolve(__dirname, "src/contact.html"),
      },
    },
  },
});