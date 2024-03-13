import { Image } from "@tarojs/components";
import img2 from "./assets/2.webp";
import "./index.less";

const list = [
  {
    icon: img2,
    title: "生活馆",
    text: "",
  },
  {
    icon: img2,
    title: "送心意",
    text: "节日电子礼品卡",
  },
  {
    icon: img2,
    title: "省心够",
    text: "",
  },
  {
    icon: img2,
    title: "拼单",
    text: "一起拼省运费",
  },
];

const NavBar = () => {
  return (
    <div className="navBar">
      {list.map((item) => {
        const { icon, title, text } = item;

        // 此处有Bug，a标签无法跳转，tarojs的Navigator组件可以
        return (
          <a className="nav" href="/pages/about/index" target="_self">
            <Image className="img" src={icon} mode="aspectFill" />
            <div className="title">{title}</div>
            <div className="text">{text}</div>
          </a>
        );
      })}
    </div>
  );
};

export default NavBar;
