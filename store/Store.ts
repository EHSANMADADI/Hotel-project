import { create } from 'zustand'

type Store = {
     isAdmin: boolean
     changeRole: () => void
}

const useStore = create<Store>()((set) => ({
     isAdmin: false,
     changeRole: () => set((state) => ({ isAdmin: state.isAdmin })),
}))
export default useStore;

