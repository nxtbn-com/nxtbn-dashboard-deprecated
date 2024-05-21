import CardGroup from "./CardGroup"
import ChartGroup from "./ChartGroup"
import MostSellingProducts from "./MostSellingProducts"

function DashboardMain() {
  return (
    <main className="px-10 bg-secondary-100 w-full">
      <CardGroup />
      <ChartGroup />
      <MostSellingProducts />
      <MostSellingProducts />
      <MostSellingProducts />
    </main>
  )
}

export default DashboardMain