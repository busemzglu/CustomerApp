import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as HıIcons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <HıIcons.HiUserGroup />,
    cName: "nav-text",
  },
  {
    title: "Files",
    path: "/files",
    icon: <AiIcons.AiFillFileAdd />,
    cName: "nav-text",
  },

  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
