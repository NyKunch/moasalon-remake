import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error:null,
  isLoading: false,
  
  signup: async () => {},

  login: async (username, password) => {
    set({ isLoading: true, error: null})
    try {
      const response = await axiosInstance.post('/auth/login', { username, password })
      set({ user: response.data.user, isAuthenticated: true})
    } catch (error) {
      set({ error: error.response.data.message || 'Error logging in' })
    } finally {
      set({ isLoading: false})
    }
  },

  logout: async () => {},

  checkAuth: async () => {
    set({ isLoading: true })
    try {
      const response = await axiosInstance.get('/auth/checkAuth')
      set({ user: response.data.user, isAuthenticated: true })
    } catch (error) {
      set({ error: error.response.data.message || 'Error checking authentication' })
    } finally {
      set({ isLoading: false })
    }
  }
}))