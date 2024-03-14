import { Link } from "@/components";
import { Image } from "@tarojs/components";
import "./assets/iconfont.css";
import "./index.less";

type BarPropsType = Taro.TabBarItem & {middle?: boolean, selectedId?: string, id: string};

const Bar = (props: BarPropsType) => {
  const { iconPath, selectedIconPath, text, id, middle, pagePath, selectedId } = props;

  if (middle) {
    return (
      <Link className="middleBar" url={pagePath}>
        <div className="iconBox">
          <div className="iconBg">
          <Image className="icon" src={`/${iconPath}`} mode='aspectFill' />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link className={`bar ${selectedId === id ? "on" : ""}`} url={pagePath}>
      {/* <span className={`icon iconfont ${icon}`} /> */}
      {/* <Image className="icon" src={selectedId === id ?  `/${selectedIconPath}` : `/${iconPath}`} mode='aspectFill' /> */}
      <Image className={`iconSelectd`} src={`/${selectedIconPath}`} mode='aspectFill' />
      <Image className={`icon`} src={`/${iconPath}`} mode='aspectFill' />
      <div className="text">{text}</div>
    </Link>
  );
};

export default Bar;
