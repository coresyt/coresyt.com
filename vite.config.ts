import { sveltekit } from '@sveltejs/kit/vite'
import oxlint from 'vite-plugin-oxlint'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()]
})
