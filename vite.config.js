import { defineConfig } from "vite"

export default defineConfig({
 base: "/",
// permitir conexões externas:
  server: { host: true}
})
