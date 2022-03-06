import { parseJsonByString } from "../../../common/utils";
import { Banner } from "./component";

const Home = () => {
  const schema: PageSchema | null = parseJsonByString("schema", {});

  return (
    <div className="wrapper">
      <Banner item={schema?.children[0]} />
    </div>
  );
};

export default Home;
