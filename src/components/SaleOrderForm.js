import { useForm } from 'react-hook-form';

function SaleOrderForm({ onClose, onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Create Sale Order</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Customer Name</label>
            <input
              type="text"
              {...register('customer')}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Order ID</label>
            <input
              type="text"
              {...register('id')}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SaleOrderForm;
