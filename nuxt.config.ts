// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/global.css',
    '~/assets/css/fonts.css',
  ],
  
  // app:{
  //   head:{
  //     "script":[
  //       { src: '/dist/lib/highlight.min.js' },
  //     ],
  //     "link": [
  //       { rel: 'stylesheet', href: '/dist/lib/default.min.css' }
  //     ],
  //   },
  // }
});

