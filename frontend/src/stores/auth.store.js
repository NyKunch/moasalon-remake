import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
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

  logout: async () => {
    try {
      await axiosInstance.get('/auth/logout')
      set({ user: null, isAuthenticated: false, error: null })
    } catch (error) {
      set({ error: error.response.data.message || 'Error logging out' })
    } 
  },

  checkAuth: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('/auth/check-auth')
      set({ user: response.data, isAuthenticated: true })
    } catch (error) {
      set({ isAuthenticated: false })
    } finally {
      set({ isLoading: false })
    }
  }
}))