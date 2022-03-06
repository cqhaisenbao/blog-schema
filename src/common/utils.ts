export const parseJsonByString = (str: string, defaultValue: any) => {
  try {
    return JSON.parse(
      window.localStorage.getItem(str) || JSON.stringify(defaultValue)
    );
  } catch (e) {
    return defaultValue;
  }
};

export const findObj = (str: string, name = "schema") =>
  parseJsonByString(name, {}).children?.find((item: any) => item.name === str);
