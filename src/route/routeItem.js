/**
 * @author 陆海鹍
 * @date 2020-07-15 15:26:18
 * @description 描述 路由定义
 * @email luhaikun@cecdat.com
 * @copyright Copyright 2018 CEC(Fujian) Healthcare Big Data Operation Service Co., Ltd. All rights reserved.
 */
import EmptyRoute from './EmptyRoute'
import Staff from '../view/staff'
import Nav from '../view/nav'
import Move from '../view/study/move'
import NavBar from '../view/study/navbar'
import VSlide from '../view/study/vslide'
import FourLeaf from '../view/study/fourleaf'
import Arrow from '../view/arrow'

const routes = [
  {
    path: '/staff',
    meta: {
      name: '员工管理',
      icon: 'team'
    },
    component: EmptyRoute,
    routes: [
      {
        path: '/staff/list',
        meta: {
          name: '员工列表'
        },
        component: Staff
      }
    ]
  },
  {
    path: '/nav',
    meta: {
      name: '右侧导航'
    },
    component: Nav
  },
  {
    path: '/origin',
    meta: {
      name: '原始素材',
      icon: 'pie-chart'
    },
    component: EmptyRoute,
    routes: [
      {
        path: '/origin/move',
        meta: {
          name: '360移动'
        },
        component: Move
      },
      {
        path: '/origin/navbar',
        meta: {
          name: '炫酷导航'
        },
        component: NavBar
      },
      {
        path: '/origin/vslide',
        meta: {
          name: '垂直滑动'
        },
        component: VSlide
      },
      {
        path: '/origin/fourleaf',
        meta: {
          name: '四叶草'
        },
        component: FourLeaf
      },
      {
        path: '/origin/arrow',
        meta: {
          name: '箭头'
        },
        component: Arrow
      }
    ]
  }
]
export default routes