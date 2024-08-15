import React from "react";
import { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import AccountsList from "../components/AccountsList";
import * as Icon from "react-bootstrap-icons";

export default function Account() {

  return (
    <main id="main" className="main">
      <div id="accounts-main" className="container">
        <PageTitle title="Accounts" breadcrumbPages={{ Home: "/" }} />
        {/* End Page Title */}

        <div className="add-account d-flex justify-content-end">
          <button
            className="rounded-circle d-flex bg-primary align-items-center justify-content-center border-0 cursor-pointer"
            style={{ width: "30px", height: "30px" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add Account"
          >
            <Icon.PlusLg color="white" size={16} />
          </button>
        </div>
        <AccountsList />
      </div>
    </main>
  );
}
