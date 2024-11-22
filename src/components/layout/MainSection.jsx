import React from "react";

const MainSection = ({ children, type }) => {
  // logic
  // view
  return (
    <div className="h-full overflow-hidden overflow-x-auto block">
      <section
        className={`h-full px-7 lg:px-20 bg-future-gray-800 relative pt-28 lg:pt-36`}
      >
        <i className="bg-section-layer absolute inset-0 z-0 opacity-10 bg-no-repeat bg-cover"></i>
        {type === "third" && (
          <i className="bg-section-vector absolute inset-0 z-0 opacity-20 bg-[position:_-70px_70px] bg-no-repeat"></i>
        )}
        {/* <div className="relative z-0 lg:pl-20 h-full">{children}</div> */}
        <div className="relative z-0 h-full">{children}</div>
      </section>
    </div>
  );
};

export default MainSection;
