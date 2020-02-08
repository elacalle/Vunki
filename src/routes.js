import Dashboard from './pages/dashboard'
import ListCard from './pages/card'
import NewCard from './pages/card/new'
import EditCard from './pages/card/edit'

export default {
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/card',
      name: 'card',
      component: ListCard,
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
}
