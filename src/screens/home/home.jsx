import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const transactions = [
        { id: "001", status: "Active", dateTime: "2024-05-17 14:32", number: "12345", pin: "6789", price: 100 },
        { id: "002", status: "Inactive", dateTime: "2024-05-16 10:15", number: "54321", pin: "9876", price: 200 },
        { id: "003", status: "Pending", dateTime: "2024-05-15 08:45", number: "11223", pin: "4455", price: 150 },
        { id: "004", status: "Completed", dateTime: "2024-05-14 16:20", number: "33445", pin: "6677", price: 250 }
    ];

    const handleTransactionClick = (transaction) => {
        setSelectedTransaction(transaction);
        setModalOpen(true);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2">Transaction #</th>
                                <th className="p-4 border-b-2">Status</th>
                                <th className="p-4 border-b-2">Date & Time</th>
                                <th className="p-4 border-b-2 hidden sm:table-cell">Number</th>
                                <th className="p-4 border-b-2 hidden sm:table-cell">Pin</th>
                                <th className="p-4 border-b-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} >
                                    <td onClick={() => handleTransactionClick(transaction)} className="cursor-pointer p-4 border-b underline">{transaction.id}</td>
                                    <td className="p-4 border-b">{transaction.status}</td>
                                    <td className="p-4 border-b">{transaction.dateTime}</td>
                                    <td className="p-4 border-b hidden sm:table-cell">{transaction.number}</td>
                                    <td className="p-4 border-b hidden sm:table-cell">{transaction.pin}</td>
                                    <td className="p-4 border-b">${transaction.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
                    <div className="rounded-lg p-8 max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
                        {selectedTransaction && (
                            <div>
                                <p><strong>Transaction #:</strong> {selectedTransaction.id}</p>
                                <p><strong>Status:</strong> {selectedTransaction.status}</p>
                                <p><strong>Date & Time:</strong> {selectedTransaction.dateTime}</p>
                                <p><strong>Number:</strong> {selectedTransaction.number}</p>
                                <p><strong>Pin:</strong> {selectedTransaction.pin}</p>
                                <p><strong>Price:</strong> ${selectedTransaction.price}</p>
                            </div>
                        )}
                        <button className="mt-4 text-sm text-gray-600 hover:text-gray-800" onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
