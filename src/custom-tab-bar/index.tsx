import Bar from "./Bar";
import useTabbatContext from "../models/tabbar/useTabbatContext";
import "./index.less";


const index = () => {

  const { tabBars, selectedId } = useTabbatContext();

  return (
    <div className="tabbar">
      {tabBars.map((item) => (
        <Bar key={item.id} {...item} selectedId={selectedId} />
      ))}
    </div>
  );
};

export default index;
