import { Link } from "@/components";
const Test1 = () => {
  return (
    <div>
      <div />
      <Link url="/pages/test2/index">跳转test2</Link>
      <div />
      <Link url="/pages/test2/index" type="redirectTo">关闭当前页面，跳转test2</Link>
      <div />
      <Link url="/pages/my/index">跳转MY页面</Link>
      <div />
      <Link delta={1}>返回上一页</Link>
    </div>
  );
};

export default Test1
