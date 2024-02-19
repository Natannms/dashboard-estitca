import { create } from 'zustand'
import { Schedule } from '../types/Schedule'

interface userState  {
  islogged: boolean
  userType: string
  setIsLogged: (value: boolean) => void
}
interface useNavigationState  {
  view: string
  setView: (value: string) => void
}

interface useModalScheduleState  {
  schedule: Schedule | null
  setSchedule: (value: Schedule) => void
}

export const userStore = create<userState >()((set) => ({
  islogged: true,
  userType: 'professional',
  setIsLogged: (value) => set(() => ({ islogged: value })),
}))

export const useNavigationStore = create<useNavigationState >()((set) => ({
  view: 'DASHBOARD',
  setView: (value) => set(() => ({ view: value })),
}))

export const useModalScheduleStore = create<useModalScheduleState >()((set) => ({
  schedule: null,
  setSchedule: (value) => set(() => ({ schedule: value })),
}))
