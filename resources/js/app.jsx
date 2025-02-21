import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import GuestLayout from '@/Layouts/GuestLayout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`]

    // set a default layout for your app
    page.default.layout = page.default.layout || (page => <GuestLayout children={page} />)

    // return the page
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})