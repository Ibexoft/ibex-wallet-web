// Transactions.js
import React, { useState, useMemo } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import TransactionList from "../components/TransactionList";
import TransactionTable from "../components/TransactionTable";
import PageTitle from '../components/PageTitle'

const Transactions = () => {
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");

  const data = useMemo(
    () => [
      {
        category: "Groceries",
        note: "Weekly groceries",
        account: "Cash",
        amount: "PKR 5,000",
        type: "expense",
      },
      {
        category: "Salary",
        note: "Monthly Salary",
        account: "Bank",
        amount: "PKR 100,000",
        type: "income",
      },
      {
        category: "Utilities",
        note: "Electricity bill",
        account: "Bank",
        amount: "PKR 7,000",
        type: "expense",
      },
      {
        category: "Freelance",
        note: "Project payment",
        account: "Bank",
        amount: "PKR 50,000",
        type: "income",
      },
      {
        category: "Dining",
        note: "Dinner at restaurant",
        account: "Credit Card",
        amount: "PKR 3,000",
        type: "expense",
      },
      {
        category: "Gift Received",
        note: "Birthday gift",
        account: "Cash",
        amount: "PKR 10,000",
        type: "income",
      },
      {
        category: "Transport",
        note: "Fuel refill",
        account: "Credit Card",
        amount: "PKR 4,500",
        type: "expense",
      },
      {
        category: "Investment",
        note: "Stock dividends",
        account: "Bank",
        amount: "PKR 15,000",
        type: "income",
      },
      {
        category: "Shopping",
        note: "Clothing",
        account: "Credit Card",
        amount: "PKR 8,000",
        type: "expense",
      },
      {
        category: "Bonus",
        note: "Year-end bonus",
        account: "Bank",
        amount: "PKR 20,000",
        type: "income",
      },
      {
        category: "Account Transfer",
        note: "Transfer to savings",
        account: "Bank",
        amount: "PKR 30,000",
        type: "transfer"
      }
    ],
    []
  );

  const filteredTransactions = useMemo(() => {
    if (!search) return data;
    return data.filter(
      (txn) =>
        txn.category.toLowerCase().includes(search.toLowerCase()) ||
        txn.note.toLowerCase().includes(search.toLowerCase()) ||
        txn.account.toLowerCase().includes(search.toLowerCase()) 
    );
  }, [search, data]);

  const incomeData = useMemo(
    () => data.filter((item) => item.type === "income"),
    [data]
  );
  const expenseData = useMemo(
    () => data.filter((item) => item.type === "expense"),
    [data]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Category",
        accessor: "category",
        Cell: ({ row }) => (
          <div className="d-flex justify-content-between">
            <div>
              <i
                className={`bi ${
                  row.original.type === "income"
                    ? "bi-currency-dollar"
                    : "bi-wallet2"
                } pe-2`}
              ></i>
              <span>{row.original.category}</span>
            </div>
            <div className="text-end">
              <div className="dropdown">
                <i
                  className="bi bi-three-dots"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-trash"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        Header: "Note",
        accessor: "note",
        Cell: ({ value }) => (
          <div className="col-md-10">
            <div className="text-start">
              <span className="text-muted">
                <small>{value}</small>
              </span>
            </div>
          </div>
        ),
      },
      {
        Header: "Account & Amount",
        accessor: "account",
        Cell: ({ row }) => (
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <span>{row.original.account}</span>
              <span>{row.original.amount}</span>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const incomeTableInstance = useTable(
    {
      columns,
      data: incomeData,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

  const expenseTableInstance = useTable(
    {
      columns,
      data: expenseData,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <main id="main" className="main">
      <div className="pagetitle d-flex justify-content-between align-items-center">
      <PageTitle title="Transactions" breadcrumbPages={{ Home: '/', }} />
        <div>
          <button
            className={`btn btn-${
              view === "list" ? "primary" : "secondary"
            } mx-1`}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={`btn btn-${
              view === "table" ? "primary" : "secondary"
            } mx-1`}
            onClick={() => setView("table")}
          >
            Table View
          </button>
        </div>
      </div>

      <section className="section transactions container">
        {view === "list" ? (
          <TransactionList transactions={filteredTransactions} />
        ) : (
          <>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                incomeTableInstance.setGlobalFilter(
                  e.target.value || undefined
                );
                expenseTableInstance.setGlobalFilter(
                  e.target.value || undefined
                );
              }}
              placeholder="Search transactions..."
              className="form-control mb-3"
            />
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center mt-2">Incoming</h1>
                <TransactionTable tableInstance={incomeTableInstance} />
              </div>
              <div
                className="col-md-6 "
                style={{ borderLeft: "2px solid #ccc" }}
              >
                <h1 className="text-center mt-2">Outgoing</h1>
                <TransactionTable tableInstance={expenseTableInstance} />
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Transactions;
