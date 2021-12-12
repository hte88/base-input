import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Success from './views/Success.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/signin',
    meta: { title: 'Signin' },
    component: Signin,
  },
  {
    path: '/signup',
    meta: { title: 'Signup' },
    component: Signup,
  },
  {
    path: '/success',
    meta: { title: 'Success' },
    component: Success,
  },
  { path: '/:path(.*)', component: NotFound },
]
