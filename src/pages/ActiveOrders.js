import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SaleOrderForm from '../components/SaleOrderForm';

function ActiveOrders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Active Orders</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        + Sale Order
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">Active</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <SaleOrderForm
          onClose={() => setShowModal(false)}
          onSubmit={handleAddOrder}
        />
      )}
    </div>
  );
}

export default ActiveOrders;
