import { create } from 'zustand'

type Store = {
     isAdmin: boolean |null
     changeRole: () => void
}

const useStore = create<Store>()((set) => ({
     isAdmin: null,
     changeRole: () => set((state) => ({ isAdmin: state.isAdmin })),
}))
export default useStore;

