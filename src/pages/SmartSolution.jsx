import React, { useEffect, useState } from "react";
import SubPageTemplate from "../components/layout/SubPageTemplate";
import { useLocation } from "react-router-dom";
import { getPageDataItem } from "../lib/common";

const SmartSolution = () => {
  const location = useLocation();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setPageData(getPageDataItem(location.pathname));
  }, [location.pathname, setPageData]);

  return <>{pageData && <SubPageTemplate pageData={pageData} />}</>;
};

export default SmartSolution;
