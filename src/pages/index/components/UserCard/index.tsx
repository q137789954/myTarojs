import { Image } from "@tarojs/components";
import { TabbarLink } from '@/components/index';
import "./index.less";
import avatarImg from "./assets/avatar.webp";
import starImg from "./assets/star.png";

const UserCard = () => {
  return (
    <TabbarLink href="/pages/club/index">
      <div className="userCard">
        <div className="avatar">
          <Image className="avatarImg" mode="aspectFit" src={avatarImg} />
        </div>
        <div className="star">
          <div className="top">
            <span className="count">26.1</span>
            <img className="startImg" src={starImg} alt="" />
          </div>
          <div className="bottom">
            <span className="startText">1</span>
            <img className="smallStar" src={starImg} alt="" />
            <span className="startText">开启尊享权益 &gt;</span>
          </div>
        </div>
        <div className="coupon">
          <div className="couponText">5张好礼券</div>
        </div>
      </div>
    </TabbarLink>
  );
};

export default UserCard;
