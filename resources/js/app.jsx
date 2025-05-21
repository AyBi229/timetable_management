import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import GuestLayout from '@/Layouts/GuestLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './Utilities/queryClient';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`]

    if (!page || !page.default) {
      throw new Error(`Page not found: ./Pages/${name}.jsx`);
    }

    // default layout is applied to all pages except Login
    if (name == 'Login' || name == 'Signup') {
      page.default.layout = null
    } else {
      page.default.layout = page.default.layout || (page => <GuestLayout children={page} />)
    }

    // return the page
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      // using react query for data fetching
      <QueryClientProvider client={queryClient}> 
        <App {...props} />
      </QueryClientProvider>
    )
  },
})