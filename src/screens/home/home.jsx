import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  let navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("User is signed out");
      navigate("/login");
    }
  });

  const [transactions, setTransactions] = useState([
    {
      id: "001",
      status: "Completed",
      dateTime: "2024-05-14 16:20",
      number: "33445",
      pin: "6677",
      price: 250,
    },
    {
      id: "002",
      status: "Pending",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 100,
    },
    {
      id: "003",
      status: "Rejected",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 200,
    },
    {
      id: "004",
      status: "Pending",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 150,
    },
    {
      id: "005",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 100,
    },
    {
      id: "006",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 200,
    },
    {
      id: "007",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 100,
    },
    {
      id: "008",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 150,
    },
    {
      id: "009",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 100,
    },
    {
      id: "010",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "011",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "012",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "013",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "014",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "015",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "016",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "017",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "018",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "019",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "020",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "021",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "022",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "023",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "024",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "025",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "026",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "027",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "028",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "029",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "030",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "031",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "032",
      status: "Rejected",
      dateTime: "2024-05-15 08:45",
      number: "11223",
      pin: "4455",
      price: 200,
    },
    {
      id: "033",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
    {
      id: "034",
      status: "Pending",
      dateTime: "2024-05-16 10:15",
      number: "54321",
      pin: "9876",
      price: 300,
    },
    {
      id: "035",
      status: "Completed",
      dateTime: "2024-05-17 14:32",
      number: "12345",
      pin: "6789",
      price: 150,
    },
  ]);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setModalOpen(true);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleStatusUpdate = () => {
    if (newStatus !== "") {
      const updatedTransactions = [...transactions];
      const index = updatedTransactions.findIndex(
        (transaction) => transaction.id === selectedTransaction.id
      );

      updatedTransactions[index].status = newStatus;
      setTransactions(updatedTransactions);
      setModalOpen(false);
    } else {
      console.log("Please select a new status.");
    }
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    setCurrentPage(1); // Reset current page when filter changes
  };

  const handleDateSearch = (e) => {
    setSearchDate(e.target.value);
    setCurrentPage(1); // Reset current page when search changes
  };

  const handleNumberSearch = (e) => {
    setSearchNumber(e.target.value);
    setCurrentPage(1); // Reset current page when search changes
  };

  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by status
    if (filterOption && transaction.status !== filterOption) {
      return false;
    }
    // Search by date
    if (searchDate && !transaction.dateTime.includes(searchDate)) {
      return false;
    }
    // Search by number
    if (searchNumber && transaction.number !== searchNumber) {
      return false;
    }
    return true;
  });

  // Pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <>
      <Navbar />

      <div className="flex flex-col sm:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="overflow-x-auto">
            <div className="flex space-x-3">
              <div className="mb-4">
                <label htmlFor="filter" className="mr-2">
                  Filter By Status:
                </label>
                <select
                  id="filter"
                  value={filterOption}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="">All</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="searchDate" className="mr-2">
                  Search By Date:
                </label>
                <input
                  type="text"
                  id="searchDate"
                  value={searchDate}
                  onChange={handleDateSearch}
                  className="border border-gray-300 rounded px-2 py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="searchNumber" className="mr-2">
                  Search By Number:
                </label>
                <input
                  type="text"
                  id="searchNumber"
                  value={searchNumber}
                  onChange={handleNumberSearch}
                  className="border border-gray-300 rounded px-2 py-1"
                />
              </div>
            </div>
            <div className="table-container">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2">Transaction#</th>
                    <th className="p-4 border-b-2">Status</th>
                    <th className="p-4 border-b-2">Date & Time</th>
                    <th className="p-4 border-b-2 hidden sm:table-cell">
                      Number
                    </th>
                    <th className="p-4 border-b-2 hidden sm:table-cell">Pin</th>
                    <th className="p-4 border-b-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td
                        onClick={() => handleTransactionClick(transaction)}
                        className="cursor-pointer p-4 border-b underline"
                      >
                        {transaction.id}
                      </td>
                      <td className="p-4 border-b">{transaction.status}</td>
                      <td className="p-4 border-b">{transaction.dateTime}</td>
                      <td className="p-4 border-b hidden sm:table-cell">
                        {transaction.number}
                      </td>
                      <td className="p-4 border-b hidden sm:table-cell">
                        {transaction.pin}
                      </td>
                      <td className="p-4 border-b">${transaction.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="btn btn-sm"
            >
              Previous
            </button>
            <div>
              Page {currentPage} of{" "}
              {Math.ceil(filteredTransactions.length / transactionsPerPage)}
            </div>
            <button
              onClick={nextPage}
              disabled={
                currentPage ===
                Math.ceil(filteredTransactions.length / transactionsPerPage)
              }
              className="btn btn-sm"
            >
              Next
            </button>
          </div>
        </div>
        {modalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
            <div className="rounded-lg p-8 max-w-md">
              {selectedTransaction && (
                <div className="modal-box rounded-lg p-8 max-w-2xl w-full mx-auto my-12 md:my-0 md:mr-12 md:ml-auto border border-gray-300">
                  <h2 className="text-xl text-center font-semibold mb-4">
                    Transaction Details
                  </h2>
                  <form onSubmit={handleStatusUpdate}>
                    <div className="grid grid-cols-2 gap-x-4 text-lg">
                      <div className="font-semibold">
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Transaction #:</strong>
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Status:</strong>
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Date & Time:</strong>
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Number:</strong>
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Pin:</strong>
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          <strong>Price:</strong>
                        </div>
                      </div>
                      <div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          {selectedTransaction.id}
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          {selectedTransaction.status}
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          {selectedTransaction.dateTime}
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          {selectedTransaction.number}
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          {selectedTransaction.pin}
                        </div>
                        <div className="border-b border-gray-300 mb-2 pb-2">
                          ${selectedTransaction.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <label htmlFor="status" className="mr-2">
                        New Status:
                      </label>
                      <select
                        id="status"
                        value={newStatus}
                        onChange={handleStatusChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="">Select Status</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">
                      Update Status
                    </button>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
