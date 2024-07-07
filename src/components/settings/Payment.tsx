const payemntOptions = [
  {
    image: ["https://i.ibb.co/h2N8Grk/stripe.png"],
    name: "Stripe",
    details:
      "Offers payment processing software for e-commerce websites and mobile applications.",
  },
  {
    image: [
      "https://i.ibb.co/bQmNyHQ/visa.png",
      "https://i.ibb.co/ss1drY8/mastercard.png",
      "https://i.ibb.co/BgrxhRx/AE.png",
    ],
    name: "Credit or Debit Card",
    details:
      "Offers payment processing software for e-commerce websites and mobile applications.",
  },
  {
    image: ["https://i.ibb.co/qWfHgF2/paypal.png"],
    name: "Paypal",
    details:
      "Offers payment processing software for e-commerce websites and mobile applications.",
  },
  {
    image: ["https://i.ibb.co/fqjC0MM/apple-pay.png"],
    name: "Apple Pay",
    details:
      "Offers payment processing software for e-commerce websites and mobile applications.",
  },
];
const Payment = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <strong className="text-lg">Payment Providers</strong>
        <span className="text-base-300 text-sm">
          These are accepted payment methods in your store.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        {payemntOptions.map((option, index) => (
          <div className="bg-secondary-100 border h-[200px] p-6 rounded-lg flex flex-col gap-8" key={index}>
            <div className="flex justify-start gap-3">
              {option.image.map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-md">{option.name}</strong>
              <p className="text-[12px] text-base-300">{option.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex sm:flex-row justify-end gap-6 pt-6">
        <button
          className="border border-primary-500 py-2 px-5 text-primary-500  rounded-md"
          disabled
        >
          Choose a provider
        </button>
        <button
          className="bg-primary-500 py-2 px-5 text-white  rounded-md"
          disabled
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Payment;
