function CompletedOrders() {
    const completedOrders = [
      { id: 1, customer: 'John Doe', status: 'Completed' },
      { id: 2, customer: 'Jane Smith', status: 'Completed' },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Completed Orders</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedOrders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CompletedOrders;
  