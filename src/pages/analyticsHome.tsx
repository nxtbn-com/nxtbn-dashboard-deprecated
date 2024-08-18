import CardGroup from "../components/dashboard/CardGroup"
import ChartGroup from "../components/dashboard/ChartGroup"
import MostSellingProducts from "../components/dashboard/MostSellingProducts"

function AnalyticsHome() {
  return (
    <main className="px-5 md:px-10 w-full">
      <CardGroup />
      <ChartGroup />
      <MostSellingProducts />
      <MostSellingProducts />
      <MostSellingProducts />
    </main>
  )
}

export default AnalyticsHome