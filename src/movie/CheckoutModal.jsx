import { useState } from "react";
import { toast } from "react-toastify";

const CheckoutModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill in all fields", { position: "bottom-right" });
      return;
    }

    toast.success("Order placed successfully!", { position: "bottom-right" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-[500px] p-6 bg-white dark:bg-[#12141D] rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded dark:bg-[#1E1E2A] dark:text-white"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded dark:bg-[#1E1E2A] dark:text-white"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            className="w-full p-2 border rounded dark:bg-[#1E1E2A] dark:text-white"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-400 px-4 py-2 rounded text-sm dark:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded text-sm font-semibold text-[#171923]"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
