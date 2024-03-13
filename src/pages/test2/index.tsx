import { Link } from "@/components";
const Test2 = () => {
  return (
    <div>
      <Link delta={1}>返回上一页</Link>
      <div />
      <Link delta={2}>返回上两页</Link>
      <div />
      <Link url="/pages/test3/index">
        普通跳转test3页面
      </Link >
      <div />
      <Link url="/pages/test3/index" type="reLaunch">
        关闭所有页面，打开test3
      </Link>
    </div>
  );
};

export default Test2;
