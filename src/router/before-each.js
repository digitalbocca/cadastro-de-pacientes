import { useUserStore } from '@/stores/user'
import { PROTECTED_ROUTES } from '@/constants'

export default async (to, _from, next) => {
  const userStore = useUserStore()

  const defaultRoute = import.meta.env.VITE_ROUTE_DEFAULT_PATH
  const loginRoute = import.meta.env.VITE_ROUTE_LOGIN_NAME

  const protectedRoutes = PROTECTED_ROUTES

  const toIsProtected = protectedRoutes.includes(to.name)
  const userIsLoggedIn = Boolean(userStore.getUser.length)

  const protectedRoutesRules = [
    toIsProtected,
    !userIsLoggedIn
  ]

  const loginRoutesRules = [
    to.name === loginRoute,
    userIsLoggedIn
  ]

  if (loginRoutesRules.every(condition => condition === true)) {
    return next(defaultRoute)
  }

  if (protectedRoutesRules.every(condition => condition === true)) {
    return next(loginRoute)
  }

  return next()
}
