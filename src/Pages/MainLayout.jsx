import { useState, cloneElement } from "react";
import { Outlet } from "react-router";

function MainLayout({ navbar }) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {cloneElement(navbar, { isAdmin, onToggleAdmin: () => setIsAdmin(!isAdmin) })}
      <main className="container px-3 px-md-4">
        <Outlet context={{ isAdmin }} />
      </main>
    </>
  );
}

export default MainLayout;
