import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payment easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                key={footerLink.id}
              >
                <h4 className="font-bold text-[18px] leading-[27px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="list.none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-serif font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                        index !== footerLink.links.length - 1
                          ? "mb-[10px]"
                          : "mb-[0px]"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                  ;
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className={`${styles.paragraph} font-serif leading-[27px]`}>
          2022 Hoobank. All Right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-[10px]" : "mr-[0px]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
