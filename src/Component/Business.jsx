import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className=" flex flex-col md:flex-row ">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card , you can improve your financial life by
          building credit, earning rewards and saying money. But with hundreds
          of credit cards on the market
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <div
            className={`flex flex-row p-6 rounded-[20px] ${
              index !== feature.length - 1 ? "mb-6" : "mb-0"
            } feature-card`}
          >
            <div
              key={feature.id}
              className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
            >
              <img
                src={feature.icon}
                alt="icon"
                className="w-[50%] h-[50%] object-contain "
              />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-serif font-semibold text-white text-[18px] leading-[23px] mb-1">
                {feature.title}
              </h4>
              <p className="font-serif font-normal text-dimWhite leading-[24px] mb-1  text-[10px] xm:text-[16px]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
