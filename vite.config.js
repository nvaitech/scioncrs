import { defineConfig } from 'vite';
import url from 'rollup-plugin-url' ;

export default defineConfig({
  plugins: [
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
      limit: 0, // Disable inline base64 encoding
    })
  ]
});
