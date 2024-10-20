import React, { useEffect, useState } from "react";
import SubPageTemplate from "../components/layout/SubPageTemplate";
import { useLocation } from "react-router-dom";
import { subPageDataList } from "../data/response";

const OurimMakers = () => {
  const location = useLocation();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setPageData(
      subPageDataList.find(
        (data) => data.page === location.pathname.replace("/", "")
      )
    );
  }, [location.pathname, setPageData]);

  return <>{pageData && <SubPageTemplate pageData={pageData} />}</>;
};

export default OurimMakers;
