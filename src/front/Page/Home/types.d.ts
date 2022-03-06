type Children = "Banner" | "Footer" | "List";

interface ChildrenItem {
  id: number;
  name: Children;
  attributes: {
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
