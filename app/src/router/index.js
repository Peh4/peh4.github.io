import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Projet from 'components/Projet'
import Contact from 'components/Contact'
import Travaux from 'components/Travaux'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    { path: '/travaux',
      name: 'Travaux',
      component: Travaux
    },
    { path: '/projet/:id',
      name: 'Projet',
      component: Projet
    },
    { path: '/contact',
      name: 'Contact',
      component: Contact
    }

  ]
})
