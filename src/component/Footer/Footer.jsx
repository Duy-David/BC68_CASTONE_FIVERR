import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
;
const Footer = () => {
  const footerData = [
    {
      title: "Categories",
      links: [
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "Music & Audio",
        "Fiverr Logo Maker",
        "Programming & Tech",
        "Data",
        "Business",
        "Personal Growth & Hobbies",
        "Photography",
      ],
    },
    {
      title: "About",
      links: [
        "Careers",
        "Press & News",
        "Partnerships",
        "Privacy Policy",
        "Terms of Service",
        "Intellectual Property Claims",
        "Investor Relations",
      ],
    },
    {
      title: "Support and Education",
      links: [
        "Help & Support",
        "Trust & Safety",
        "Quality Guide",
        "Selling on Fiverr",
        "Buying on Fiverr",
        "Fiverr Guides",
        "Learn",
        "Online Courses",
      ],
    },
    {
      title: "Community",
      links: [
        "Customer Success Stories",
        "Community Hub",
        "Forum",
        "Events",
        "Blog",
        "Creators",
        "Affiliates",
        "Podcast",
        "Invite a Friend",
        "Become a Seller",
        "Community Standards",
      ],
    },
    {
      title: "Business Solutions",
      links: [
        "About Business Solutions",
        "Fiverr Pro",
        "Fiverr Certified",
        "Become an Agency",
        "Fiverr Enterprise",
        "ClearVoice",
        "Working Not Working",
        "Contact Sales",
      ],
    },
  ];
  const footerSocial = [
    "tiktok",
    "instagram",
    "facebook",
    "linkedin",
    "twitter",
    "pinterest",
  ];
  return (
    <footer className="footer">
      <div className="footer-content container">
        {footerData.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom container">
        <div className="footer-logo flex items-center gap-6">
          <p>fiverr.</p>
          <p>&copy; Fiverr International Ltd. 2024</p>
        </div>
        <div className="footer-socials">
          {footerSocial.map((social, index) => (
            <a key={index} href="#">
              <FontAwesomeIcon icon={`fa-brands fa-${social}`} className="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
