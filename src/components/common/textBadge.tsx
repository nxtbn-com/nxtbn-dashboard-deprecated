import { NXCreditCard } from "../../icons";

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

        case "credit_card":
          return {className: "text-[#2D9CDB] bg-[#E6F7FF]", icon: <NXCreditCard className="text-[#2D9CDB]" />};
        default:
          return {className: "", icon: null};
      }
    };
  
    // Get className based on the text
    const { className, icon } = getClassnameAndIcon(value);
  
    return (
      <a className={`px-3 py-1 text-sm rounded-md font-normal ${className}`}>
        {icon && <span className="mr-2">{icon}</span>}
        {label ? label : value}
      </a>
    );
  };

export default TextBadge;