import { CARDS_DATA } from "../utils/common";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
export default function Analytics({ selectedUser }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    let arr = CARDS_DATA.filter((item) => item?.id === selectedUser?.id);
    setCardData(...arr);
  }, [selectedUser]);

  return (
    <div className="w-full my-2 lg:m-4">
      <div className="flex flex-row gap-3">
        {cardData?.results?.map((item, index) => {
          return (
            <div
              className={`w-full md:w-1/2 lg:w-[30%] flex flex-col md:flex-row justify-evenly items-center p-2.5 rounded-2xl ${item?.bg_color}`}
              key={index}
            >
              <div className="w-16 h-16 rounded-full my-2 md:my-0">
                <img src={item?.cardImg} alt="card_img" />
              </div>
              <div className="flex flex-col items-center md:items-start gap-1 text-white text-base">
                <div>{item?.card_title}</div>
                <div className="text-base md:text-2xl">
                  {item?.id === 5 || item?.id === 6 ? "₹" : null}
                  {item?.card_count}
                </div>
                <div>
                  <CountUp
                    start={0}
                    end={item?.count_up}
                    duration={8}
                    prefix="+"
                    suffix="%"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
