// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    {
      name: 'pagefind',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const { exec } = await import('child_process');
          const { promisify } = await import('util');
          const execPromise = promisify(exec);
          
          // Run Pagefind indexing after build
          try {
            await execPromise(`npx pagefind --source ${dir.pathname}`);
            console.log('Pagefind indexing completed');
          } catch (error) {
            console.error('Pagefind indexing error:', error);
          }
        }
      }
    }
  ]
});