declare module "*.scss";

type ChildrenName = "Banner" | "Footer" | "List";

interface ChildrenItem {
  id: number;
  name?: ChildrenName;
  attributes?: {
    title?: string;
    description?: string;
    avatarUrl?: string;
    link?: string;
    [key: string]: any;
  };
  children?: ChildrenItem[];
}

interface PageSchema {
  name: "Page";
  children: ChildrenItem[];
  attributes: {
    [key: string]: any;
  };
}
