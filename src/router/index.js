import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/business',
    component: Layout,
    redirect: '/business/acceptance',
    name: 'Business',
    meta: { title: '业扩受理', icon: 'el-icon-s-order' },
    children: [
      {
        path: 'acceptance',
        name: 'Acceptance',
        component: () => import('@/views/business/acceptance'),
        meta: { title: '业务受理' }
      },
      {
        path: 'customer',
        name: 'Customer',
        component: () => import('@/views/business/customer'),
        meta: { title: '客户挖掘' }
      },
      {
        path: 'repository',
        name: 'Repository',
        component: () => import('@/views/business/repository'),
        meta: { title: '储备库' }
      }
    ]
  },

  {
    path: '/capacity',
    component: Layout,
    redirect: '/capacity/calculation',
    name: 'Capacity',
    meta: { title: '容量测算', icon: 'el-icon-coin' },
    children: [
      {
        path: 'calculation',
        name: 'Calculation',
        component: () => import('@/views/capacity/calculation'),
        meta: { title: '容量测算' }
      },
      {
        path: 'optimization',
        name: 'Optimization',
        component: () => import('@/views/capacity/optimization'),
        meta: { title: '容量优化' }
      }
    ]
  },

  {
    path: '/reconnaissance',
    component: Layout,
    redirect: '/reconnaissance/dispatch',
    name: 'Reconnaissance',
    meta: { title: '现场勘查', icon: 'el-icon-location-information' },
    children: [
      {
        path: 'dispatch',
        component: () => import('@/views/reconnaissance/dispatch'), // Parent router-view
        name: 'Dispatch',
        meta: { title: '勘查派单' }
      },
      {
        path: 'support',
        component: () => import('@/views/reconnaissance/support'),
        name: 'Support',
        meta: { title: '勘查辅助' }
      },
      {
        path: 'result',
        component: () => import('@/views/reconnaissance/result'),
        name: 'Result',
        meta: { title: '勘查结果' }
      }
    ]
  },
  {
    path: '/programme',
    component: Layout,
    redirect: '/programme/select',
    name: 'Programme',
    meta: { title: '方案比选', icon: 'el-icon-document-checked' },
    children: [
      {
        path: 'formation',
        component: () => import('@/views/programme/formation'), // Parent router-view
        name: 'Formation',
        meta: { title: '方案编制' }
      },
      {
        path: 'select',
        component: () => import('@/views/programme/select'),
        name: 'Select',
        meta: { title: '方案比选' }
      },
      {
        path: 'equipment',
        component: () => import('@/views/programme/equipment'),
        name: 'Equipment',
        meta: { title: '用户设备选型' }
      }
    ]
  },
  {
    path: '/archives',
    component: Layout,
    redirect: '/archives',
    children: [{
      path: 'archives',
      name: 'Archives',
      component: () => import('@/views/archives/index'),
      meta: { title: '归档管理', icon: 'el-icon-document-checked' }
    }]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics',
    children: [{
      path: 'statistics',
      name: 'Statistics',
      component: () => import('@/views/statistics/index'),
      meta: { title: '统计分析', icon: 'el-icon-s-marketing' }
    }]
  },
  {
    path: '/energy',
    component: Layout,
    redirect: '/energy',
    children: [{
      path: 'energy',
      name: 'Energy',
      component: () => import('@/views/energy/index'),
      meta: { title: '综合能源', icon: 'el-icon-s-opportunity' }
    }]
  },
  {
    path: '/trusteeship',
    component: Layout,
    redirect: '/trusteeship',
    children: [{
      path: 'trusteeship',
      name: 'Trusteeship',
      component: () => import('@/views/trusteeship/index'),
      meta: { title: '托管服务', icon: 'el-icon-s-goods' }
    }]
  },
  {
    path: '/sysSetting',
    component: Layout,
    redirect: '/sysSetting',
    children: [{
      path: 'sysSetting',
      name: 'SysSetting',
      component: () => import('@/views/SysSetting/index'),
      meta: { title: '系统设置', icon: 'el-icon-s-tools' }
    }]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
