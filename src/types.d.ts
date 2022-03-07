type Children = "Banner" | "Footer" | "List";

interface ChildrenItem {
  id: number;
  name: Children;
  attributes: {
    title?: string;
    description?: string;
    avatar?: string;
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
