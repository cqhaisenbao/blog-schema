declare module "*.scss";

type ChildrenName = "Banner" | "Footer" | "List";

interface Attributes {
  title?: string;
  description?: string;
  avatarUrl?: string;
  link?: string;
  [key: string]: any;
}

interface ChildrenItem {
  id: number;
  name?: ChildrenName;
  attributes?: Attributes;
  children?: ChildrenItem[];
}

interface PageSchema {
  name: "Page";
  children: ChildrenItem[];
  attributes: {
    [key: string]: any;
  };
}
