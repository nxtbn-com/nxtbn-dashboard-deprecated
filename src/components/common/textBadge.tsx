
const TextBadge = ({ text }: { text: string }) => {
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
        default:
          return "";
      }
    };
  
    // Get className based on the text
    const className = getClassname(text);
  
    return (
      <button className={`px-3 py-1 text-sm rounded-md font-normal ${className}`}>
        {text}
      </button>
    );
  };

export default TextBadge;