import { useState } from "react";

const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return {
    collapsed,
    toggle,
  };
};

export default useCollapsed;
