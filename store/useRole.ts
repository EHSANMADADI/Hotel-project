import { create } from "zustand";
import { persist } from "zustand/middleware";
import { clearCookie } from "@/utils/cookie";

type Role = "Admin" | "Client" | "UnAuthenticated";

interface AuthState {
  role: Role;
  changeRole: (role: Role) => void;
}

const useRole = create<AuthState>()(
  persist(
    (set) => ({
      role: "UnAuthenticated",
      changeRole: (role) => {
        if (role === "UnAuthenticated") clearCookie();
        set({ role });
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useRole;
