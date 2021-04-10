import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/HelloWorld';
import ViewHello from '@/components/ViewWorld';
import Details from '@/components/Details';
import StaffList from '@/components/StaffList';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'list' }
    },
    {
      path: '/list',
      name: 'list',
      component: Hello
    },
    {
      path: '/view',
      name: 'ViewHello',
      component: ViewHello
    },
    {
      path: '/userDetails',
      name: 'Details',
      component: Details
    },
    {
      path: '/staffList',
      name: 'StaffList',
      component: StaffList
    }

    
  ]
});
