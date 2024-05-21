import { CardGroupType } from "./useCardGroupItems";

function Card({ cardItem }: { cardItem: CardGroupType }) {
  return (
    <div className="bg-white rounded-lg p-5 w-full h-[156px]">
      <h3 className="border-b border-[#EEEFF2] pb-2 text-base-300">
        {cardItem.title}
      </h3>
      <div className="mt-5 flex gap-5 items-center justify-between">
        <div className="">
          <h6 className="font-nunito font-nunito-h1 text-2xl mb-2">
            {cardItem.value}
          </h6>
          <p className="flex gap-1 text-sm">
            <span
              className={`${
                cardItem.profit < 0 ? "text-red-500" : "text-primary-500"
              }`}
            >
              {cardItem.profit}%
            </span>
            <span className="text-base-300">from last week</span>
          </p>
        </div>
        <div>{cardItem.icon}</div>
      </div>
    </div>
  );
}

export default Card;
