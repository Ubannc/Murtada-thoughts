import { create } from 'zustand';

interface AdminState {
  isAuthenticated: boolean;
  token: string;
  authenticate: (inputToken: string) => boolean;
  logout: () => void;
}

const ADMIN_TOKEN = '85JpSoF5cc030g9e8GeC';

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  token: '',
  authenticate: (inputToken: string) => {
    const isValid = inputToken === ADMIN_TOKEN;
    if (isValid) {
      set({ isAuthenticated: true, token: inputToken });
    }
    return isValid;
  },
  logout: () => set({ isAuthenticated: false, token: '' }),
}));