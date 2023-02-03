import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full  hover:bg-black gradient`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-serif font-medium text-[18px] leading-[23px] mr-2">
              <div className="text-gradient">Get</div>
            </p>
            <img
              src={arrowUp}
              alt=""
              className="w-[23px] object-contain h-[23px]"
            />
          </div>
          <div className="font-serif font-medium text-[18px] leading-[23px]">
            {" "}
            <p className="text-gradient">Started</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
