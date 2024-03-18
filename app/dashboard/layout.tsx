import DashboardContainer from "@/components/shared/containers/dashboard";
import DashboardLayoutImpl from "./types";

const Layout = ({ children }: DashboardLayoutImpl) => {
  return (
    <>
      <DashboardContainer>{children}</DashboardContainer>
    </>
  );
};
export default Layout;
