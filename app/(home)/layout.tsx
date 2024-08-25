import Provider from "./Provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      {children}
    </Provider>
  );
};
export default Layout;
