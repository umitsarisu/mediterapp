import { createRouter, createWebHashHistory } from 'vue-router'
// import CopyPaste from "../pages/copy-paste/CopyPaste.vue"
// import CurrentCodes from "../pages/current-codes/CurrentCodes.vue"
// import RunInForm from "../pages/forms/RunInForm.vue"
// import DeviceRegisterForm from "../pages/forms/DeviceRegisterForm.vue"
import SparePartsPage from "../views/SparePartsPage"
import SpareParts from "../pages/spare-parts/SpareParts.vue"
import SparePart from "../pages/spare-parts/SparePart.vue"
import SignUpPage from "../views/SignUpPage.vue"
import HomePage from "../pages/HomePage.vue"
import CurrentCodesPage from "@/views/CurrentCodesPage"

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  { path: "", component: SparePartsPage },
  { path: "/sign-up", component: SignUpPage },
  // { path: "/copy-paste", component: CopyPaste },
  { path: "/current-codes-page", component: CurrentCodesPage },
  // { path: "/run-in-form", component: RunInForm },
  // { path: "/device-register-form", component: DeviceRegisterForm },
  {
    path: "/spare-parts-page",
    component: SparePartsPage,
    children: [
      { path: "", component: SpareParts },
      { path: "/update/:partId", component: SparePart },
      { path: "/new-part", component: SparePart },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
