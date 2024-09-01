import { NXCreditCard, NXBank, NXCash, NXPaypal } from "../../icons";

const TextBadge = ({ value, label }: { value: string, label?: string }) => {
    // Function to determine the className based on the text
    const getClassnameAndIcon = (status: string): { className: string, icon: JSX.Element | null } => {
      switch (status.toLowerCase()) {
        case "cancelled":
          return {className: "text-[#FD6A6A] bg-[#FFF0F0]", icon: null};
        case "pending":
          return {className: "text-[#FE964A] bg-[#FFF0E6]", icon: null};
        case "confirmed":
          return {className: "text-[#2D9CDB] bg-[#E6F7FF]", icon: null};
        case "shipped":
          return {className: "text-[#8C62FF] bg-[#F4F0FF]", icon: null};
        case "delivered":
          return {className: "text-[#0CAF60] bg-[#E7F7EF]", icon: null};
        case "returned":
          return {className: "text-[#FFB946] bg-[#FFF7E6]", icon: null};
        case "processing":
          return {className: "text-[#FFA600] bg-[#FFF5CD]", icon: null};

        case "credit_card":
          return {className: "text-[#2D9CDB] bg-[#E6F7FF]", icon: <NXCreditCard className="text-[#2D9CDB]" />};
        case "bank_transfer":
          return {className: "text-[#FFA500] bg-[#FFF5CC]", icon: <NXBank className="text-[#FFA500]" />};
        case "cash_on_delivery":
          return {className: "text-[#4B4B4B] bg-[#E0E0E0]", icon: <NXCash className="text-[#4B4B4B]" />};
        case "paypal":
          return {className: "text-[#003087] bg-[#C0C0C0]", icon: <NXPaypal className="text-[#003087]" /> };
        default:
          return {className: "", icon: null};
      }
    };
  
    // Get className based on the text
    const { className, icon } = getClassnameAndIcon(value);
  
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-md font-normal ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {label ? label : value}
    </span>
    );
  };

export default TextBadge;