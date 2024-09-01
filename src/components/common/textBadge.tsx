
const TextBadge = ({ value, label }: { value: string, label?: string }) => {
    // Function to determine the className based on the text
    const getClassname = (status: string): string => {
      switch (status.toLowerCase()) {
        case "cancelled":
          return "text-[#FD6A6A] bg-[#FFF0F0]";
        case "pending":
          return "text-[#FE964A] bg-[#FFF0E6]";
        case "confirmed":
          return "text-[#0CAF60] bg-[#E7F7EF]";
        case "shipped":
          return "text-[#8C62FF] bg-[#F4F0FF]";
        case "delivered":
          return "text-[#0CAF60] bg-[#E7F7EF]";
        case "returned":
          return "text-[#FFB946] bg-[#FFF7E6]";
        default:
          return "";
      }
    };
  
    // Get className based on the text
    const className = getClassname(value);
  
    return (
      <button className={`px-3 py-1 text-sm rounded-md font-normal ${className}`}>
        {label ? label : value}
      </button>
    );
  };

export default TextBadge;