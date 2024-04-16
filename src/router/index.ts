import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import FAQView from '@/views/FAQView.vue'
import TestView from '@/views/TestView.vue'
import MyTestsView from '@/views/MyTestsView.vue'
import NoticeOfPrivacyView from '@/views/NoticeOfPrivacyView.vue'
import TaCView from '@/views/TaCView.vue'
import CreateTestView from '@/views/CreateTestView.vue'
import EditTestView from '@/views/EditTestView.vue'
import AnswerTestView from '@/views/AnswerTestView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SearchTestView from '@/views/SearchTestView.vue'
import UserService from '@/services/AuthService'

const service = new UserService()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // 1
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 2
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    // 3
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    // 4
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    // 5
    {
      path: '/aviso_privacidad',
      name: 'aviso_privacidad',
      component: NoticeOfPrivacyView
    },
    // 6
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    },
    // 7
    {
      path: '/terminos_condiciones',
      name: 'terminos_condiciones',
      component: TaCView
    },
    // 8
    {
      path: '/test/preview/:id',
      name: 'test_preview',
      component: TestView
    },
    // 9
    {
      path: '/my_tests',
      name: 'my_tests',
      component: MyTestsView
    },
    // 10
    {
      path: '/create_test',
      name: 'create_test',
      component: CreateTestView
    },
    // 11
    {
      path: '/edit_test/:id',
      name: 'edit_test',
      component: EditTestView
    },
    // 12
    {
      // ???
      path: '/test/reply-one/:idtest',
      name: 'reply-one',
      component: AnswerTestView
    },
    // 13
    {
      path: '/search/:query',
      name: 'search',
      component: SearchTestView
    },
  ]
})

export default router

router.beforeEach(async(to, from, next) => {
  console.log(to.name)
  if (to.name === 'create_test' || to.name === 'my_tests' || to.name === 'edit_test') {
    const isAuthenticated = await service.userLoged() ?? false
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      next({ name: 'dashboard' }); 
      console.log('no autorizado')
    } else {
      next();
      console.log('autorizado')
    }
  } else {
    next(); 
  }
});