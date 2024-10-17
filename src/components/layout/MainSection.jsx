import React from "react";
import { headerH, minWidth } from "../../styles/style";

const MainSection = ({ children, type }) => {
  // logic
  // view
  return (
    <div className="h-full overflow-hidden overflow-x-auto">
      <section
        className={`h-full px-20 bg-future-gray-800 relative`}
        style={{ paddingTop: headerH, minWidth: minWidth }}
      >
        <i className="bg-section-layer absolute inset-0 z-0 opacity-10 bg-no-repeat"></i>
        {type === "third" && (
          <i className="bg-section-vector absolute inset-0 z-0 opacity-20 bg-[position:_-70px_70px] bg-no-repeat"></i>
        )}
        <div className="relative z-0 pl-20 h-full">{children}</div>
      </section>
    </div>
  );
};

export default MainSection;
