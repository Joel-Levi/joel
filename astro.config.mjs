import { defineConfig } from 'astro/config';
import fg from 'fast-glob';

export default defineConfig({
    site: 'https://Joel-Levi.github.io',
    base: '/joel',
    vite: {
        plugins: [
            {
                name: 'watch-public',
                enforce: 'post',
                handleHotUpdate({ file, server }) {
                  if (file.endsWith('.js')) {
                    server.ws.send({
                      type: 'full-reload',          
                      path: '*'
                    });
                  }
                },
              }
        ]
    }
  })