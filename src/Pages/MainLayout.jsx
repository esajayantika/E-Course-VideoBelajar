import { Outlet } from "react-router";

function MainLayout({ navbar }) {
  return (
    <>
      {navbar}
      <main className="container px-3 px-md-4">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
