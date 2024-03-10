import { useState, createContext } from "react";
import Header from "@component/header";
import SearchBookPage from "./page/searchBook";
import MarkedBook from "./page/markedBook";
import { TabType } from "./type";

export const TabContext = createContext<{
  tab: TabType;
  setTab: (v: TabType) => void;
}>({ tab: "search", setTab: () => {} });

function App() {
  const [tab, setTab] = useState<TabType>("search");

  return (
    <main>
      <TabContext.Provider value={{ tab, setTab }}>
        <Header />

        {tab === "search" ? <SearchBookPage /> : <MarkedBook />}
      </TabContext.Provider>
    </main>
  );
}

export default App;
