import { parseJsonByString } from "../../../common/utils";
import { Banner, Footer, List, Empty } from "./component";

const Home = () => {
  const schema: PageSchema | null = parseJsonByString("schema", {});

  return (
    <div className="homepage">
      <Banner item={schema?.children[0]} />
      <Footer />
      <List />
      <Empty />
    </div>
  );
};

export default Home;
