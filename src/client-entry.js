import { app, router } from './app.js'

router.onReady(() => {
  app.$mount('#app')
})

// app.$mount('#app')

// if (module.hot) {
//   module.hot.accept()
// }
