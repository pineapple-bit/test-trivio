import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/pages/MainPage'
import BuyPage from '@/pages/BuyPage'
import ReportPage from '@/pages/ReportPage'
import TravelPage from '@/pages/TravelPage'
import DocsPage from '@/pages/DocsPage'
import ServicePage from '@/pages/ServicePage'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/buy',
        component: BuyPage
    },
    {
        path: '/report',
        component: ReportPage
    },
    {
        path: '/travel',
        component: TravelPage
    },
    {
        path: '/docs',
        component: DocsPage
    },
    {
        path: '/service',
        component: ServicePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
