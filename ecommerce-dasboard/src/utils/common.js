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
        bg_color: "teal",
        shadeNum: 500,
        cardImg: CardShop,
      },
      {
        id: 4,
        card_title: "Total orders",
        card_count: "4,560",
        count_up: 30,
        bg_color: "indigo",
        shadeNum: 500,
        cardImg: CardBill,
      },
      {
        id: 5,
        card_title: "Total Sales",
        card_count: "7,952",
        count_up: 52,
        bg_color: "amber",
        shadeNum: 500,
        cardImg: CardCart,
      },
      {
        id: 6,
        card_title: "Total Profit",
        card_count: "5,659",
        count_up: 35,
        bg_color: "rose",
        shadeNum: 500,
        cardImg: CardMoney,
      },
    ],
  },
  {
    id: 2,
    results: [
      {
        card_title: "Daily Visitor",
        card_count: "8,560",
        count_up: 62,
        bg_color: "teal",
        shadeNum: 500,
      },
      {
        card_title: "Total orders",
        card_count: "8,560",
        count_up: 30,
        bg_color: "indigo",
        shadeNum: 500,
      },
      {
        card_title: "Total Sales",
        card_count: "10,952",
        count_up: 52,
        bg_color: "amber",
        shadeNum: 500,
      },
      {
        card_title: "Total Profit",
        card_count: "5659",
        count_up: 35,
        bg_color: "rose",
        shadeNum: 500,
      },
    ],
  },
];
export const ADMIN_USERS = [
  {
    id: 1,
    name: "Vaidehi Singh",
    imgSrc: AdminGirl,
  },
  {
    id: 2,
    name: "Arun Verma",
    imgSrc: AdminBoy,
  },
];
