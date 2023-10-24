import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77d6b362 = () => interopDefault(import('../pages/account/forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _75a04833 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _0582ffc9 = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _373740d7 = () => interopDefault(import('../pages/auth/confirm-mail.vue' /* webpackChunkName: "pages/auth/confirm-mail" */))
const _40d7583c = () => interopDefault(import('../pages/auth/confirm-mail-2.vue' /* webpackChunkName: "pages/auth/confirm-mail-2" */))
const _a6d6782a = () => interopDefault(import('../pages/auth/lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _563f3360 = () => interopDefault(import('../pages/auth/lock-screen-2.vue' /* webpackChunkName: "pages/auth/lock-screen-2" */))
const _87557374 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _12ec842a = () => interopDefault(import('../pages/auth/login-2.vue' /* webpackChunkName: "pages/auth/login-2" */))
const _1b648afd = () => interopDefault(import('../pages/auth/logout.vue' /* webpackChunkName: "pages/auth/logout" */))
const _624a9e3c = () => interopDefault(import('../pages/auth/logout-2.vue' /* webpackChunkName: "pages/auth/logout-2" */))
const _25232868 = () => interopDefault(import('../pages/auth/recoverpwd.vue' /* webpackChunkName: "pages/auth/recoverpwd" */))
const _45ef99f1 = () => interopDefault(import('../pages/auth/recoverpwd-2.vue' /* webpackChunkName: "pages/auth/recoverpwd-2" */))
const _45cde4d6 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _0454f87b = () => interopDefault(import('../pages/auth/register-2.vue' /* webpackChunkName: "pages/auth/register-2" */))
const _8ef5f300 = () => interopDefault(import('../pages/auth/signin-signup.vue' /* webpackChunkName: "pages/auth/signin-signup" */))
const _b46b50b6 = () => interopDefault(import('../pages/auth/signin-signup-2.vue' /* webpackChunkName: "pages/auth/signin-signup-2" */))
const _8445eee0 = () => interopDefault(import('../pages/extras/404.vue' /* webpackChunkName: "pages/extras/404" */))
const _32d0acec = () => interopDefault(import('../pages/extras/404-alt.vue' /* webpackChunkName: "pages/extras/404-alt" */))
const _1aea3466 = () => interopDefault(import('../pages/extras/500.vue' /* webpackChunkName: "pages/extras/500" */))
const _0794a6c2 = () => interopDefault(import('../pages/extras/coming-soon.vue' /* webpackChunkName: "pages/extras/coming-soon" */))
const _58d93916 = () => interopDefault(import('../pages/extras/faqs.vue' /* webpackChunkName: "pages/extras/faqs" */))
const _33880ceb = () => interopDefault(import('../pages/extras/maintenance.vue' /* webpackChunkName: "pages/extras/maintenance" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account/forgot-password",
    component: _77d6b362,
    name: "account-forgot-password___en"
  }, {
    path: "/account/login",
    component: _75a04833,
    name: "account-login___en"
  }, {
    path: "/account/register",
    component: _0582ffc9,
    name: "account-register___en"
  }, {
    path: "/auth/confirm-mail",
    component: _373740d7,
    name: "auth-confirm-mail___en"
  }, {
    path: "/auth/confirm-mail-2",
    component: _40d7583c,
    name: "auth-confirm-mail-2___en"
  }, {
    path: "/auth/lock-screen",
    component: _a6d6782a,
    name: "auth-lock-screen___en"
  }, {
    path: "/auth/lock-screen-2",
    component: _563f3360,
    name: "auth-lock-screen-2___en"
  }, {
    path: "/auth/login",
    component: _87557374,
    name: "auth-login___en"
  }, {
    path: "/auth/login-2",
    component: _12ec842a,
    name: "auth-login-2___en"
  }, {
    path: "/auth/logout",
    component: _1b648afd,
    name: "auth-logout___en"
  }, {
    path: "/auth/logout-2",
    component: _624a9e3c,
    name: "auth-logout-2___en"
  }, {
    path: "/auth/recoverpwd",
    component: _25232868,
    name: "auth-recoverpwd___en"
  }, {
    path: "/auth/recoverpwd-2",
    component: _45ef99f1,
    name: "auth-recoverpwd-2___en"
  }, {
    path: "/auth/register",
    component: _45cde4d6,
    name: "auth-register___en"
  }, {
    path: "/auth/register-2",
    component: _0454f87b,
    name: "auth-register-2___en"
  }, {
    path: "/auth/signin-signup",
    component: _8ef5f300,
    name: "auth-signin-signup___en"
  }, {
    path: "/auth/signin-signup-2",
    component: _b46b50b6,
    name: "auth-signin-signup-2___en"
  }, {
    path: "/extras/404",
    component: _8445eee0,
    name: "extras-404___en"
  }, {
    path: "/extras/404-alt",
    component: _32d0acec,
    name: "extras-404-alt___en"
  }, {
    path: "/extras/500",
    component: _1aea3466,
    name: "extras-500___en"
  }, {
    path: "/extras/coming-soon",
    component: _0794a6c2,
    name: "extras-coming-soon___en"
  }, {
    path: "/extras/faqs",
    component: _58d93916,
    name: "extras-faqs___en"
  }, {
    path: "/extras/maintenance",
    component: _33880ceb,
    name: "extras-maintenance___en"
  }, {
    path: "/ar/account/forgot-password",
    component: _77d6b362,
    name: "account-forgot-password___ar"
  }, {
    path: "/ar/account/login",
    component: _75a04833,
    name: "account-login___ar"
  }, {
    path: "/ar/account/register",
    component: _0582ffc9,
    name: "account-register___ar"
  }, {
    path: "/ar/auth/confirm-mail",
    component: _373740d7,
    name: "auth-confirm-mail___ar"
  }, {
    path: "/ar/auth/confirm-mail-2",
    component: _40d7583c,
    name: "auth-confirm-mail-2___ar"
  }, {
    path: "/ar/auth/lock-screen",
    component: _a6d6782a,
    name: "auth-lock-screen___ar"
  }, {
    path: "/ar/auth/lock-screen-2",
    component: _563f3360,
    name: "auth-lock-screen-2___ar"
  }, {
    path: "/ar/auth/login",
    component: _87557374,
    name: "auth-login___ar"
  }, {
    path: "/ar/auth/login-2",
    component: _12ec842a,
    name: "auth-login-2___ar"
  }, {
    path: "/ar/auth/logout",
    component: _1b648afd,
    name: "auth-logout___ar"
  }, {
    path: "/ar/auth/logout-2",
    component: _624a9e3c,
    name: "auth-logout-2___ar"
  }, {
    path: "/ar/auth/recoverpwd",
    component: _25232868,
    name: "auth-recoverpwd___ar"
  }, {
    path: "/ar/auth/recoverpwd-2",
    component: _45ef99f1,
    name: "auth-recoverpwd-2___ar"
  }, {
    path: "/ar/auth/register",
    component: _45cde4d6,
    name: "auth-register___ar"
  }, {
    path: "/ar/auth/register-2",
    component: _0454f87b,
    name: "auth-register-2___ar"
  }, {
    path: "/ar/auth/signin-signup",
    component: _8ef5f300,
    name: "auth-signin-signup___ar"
  }, {
    path: "/ar/auth/signin-signup-2",
    component: _b46b50b6,
    name: "auth-signin-signup-2___ar"
  }, {
    path: "/ar/extras/404",
    component: _8445eee0,
    name: "extras-404___ar"
  }, {
    path: "/ar/extras/404-alt",
    component: _32d0acec,
    name: "extras-404-alt___ar"
  }, {
    path: "/ar/extras/500",
    component: _1aea3466,
    name: "extras-500___ar"
  }, {
    path: "/ar/extras/coming-soon",
    component: _0794a6c2,
    name: "extras-coming-soon___ar"
  }, {
    path: "/ar/extras/faqs",
    component: _58d93916,
    name: "extras-faqs___ar"
  }, {
    path: "/ar/extras/maintenance",
    component: _33880ceb,
    name: "extras-maintenance___ar"
  }, {
    path: "/es/account/forgot-password",
    component: _77d6b362,
    name: "account-forgot-password___es"
  }, {
    path: "/es/account/login",
    component: _75a04833,
    name: "account-login___es"
  }, {
    path: "/es/account/register",
    component: _0582ffc9,
    name: "account-register___es"
  }, {
    path: "/es/auth/confirm-mail",
    component: _373740d7,
    name: "auth-confirm-mail___es"
  }, {
    path: "/es/auth/confirm-mail-2",
    component: _40d7583c,
    name: "auth-confirm-mail-2___es"
  }, {
    path: "/es/auth/lock-screen",
    component: _a6d6782a,
    name: "auth-lock-screen___es"
  }, {
    path: "/es/auth/lock-screen-2",
    component: _563f3360,
    name: "auth-lock-screen-2___es"
  }, {
    path: "/es/auth/login",
    component: _87557374,
    name: "auth-login___es"
  }, {
    path: "/es/auth/login-2",
    component: _12ec842a,
    name: "auth-login-2___es"
  }, {
    path: "/es/auth/logout",
    component: _1b648afd,
    name: "auth-logout___es"
  }, {
    path: "/es/auth/logout-2",
    component: _624a9e3c,
    name: "auth-logout-2___es"
  }, {
    path: "/es/auth/recoverpwd",
    component: _25232868,
    name: "auth-recoverpwd___es"
  }, {
    path: "/es/auth/recoverpwd-2",
    component: _45ef99f1,
    name: "auth-recoverpwd-2___es"
  }, {
    path: "/es/auth/register",
    component: _45cde4d6,
    name: "auth-register___es"
  }, {
    path: "/es/auth/register-2",
    component: _0454f87b,
    name: "auth-register-2___es"
  }, {
    path: "/es/auth/signin-signup",
    component: _8ef5f300,
    name: "auth-signin-signup___es"
  }, {
    path: "/es/auth/signin-signup-2",
    component: _b46b50b6,
    name: "auth-signin-signup-2___es"
  }, {
    path: "/es/extras/404",
    component: _8445eee0,
    name: "extras-404___es"
  }, {
    path: "/es/extras/404-alt",
    component: _32d0acec,
    name: "extras-404-alt___es"
  }, {
    path: "/es/extras/500",
    component: _1aea3466,
    name: "extras-500___es"
  }, {
    path: "/es/extras/coming-soon",
    component: _0794a6c2,
    name: "extras-coming-soon___es"
  }, {
    path: "/es/extras/faqs",
    component: _58d93916,
    name: "extras-faqs___es"
  }, {
    path: "/es/extras/maintenance",
    component: _33880ceb,
    name: "extras-maintenance___es"
  }, {
    path: "/fr/account/forgot-password",
    component: _77d6b362,
    name: "account-forgot-password___fr"
  }, {
    path: "/fr/account/login",
    component: _75a04833,
    name: "account-login___fr"
  }, {
    path: "/fr/account/register",
    component: _0582ffc9,
    name: "account-register___fr"
  }, {
    path: "/fr/auth/confirm-mail",
    component: _373740d7,
    name: "auth-confirm-mail___fr"
  }, {
    path: "/fr/auth/confirm-mail-2",
    component: _40d7583c,
    name: "auth-confirm-mail-2___fr"
  }, {
    path: "/fr/auth/lock-screen",
    component: _a6d6782a,
    name: "auth-lock-screen___fr"
  }, {
    path: "/fr/auth/lock-screen-2",
    component: _563f3360,
    name: "auth-lock-screen-2___fr"
  }, {
    path: "/fr/auth/login",
    component: _87557374,
    name: "auth-login___fr"
  }, {
    path: "/fr/auth/login-2",
    component: _12ec842a,
    name: "auth-login-2___fr"
  }, {
    path: "/fr/auth/logout",
    component: _1b648afd,
    name: "auth-logout___fr"
  }, {
    path: "/fr/auth/logout-2",
    component: _624a9e3c,
    name: "auth-logout-2___fr"
  }, {
    path: "/fr/auth/recoverpwd",
    component: _25232868,
    name: "auth-recoverpwd___fr"
  }, {
    path: "/fr/auth/recoverpwd-2",
    component: _45ef99f1,
    name: "auth-recoverpwd-2___fr"
  }, {
    path: "/fr/auth/register",
    component: _45cde4d6,
    name: "auth-register___fr"
  }, {
    path: "/fr/auth/register-2",
    component: _0454f87b,
    name: "auth-register-2___fr"
  }, {
    path: "/fr/auth/signin-signup",
    component: _8ef5f300,
    name: "auth-signin-signup___fr"
  }, {
    path: "/fr/auth/signin-signup-2",
    component: _b46b50b6,
    name: "auth-signin-signup-2___fr"
  }, {
    path: "/fr/extras/404",
    component: _8445eee0,
    name: "extras-404___fr"
  }, {
    path: "/fr/extras/404-alt",
    component: _32d0acec,
    name: "extras-404-alt___fr"
  }, {
    path: "/fr/extras/500",
    component: _1aea3466,
    name: "extras-500___fr"
  }, {
    path: "/fr/extras/coming-soon",
    component: _0794a6c2,
    name: "extras-coming-soon___fr"
  }, {
    path: "/fr/extras/faqs",
    component: _58d93916,
    name: "extras-faqs___fr"
  }, {
    path: "/fr/extras/maintenance",
    component: _33880ceb,
    name: "extras-maintenance___fr"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
