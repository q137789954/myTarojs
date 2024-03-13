import { Link } from "@/components";
const Test2 = () => {
  return (
    <div>
      <Link delta={1}>返回上一页</Link>
      <div />
      <Link delta={2}>返回上两页</Link>
      <div />
      <Link url="/pages/club/index">
          跳转俱乐部页面（tabbar页面）
      </Link>
      <div />
      <Link url="/pages/club/index" type='switchTab'>
          跳转俱乐部页面, type='switchTab'模式 
      </Link>
    </div>
  );
};

export default Test2;
