import AdminGirl from "../Images/admin_icon_girl.png";
import AdminBoy from "../Images/admin_icon_boy.png";
import CardShop from "../Images/card_shop.png";
import CardBill from "../Images/card_bill.png";
import CardCart from "../Images/card_cart_icon.png";
import CardMoney from "../Images/card_money.png";
export const CARDS_DATA = [
  {
    id: 1,
    results: [
      {
        id: 3,
        card_title: "Daily Visitor",
        card_count: "4,560",
        count_up: 62,
        bg_color: `bg-teal-500`,
        shadeNum: 500,
        cardImg: CardShop,
      },
      {
        id: 4,
        card_title: "Total orders",
        card_count: "4,560",
        count_up: 30,
        bg_color: "bg-indigo-500",
        shadeNum: 500,
        cardImg: CardBill,
      },
      {
        id: 5,
        card_title: "Total Sales",
        card_count: "7,952",
        count_up: 52,
        bg_color: "bg-amber-500",
        shadeNum: 500,
        cardImg: CardCart,
      },
    ],
  },
  {
    id: 2,
    results: [
      {
        card_title: "Daily Visitor",
        card_count: "8,560",
        count_up: 40,
        bg_color: "bg-teal-500",
        shadeNum: 500,
        cardImg: CardShop,
      },
      {
        card_title: "Total orders",
        card_count: "8,560",
        count_up: 60,
        bg_color: "bg-indigo-500",
        shadeNum: 500,
        cardImg: CardBill,
      },
      {
        card_title: "Total Sales",
        card_count: "10,952",
        count_up: 80,
        bg_color: "bg-amber-500",
        shadeNum: 500,
        cardImg: CardCart,
      },
    ],
  },
];
export const ADMIN_USERS = [
  {
    id: 1,
    name: "Vaidehi Singh",
    imgSrc: AdminGirl,
    card_title: "Total Profit",
    card_count: "5,659",
    count_up: 35,
    cardImg: CardMoney,
  },
  {
    id: 2,
    name: "Arun Verma",
    imgSrc: AdminBoy,
    card_title: "Total Profit",
    card_count: "7,859",
    count_up: 30,
    cardImg: CardMoney,
  },
];

export const LINE_GRAPH_DATA = [
  {
    name: "Jan",
    Orders: 2000,
    Sales: 3000,
    amt: 4500,
  },
  {
    name: "Feb",
    Orders: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Orders: 4560,
    Sales: 5800,
    amt: 2290,
  },
  {
    name: "April",
    Orders: 2780,
    Sales: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Orders: 1890,
    Sales: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Orders: 2390,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Orders: 3390,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: "August",
    Orders: 2690,
    Sales: 2800,
    amt: 2500,
  },
];

export const PIE_CHART_DATA = [
  { name: "Active", value: 300 },
  { name: "Complete", value: 300 },
  { name: "On Hold", value: 200 },
  { name: "Cancelled", value: 200 },
];
