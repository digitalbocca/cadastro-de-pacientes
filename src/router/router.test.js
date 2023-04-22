import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import routerBeforeEach from '@/router/before-each'

let mockedUser = 'mockedUser@site.com'

vi.mock('@/stores/user', async importOriginal => {
  const mod = await importOriginal()

  return {
    ...mod,
    useUserStore () {
      return {
        getUser: mockedUser
      }
    }
  }
})

const routerMockData = {
  to: {
    name: 'login',
    path: '/login'
  },
  from: {
    // ...
  },
  next: value => value
}

describe('router', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should return a default route if logged user access login page', async () => {
    const next = await routerBeforeEach(routerMockData.to, routerMockData.from, routerMockData.next)
    expect(next).toBe('/')
  })

  it('should return "/login" route if anonymous user access protected pages', async () => {
    routerMockData.to.name = 'home'
    mockedUser = ''

    const next = await routerBeforeEach(routerMockData.to, routerMockData.from, routerMockData.next)
    expect(next).toBe('login')
  })
})
