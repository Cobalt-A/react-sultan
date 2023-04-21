import React from "react";
import Breadcrumbs from "../sections/general/breadcrumbs";
import PageTop from "../sections/general/pageTop";

function NotFound() {
  return (
    <main data-testid="notFound" id="main">
      <Breadcrumbs
        pages={[
          { name: "Каталог", route: "/", isActive: false },
          { name: "Админ панель", route: "/admin", isActive: false },
        ]}
      />

      <PageTop>
        <div className="col-lg-12">
          <h1 className="page-title">Такой страницы не существует</h1>
        </div>
      </PageTop>
    </main>
  );
}

export default NotFound;
