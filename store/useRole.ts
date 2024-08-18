import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "Admin" | "Client" | "UnAuthenticated";

interface AuthState {
  role: Role;
  changeRole: (role: Role) => void;
}

const useRole = create<AuthState>()(
  persist(
    (set) => ({
      role: "UnAuthenticated",
      changeRole: (role) => set({ role }),
    }),
    {
      name: "auth",
    }
  )
);

export default useRole;
