// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head:{
      title: "portfolio",
      link: [
        {
          // for import bootstrap CDN
          // rel: 'stylesheet',
          // href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }
      ]
    }

  }
})
