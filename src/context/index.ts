import { create } from 'zustand'

interface userState  {
  islogged: boolean
  userType: string
  setIsLogged: (value: boolean) => void
}

export const userStore = create<userState >()((set) => ({
  islogged: true,
  userType: 'professional',
  setIsLogged: (value) => set(() => ({ islogged: value })),
}))