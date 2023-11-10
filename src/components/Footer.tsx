import React from "react";
import Link from "next/link";
import css from "../css/footer.module.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="py-2 text-white bg-[#035803]">
      <div className="2xl:container mx-auto px-2">
        <div className="flex flex-wrap justify-between mb-4 leading-7">
          {/* column 1 */}
          <div>
            <h4 className={css.colHeader}>About Us</h4>
            <p className={css.subText}>History</p>
            <p className={css.subText}>Purpose</p>
            <p className={css.subText}>Calender</p>
          </div>
          {/* column 2 */}
          <div>
            <h4 className={css.colHeader}>Legal</h4>
            <p className={css.subText}>Corporate</p>
          </div>
          {/* column 3 */}
          <div>
            <h4 className={css.colHeader}>Company</h4>
            <p className={css.subText}>Press</p>
            <p className={css.subText}>Careers</p>
            <p className={css.subText}>Franchise</p>
          </div>
          {/* column 4 */}
          <div>
            <h4 className={css.colHeader}>Social Media</h4>
            <div className="flex gap-1">
              <Link href="#">
                <Facebook
                  className={css.socialMediaLogo}
                  style={{ color: "#1877F2" }}
                />
              </Link>
              <Link href="#">
                <Instagram
                  className={css.socialMediaLogo}
                  style={{ color: "#dd2a7b" }}
                />
              </Link>
              <Link href="#">
                <LinkedIn
                  className={css.socialMediaLogo}
                  style={{ color: "#0072B1" }}
                />
              </Link>
              <Link href="#">
                <Twitter
                  className={css.socialMediaLogo}
                  style={{ color: "#1DA1F2" }}
                />
              </Link>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex justify-between text-xs mt-4">
          <p>© Woodside Bazaar</p>
          <p>This is a fake business, solely meant for my portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
