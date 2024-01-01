import { CARDS_DATA } from "../utils/common";
import CountUp from "react-countup";
export default function Analytics() {
  return (
    <div className="w-full m-5">
      <div className="flex flex-wrap gap-8">
        {CARDS_DATA[0]?.results?.map((item, index) => {
          console.log("item bg color", item?.bg_color);
          const bgColorClass = `bg-${item?.bg_color}-${item?.shadeNum}`;
          return (
            <div
              className={`w-1/5 flex flex-row justify-evenly items-center p-2.5 rounded-2xl ${bgColorClass}`}
              key={index}
            >
              <div className="w-16 h-16 rounded-full">
                <img src={item?.cardImg} alt="card_img" />
              </div>
              <div className="flex flex-col gap-1 text-white text-base">
                <div>{item?.card_title}</div>
                <div className="text-2xl">
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
