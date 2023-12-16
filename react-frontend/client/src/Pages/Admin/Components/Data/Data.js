// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilPackage,
    UilChart,
    UilUsersAlt
} from "@iconscout/react-unicons"
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img4 from "../../../../img/img4.png";
import img5 from "../../../../img/img5.png";
import img6 from "../../../../img/img6.png";
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Home",
        to: "Home",
    },
    {
        icon: UilPackage,
        heading: "ChatBots",
        to: "ChatBots",
    },
    {
        icon: UilClipboardAlt,
        heading: "Templates",
        to: "dashboard",
    },
    {
        icon: UilChart,
        heading: "Statistics",
        to: "dashboard",
    },
    {
        icon: UilPackage,
        heading: "Queries",
        to: "dashboard",
    },
    {
      icon: UilUsersAlt,
      heading: "Settings",
      to: "Settings",
  },
];
export const cardsData = [
    {
      title: "Total Chats",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      bvalue: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Chats",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      bvalue: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      bvalue: '4,270',
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
];
  
export const SecondCardsData = [
    {
      title: "Total Chats",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 30,
      bvalue: "15,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Chats",
          data: [21, 10, 18, 61, 82, 179, 200],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 50,
      bvalue: "4,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [20, 150, 130, 60, 86, 90, 30],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 30,
      bvalue: '1,270',
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
];
  
  // Recent Update Card Data
export const UpdatesData = [
    {
      img: img4,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img5,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img6,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
];
    // Recent Update Card Data
export const SecondUpdatesData = [
      {
        img: img4,
        name: "Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
      },
      {
        img: img5,
        name: "James",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
      },
      {
        img: img6,
        name: "Spider Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
      },
];
export const StatisticsData = [
      {
        title: "Total Interactions",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 30,
        bvalue: "15,970",
        png: UilUsdSquare,
        series: [
          {
            name: "Total Interactions",
            data: [21, 10, 18, 61, 82, 179, 200],
          },
        ],
      },
      {
        title: "User Engagement Rate",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 50,
        bvalue: "4,270",
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "User Engagement Rate",
            data: [20, 150, 130, 60, 86, 90, 30],
          },
        ],
      },
      {
        title: "Response Time",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 30,
        bvalue: '1,270',
        png: UilClipboardAlt,
        series: [
          {
            name: "Response Time",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
        ],
      },
];
export const StatisticsDataOne = [
      {
        title: "Active Users",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 10,
        bvalue: "5,970",
        png: UilUsdSquare,
        series: [
          {
            name: "Active Users",
            data: [11, 19, 28, 41, 12, 19, 20],
          },
        ],
      },
      {
        title: "User Satisfaction",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 70,
        bvalue: "4,270",
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "User Satisfaction",
            data: [20, 100, 110, 60, 66, 10, 30],
          },
        ],
      },
      {
        title: "Most Common User Queries",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        bvalue: '13,270',
        png: UilClipboardAlt,
        series: [
          {
            name: "Most Common User Queries",
            data: [20, 85, 25, 30, 22, 15, 80],
          },
        ],
      },
];