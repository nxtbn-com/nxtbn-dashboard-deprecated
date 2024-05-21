import Card from "./Card";
import useCardGroupItems from "./useCardGroupItems"

function CardGroup() {
  const cardGroupItems = useCardGroupItems()

  return <section className="flex gap-5 py-5">{cardGroupItems.map((item)=>(
    <Card key={item.title} cardItem={item} />
  ))}</section>;
}

export default CardGroup