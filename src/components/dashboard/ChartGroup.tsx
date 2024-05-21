import { StockUnit } from "./StockUnit"
import TotalOrderOverview from "./TotalOrderOverview"

function ChartGroup() {
  return (
    <section className="flex pb-5 gap-5">
      <TotalOrderOverview className="w-[60%]" />
      <StockUnit className="w-[40%]" />
    </section>
  );
}

export default ChartGroup