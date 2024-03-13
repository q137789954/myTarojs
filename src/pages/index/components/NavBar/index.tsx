import { Image } from "@tarojs/components";
import { Link } from '@/components';
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
    title: "请点击",
    text: "点击测试Link组件",
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
          <Link className="nav" url="/pages/test1/index">
            <Image className="img" src={icon} mode="aspectFill" />
            <div className="title">{title}</div>
            <div className="text">{text}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
