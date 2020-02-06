import VueRouter from 'vue-router';

import RouteView from './components/route-view'
import Dashboard from './pages/dashboard'
import NewCard from './pages/card/new';
import EditCard from './pages/card/edit';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/card',
      name: 'card',
      component: RouteView,
      children: [
        {
          path: 'new',
          name: 'new-card',
          component: NewCard
        },
        {
          path: ':id/edit',
          name: 'edit-card',
          component: EditCard 
        }
      ]
    }
  ]
})
  