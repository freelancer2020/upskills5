import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
//@Types
import { RootState } from "../../../store/appStore";

import { AiOutlineFileDone } from "react-icons/ai";
import styles from "./thank-you.module.css";

type Obj = {
  travelPurpose: string;
  Country: string;
  Address: string;
  Date: string;
  incidentDesc: string;
};
const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const allData = useSelector<RootState, Obj>(
    (state) => state.claimData.incidentDetailsData
  );

  useEffect(() => {
    if (allData.Country.length <= 0) {
      navigate("/");
    }
  }, [allData, navigate]);

  return (
    <div className={styles["thank-you-container"]}>
      <AiOutlineFileDone
        aria-hidden={true}
        className={styles["thank-you-icon"]}
      />
      <h2 role="alert" id="thank-you-header">
        You report has been submitted
      </h2>
    </div>
  );
};

export default ThankYou;
