import Bar from "./Bar";
import useTabbatContext from "../models/tabbar/useTabbatContext";
import "./index.less";


const index = () => {

  const { list, id: selecteId } = useTabbatContext();

  return (
    <div className="tabbar">
      {list.map((item) => (
        <Bar key={item.id} {...item} selecteId={selecteId} />
      ))}
    </div>
  );
};

export default index;
