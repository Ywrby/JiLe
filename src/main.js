import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import router from './router'

import '@/styles/index.scss' // global css
//import vuex
import store from './store'

//引入自选图标库
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
app.use(ElementPlus, { size: 'mini', locale: zhCn })

//global mixin(can choose by you need )
import elementMixin from '@/mixins/elementMixin'
app.mixin(elementMixin)
import commonMixin from '@/mixins/commonMixin'
app.mixin(commonMixin)
import routerMixin from '@/mixins/routerMixin'
app.mixin(routerMixin)

//import axios req
import axiosReq from '@/utils/axiosReq'
app.config.globalProperties.$axiosReq = axiosReq

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

//global mount moment-mini
import $momentMini from 'moment-mini'
app.config.globalProperties.$momentMini = $momentMini

//import global directive
import directive from '@/directive'
directive(app)

//import router  intercept
import './permission'

//error log  collection
import errorLog from '@/hooks/useErrorLog'
errorLog()

//引入视频播放组件
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import 'videojs-flash'

import VueGridLayout from 'vue-grid-layout'




app.use(store).use(router).use(VueVideoPlayer).use(VueGridLayout).mount('#app');
