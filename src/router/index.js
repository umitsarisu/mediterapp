import { createRouter, createWebHashHistory  } from 'vue-router'
import CopyPastePage from "@/views/CopyPastePage"
import CopyPaste from "@/pages/copy-paste/main/CopyPaste"
import ResultPage from "@/pages/copy-paste/result/ResultPage"
import MagnifyingGlass from "@/views/MagnifyingGlass"
import RandomValueGenerator from "@/views/RandomValueGenerator"
import RunInPage from "@/views/RunInPage"
import SparePartsPage from "../views/SparePartsPage"
import SpareParts from "../pages/spare-parts/SpareParts.vue"
import NewSparePart from "../pages/spare-parts/NewSparePart.vue"
import SignUpPage from "../views/SignUpPage.vue"
import HomePage from "../pages/HomePage.vue"
import CurrentCodesPage from "@/views/CurrentCodesPage"
import NewCurrent from "@/pages/current-codes/NewCurrent"
import CurrentList from "@/pages/current-codes/CurrentList"

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  },
  {
    path: "/copy-paste-page",
    component: CopyPastePage,
    children: [
      { path: "", component: CopyPaste },
      { path: "/copy-paste-page/result-page", component: ResultPage },
    ]
  },
  {
    path: "/",
    component: CurrentCodesPage,
    redirect: "/current-codes-page"
  },
  {
    path: "/sign-up",
    component: SignUpPage
  },
  {
    path: "/current-codes-page",
    component: CurrentCodesPage,
    children: [
      { path: "", component: CurrentList },
      { path: "/current-codes-page/update/:partId", component: NewCurrent },
      { path: "/current-codes-page/new-current", component: NewCurrent },
    ]
  },
  {
    path: "/spare-parts-page",
    component: SparePartsPage,
    children: [
      { path: "", component: SpareParts },
      { path: "/spare-parts-page/update/:partId", component: NewSparePart },
      { path: "/spare-parts-page/new-part", component: NewSparePart },
    ]
  },
  {
    path: "/magnifying-glass",
    component: MagnifyingGlass
  },
  {
    path: "/random-value-generator",
    component: RandomValueGenerator
  },
  {
    path: "/run-in-page",
    component: RunInPage
  },
]

const router = createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  routes,
})

export default router
