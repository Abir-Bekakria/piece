import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // On place les options directement à la racine si le wrapper le permet, 
  // ou on utilise l'objet 'vite' pour les options standards.
  vite: {
    base: "/piece/",
    build: {
      outDir: "dist",
    }
  },
  // Si TS bloque sur 'tanstackStart', on utilise cette syntaxe 
  // pour contourner la vérification stricte tout en gardant l'option active
  ...({
    tanstackStart: {
      router: {
        type: 'hash', // Plus sûr pour GitHub Pages (évite les 404)
      },
      prerender: {
        routes: ['/'],
      },
    },
  } as any),
});