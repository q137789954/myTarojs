import { TabbarLink } from "@/components";
import { BarInterface } from '@/models/tabbar';
import "./assets/iconfont.css";
import "./index.less";



type BarProps = BarInterface & {selecteId: number}

const Bar = (props: BarProps) => {
  const { icon, text, id, middle, url, selecteId } = props;

  if (middle) {
    return (
      <TabbarLink className="middleBar" href={url}>
        <div className="iconBox">
          <div className="iconBg">
            <span className={`icon iconfont ${icon}`}></span>
          </div>
        </div>
      </TabbarLink>
    );
  }

  return (
    <TabbarLink className={`bar ${selecteId === id ? "on" : ""}`} href={url}>
      <span className={`icon iconfont ${icon}`} />
      <div className="text">{text}</div>
    </TabbarLink>
  );
};

export default Bar;
