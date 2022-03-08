import { parseJsonByString } from "../../../common/utils";
import { Banner, Footer, List, Empty } from "./component";
import React from "react";

const map = {
  Banner,
  List,
  Footer,
};

type Render = (data: ChildrenItem) => JSX.Element;

const render: Render = (item) =>
  item.name && map[item.name] ? (
    React.createElement(map[item.name], { key: item.id, item: item })
  ) : (
    <Empty key={item.id} item={item} />
  );

const Home = () => {
  const schema: PageSchema = parseJsonByString("schema", {});
  const { children } = schema;

  return (
    <div className="homepage">
      <div>{children.map((item) => render(item))}</div>
    </div>
  );
};

export default Home;
