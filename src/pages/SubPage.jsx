import React, { useEffect, useState } from "react";
import SubPageTemplate from "../components/layout/SubPageTemplate";
import { useParams } from "react-router-dom";
import { subPageDataList } from "../data/response";

const SubPage = () => {
  const { pageName } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const currentPageData = subPageDataList.find(
      (data) => data.page === pageName
    );
    currentPageData && setPageData(currentPageData);
  }, [pageName, setPageData]);

  return <>{pageData && <SubPageTemplate pageData={pageData} />}</>;
};

export default SubPage;
