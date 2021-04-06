// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap'
  }),
  head.meta.push({
    name: 'description',
    content: "Daniel Ortez's personal portfolio. Where anyone can see his contact and/or projects."
  })
}
