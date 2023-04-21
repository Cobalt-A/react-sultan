import React from "react";
import Breadcrumbs from "../sections/general/breadcrumbs";
import AdminList from "../components/admin/adminList";

function Admin() {
  return (
    <main id="main">
      <Breadcrumbs
        pages={[
          { name: "Каталог", route: "/", isActive: false },
          { name: "Админ панель", route: "/admin", isActive: true },
        ]}
      />
      <AdminList />
    </main>
  );
}

export default Admin;
