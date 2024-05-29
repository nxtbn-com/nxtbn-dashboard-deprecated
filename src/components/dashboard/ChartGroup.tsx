import { StockUnit } from "./StockUnit"
import TotalOrderOverview from "./TotalOrderOverview"

function ChartGroup() {
  return (
    <section className="flex flex-col md:flex-row pb-5 gap-5">
      <TotalOrderOverview className="md:w-[60%]" />
      <StockUnit className="md:w-[40%]" />
    </section>
  );
}

export default ChartGroup