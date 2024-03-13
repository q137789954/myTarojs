import { Link } from "@/components";
import { BarInterface } from '@/models/tabbar';
import "./assets/iconfont.css";
import "./index.less";



type BarProps = BarInterface & {selecteId: number}

const Bar = (props: BarProps) => {
  const { icon, text, id, middle, url, selecteId } = props;

  if (middle) {
    return (
      <Link className="middleBar" url={url}>
        <div className="iconBox">
          <div className="iconBg">
            <span className={`icon iconfont ${icon}`}></span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link className={`bar ${selecteId === id ? "on" : ""}`} url={url}>
      <span className={`icon iconfont ${icon}`} />
      <div className="text">{text}</div>
    </Link>
  );
};

export default Bar;
