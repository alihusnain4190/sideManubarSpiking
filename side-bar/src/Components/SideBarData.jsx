import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName : "nav-text"
  },
{
    title: 'Report',
    path: '/report',
    icon: <IoIcons.IoIosPaper/>,
    cName : "nav-text"
  },{
    title: 'Products',
    path: '/',
    icon: <FaIcons.FaCartPlus/>,
    cName : "nav-text"
  },{
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople/>,
    cName : "nav-text"
  }]
