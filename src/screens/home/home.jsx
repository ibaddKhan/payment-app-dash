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
        <>
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
                            {selectedTransaction && (
                                <div className="modal-box rounded-lg p-8 max-w-2xl w-full mx-auto my-12 md:my-0 md:mr-12 md:ml-auto border border-gray-300">
                                    <h2 className="text-xl text-center font-semibold mb-4">Transaction Details</h2>
                                    <form>
                                        <div className="grid grid-cols-2 gap-x-4 text-lg">
                                            <div className="font-semibold">
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Transaction #:</strong></div>
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Status:</strong></div>
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Date & Time:</strong></div>
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Number:</strong></div>
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Pin:</strong></div>
                                                <div className="border-b border-gray-300 mb-2 pb-2"><strong>Price:</strong></div>
                                            </div>
                                            <div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">{selectedTransaction.id}</div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">{selectedTransaction.status}</div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">{selectedTransaction.dateTime}</div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">{selectedTransaction.number}</div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">{selectedTransaction.pin}</div>
                                                <div className="border-b border-gray-300 mb-2 pb-2">${selectedTransaction.price}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                </div>


                            )}
                        </div>
                    </div>
                )}
            </div></>
    );
};

export default Dashboard;