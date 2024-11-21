import React from "react";

const MainSolutionItem = ({ cardList }) => {
  return (
    <div>
      {cardList.map((card) => (
        <div className="py-3">
          <p className="text-lg pb-4">
            {card.sub}
            <span className="text-future-blue-400">{card.title}</span>
          </p>
          <img
            src={`/images/card-${card.category}.png`}
            alt={`${card.category} 이미지`}
          />
        </div>
      ))}
    </div>
  );
};

export default MainSolutionItem;
