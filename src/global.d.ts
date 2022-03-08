declare module "*.scss";

type ChildrenName = "Banner" | "Footer" | "List";

interface ChildrenItem {
  id: number;
  name?: ChildrenName;
  attributes?: {
    title?: string;
    description?: string;
    avatarUrl?: string;
    [key: string]: any;
  };
}

interface PageSchema {
  name: "Page";
  children: ChildrenItem[];
  attributes: {
    [key: string]: any;
  };
}
