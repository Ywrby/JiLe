import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold' }
      }
    ]
  },
  {
    path: '/jile/all-ec',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'allEC',
        component: () => import('@/views/jile/allEC.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '全部书库', elSvgIcon: 'Management' }
      }
    ]
  },
  
  {
    path: '/jile/all-ic',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'all_IC',
        component: () => import('@/views/jile/all_IC.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '全部图集', elSvgIcon: 'PictureFilled' }
      }
    ]
  },
  
  {
    path: '/jile/all-vc',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'allVC',
        component: () => import('@/views/jile/allVC.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '全部影集', elSvgIcon: 'VideoCameraFilled' }
      }
    ]
  },



  {
    path: '/jile',
    component: Layout,
    meta: { title: 'jile', icon: 'user' },
    alwaysShow: true,
    hidden:true,
    children: [
      {
        path: 'easy-table',
        component: () => import('@/views/jile/easytableTest.vue'),
        name: 'easy-table',
        meta: { title: 'easytable测试' }
      },
      {
        path: 'test-forge',
        component: () => import('@/views/jile/testForge.vue'),
        name: 'test-forge',
        meta: { title: '打包测试' }
      },
      {
        path: 'ebook-page',
        component: () => import('@/views/jile/eBookPage.vue'),
        name: 'ebook-page',
        meta: { title: 'eBook测试' }
      },
      {
        path: 'transfer-page',
        component: () => import('@/views/jile/transferPage.vue'),
        name: 'transfer-page',
        meta: { title: '中转页面' }
      },
      {
        path: 'waterfall',
        component: () => import('@/views/waterfall/index.vue'),
        name: 'waterfall',
        meta: { title: 'waterfall测试' }
      },
      {
        path: 'video-cover',
        component: () => import('@/views/jile/videoCover.vue'),
        name: '视频封面测试',
        meta: { title: '视频封面测试' }
      },
      {
        path: 'test-indexeddb',
        component: () => import('@/views/jile/testIndexedDB.vue'),
        name: 'IndexedDB测试',
        meta: { title: 'IndexedDB测试' }
      },
      {
        path: 'color-thief',
        component: () => import('@/views/jile/colorThief.vue'),
        name: 'colorThief',
        meta: { title: 'colorThief测试' }
      },
      {
        path: 'test-naiveui',
        component: () => import('@/views/jile/naiveui.vue'),
        name: 'NaiveUI测试',
        meta: { title: 'NaiveUI测试' }
      },
      {
        path: 'dic-upload',
        component: () => import('@/views/jile/dicUpload.vue'),
        name: '文件夹获取测试',
        meta: { title: '文件夹获取测试' }
      },
      {
        path: 'addIc',
        component: () => import('@/views/jile/addIc.vue'),
        name: '创建图集测试',
        meta: { title: '创建图集测试' }
      },
      {
        path: 'photo-gallery',
        component: () => import('@/views/jile/photoGallery.vue'),
        name: '图片缩略图展示',
        meta: { title: '图片缩略图展示' }
      },
      {
        path: 'open-file',
        component: () => import('@/views/jile/openFile.vue'),
        name: '默认打开文件测试',
        meta: { title: '默认打开文件测试' }
      },
      {
        path: 'video-player',
        component: () => import('@/views/jile/videoPlayer.vue'),
        name: '视频播放测试',
        meta: { title: '视频播放测试' }
      },
      {
        path: 'image-player',
        component: () => import('@/views/jile/imagePlayer.vue'),
        name: '图片浏览器',
        meta: { title: '图片浏览器' }
      },
      {
        path: 'unzip-test',
        component: () => import('@/views/jile/unzipTest.vue'),
        name: '文件解压测试',
        meta: { title: '文件解压测试' }
      },
      {
        path: 'pagination-test',
        component: () => import('@/views/jile/paginationTest.vue'),
        name: '分页测试',
        meta: { title: '分页测试' }
      },
    ]
  },

  {
    path: '/electron',
    component: Layout,
    meta: { title: 'electron', icon: 'user' },
    alwaysShow: true,
    hidden: true,
    children: [
      {
        path: 'main-renderer-comm',
        component: () => import('@/views/electron/MainRendererComm.vue'),
        name: 'MainRenderer',
        meta: { title: 'Main Renderer' }
      },
      {
        path: 'electron-demo',
        component: () => import('@/views/electron/ElectronDemo.vue'),
        name: 'ElectronDemo',
        meta: { title: 'Electron Demo' }
      },
      {
        path: 'fs-extra',
        component: () => import('@/views/electron/FsExtra.vue'),
        name: 'FsExtra',
        meta: { title: 'fs-extra' }
      },
      {
        path: 'notify-netListen',
        component: () => import('@/views/electron/NotifyNetListen.vue'),
        name: 'NotifyNetListen',
        meta: { title: 'Notify Net' }
      },
      {
        path: 'nedb-demo',
        component: () => import('@/views/electron/NedbDemo.vue'),
        name: 'NedbDemo',
        meta: { title: 'NedbDemo' }
      },
      {
        path: 'indexDb-demo.vue',
        component: () => import('@/views/electron/IndexDbDemo.vue'),
        name: 'IndexDbDemo',
        meta: { title: 'IndexDbDemo' }
      },
      {
        path: 'test-IndexedDB.vue',
        component: () => import('@/views/electron/testIndexedDB.vue'),
        name: 'testIndexedDB',
        meta: { title: 'testIndexedDB' }
      }
    ]
  },

  {
    path: '/writing-demo',
    component: Layout,
    hidden: true,
    meta: { title: 'Writing Demo', icon: 'eye-open' },
    alwaysShow: true,
    children: [
      {
        path: 'hook',
        component: () => import('@/views/example/hook/Hook.vue'),
        name: 'Hook',
        meta: { title: 'Hook-Demo' }
      },
      {
        path: 'vuex-use',
        component: () => import('@/views/example/vuex-use/VuexUse.vue'),
        name: 'VuexUse',
        meta: { title: 'Vuex-Demo' }
      },
      {
        path: 'mock-test',
        component: () => import('@/views/example/mock-test/MockTest.vue'),
        name: 'MockTest',
        meta: { title: 'Mock-Demo' }
      },
      {
        path: 'svg-icon',
        component: () => import('@/views/example/svg-icon/SvgIcon.vue'),
        name: 'SvgIcon',
        meta: { title: 'Svg-Demo' }
      },
      {
        path: 'parent-children',
        component: () => import('@/views/example/parent-children/Parent.vue'),
        name: 'Parent',
        meta: { title: 'Parent-Children' }
      },
      {
        path: 'keep-alive',
        component: () => import('@/views/example/keep-alive'),
        name: 'KeepAlive',
        //cachePage: cachePage when page enter, default false
        //leaveRmCachePage: remove cachePage when page leave, default false
        meta: { title: 'Keep-Alive', cachePage: true, leaveRmCachePage: false }
      },
      {
        path: 'router-demo-f',
        name: 'routerDemoF',
        hidden: true,
        component: () => import('@/views/example/keep-alive/RouterDemoF.vue'),
        meta: { title: 'RouterDemo-F', activeMenu: '/writing-demo/keep-alive' }
      },
      {
        path: 'router-demo-s',
        name: 'routerDemoS',
        hidden: true,
        component: () => import('@/views/example/keep-alive/RouterDemoS.vue'),
        meta: { title: 'RouterDemo-S', activeMenu: '/writing-demo/keep-alive' }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
