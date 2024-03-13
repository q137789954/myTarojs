import ServiceItem from "./ServiceItem";
import "./index.less";
import img1 from "./assets/1.webp";
import img2 from "./assets/1.webp";

const list = [
  {
    tag: "NEW慕斯浓缩",
    title: "咖快",
    text: "在线点，到店取",
    img: img1,
  },
  {
    tag: "满20免运",
    title: "专星送",
    text: "来喝春日新品",
    img: img2,
  },
];

const ServiceContent = () => {
  return (
    <div className="serviceContent">
      {list.map((item) => (
        <ServiceItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ServiceContent;
