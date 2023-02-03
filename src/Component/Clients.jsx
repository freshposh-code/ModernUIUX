import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients) => {
          return (
            <div
              className={` flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
              key={clients.id}
            >
              <img
                src={clients.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain hover-image p-[10px] "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
