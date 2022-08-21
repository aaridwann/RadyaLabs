import { createContext, useState } from "react";

export const dataCurrentContext = createContext();

const DataContext = () => {
  const [dataCurrent, setDataCurrent] = useState();
  return <dataCurrentContext.Provider value={{ dataCurrent, setDataCurrent }}>{children}</dataCurrentContext.Provider>;
};
export default DataContext;
