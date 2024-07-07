const OrderOptions = [
  {
    title: "Order Confirmation",
    desc: "Sent automatically to the customer after they place their order.",
  },
  {
    title: "Order Edited",
    desc: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    title: "Order Invoice",
    desc: "Sent to the customer when the order has an outstanding balance.",
  },
  {
    title: "Order Cancelled",
    desc: "Sent automatically to the customer if their order is cancelled (if you select this option).",
  },
  {
    title: "Order Refund",
    desc: " Sent automatically to the customer if their order is refunded (if you select this option).",
  },
  {
    title: "Payment Error",
    desc: "Sent automatically to the customer if their payment can’t be processed during checkout.",
  },
];

const shippingOptions = [
  {
    title: 'Fullfilment Request',
    desc: 'Sent automatically to a third-party fulfillment service provider when order items are fulfilled.',
  },
  {
    title: 'Shipping Confirmation',
    desc: 'Sent automatically to the customer when their order is fulfilled (if you select this option).',
  },
  {
    title: 'Shipping Update',
    desc: 'Sent automatically to the customer if their fulfilled order’s tracking number is updated.',
  }
]

const PushNotification = () => {
  return (
    <div>
      <div className="">
        <strong className="text-lg">Order</strong>
        <div className="flex flex-col pt-4 gap-4">
          {OrderOptions.map((option, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex flex-col gap-1">
                <strong className="text-[14px]">{option.title}</strong>
                <span className="text-[12px] text-base-300">{option.desc}</span>
              </div>
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8">
        <strong className="text-lg">Shipping</strong>
        <div className="flex flex-col pt-4 gap-4">
          {shippingOptions.map((option, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex flex-col gap-1">
                <strong className="text-[14px]">{option.title}</strong>
                <span className="text-[12px] text-base-300">{option.desc}</span>
              </div>
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PushNotification;
