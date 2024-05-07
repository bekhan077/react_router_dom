import React from "react";
import logo from "../../public/assets/logo.svg";
import overview from "../../public/assets/icon_sidebar.svg";
import tickets from "../../public/assets/icon_tickets.svg";
import ideas from "../../public/assets/icon_ideas.svg";
import contacts from "../../public/assets/icon_contacts.svg";
import agents from "../../public/assets/icon_agents.svg";
import articles from "../../public/assets/icon_articles.svg";
import settings from "../../public/assets/icon_settings.svg";
import subscription from "../../public/assets/icon_subscription.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[255px] h-[1230px] bg-black">
      <div className="flex gap-[12px] pl-[32px] cursor-pointer">
        <img src={logo} alt="logo-img" />
        <h2 className="text-[#A4A6B3]">Dashboard Kit</h2>
      </div>

      <NavLink to='/' className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] mt-[81px]">
        <img src={overview} alt="overview-img" />
        <p className="text-[#A4A6B3] py-[18px] ">Overview</p>
      </NavLink>
      <NavLink to={'/ticket'} className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={tickets} alt="tickets-img" />
        <p className="text-[#A4A6B3]">Tickets</p>
      </NavLink>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={ideas} alt="ideas-img" />
        <p className="text-[#A4A6B3]">Ideas</p>
      </div>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={contacts} alt="contacts-img" />
        <p className="text-[#A4A6B3]">Contacts</p>
      </div>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={agents} alt="agents-img" />
        <p className="text-[#A4A6B3]">Agents</p>
      </div>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={articles} alt="articles-img" />
        <p className="text-[#A4A6B3]">Articles</p>
      </div>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={settings} alt="settings-img" />
        <p className="text-[#A4A6B3]">Settings</p>
      </div>
      <div className="flex gap-[24px] pl-[32px] hover:bg-[#9fa2b4ad] py-[18px]">
        <img src={subscription} alt="subscription-img" />
        <p className="text-[#A4A6B3]">Subscription</p>
      </div>
    </div>
  );
};

export default Header;
