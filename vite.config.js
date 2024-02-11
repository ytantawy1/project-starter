import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			"@": "./src",
		},
	},
	build: {
		target: "esnext", 
		rollupOptions: {
			input: {
				index: resolve(__dirname, "./index.html"),
				admin: resolve(__dirname, "./to-do-list.html"),
			},
		},
	},
});
