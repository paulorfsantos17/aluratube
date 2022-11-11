import { Header } from "/src/components/header/Header";
import { Menu } from "/src/components/menu/Menu";
import { Timeline } from "/src/components/timeline/Timeline";

import config from "../config.json";
import { CSSReset } from "../src/components/CssReset/CssReset";
import { useState } from "react";

function HomePage(props) {
  const [search, setSearch] = useState("");
  return (
    <>
      <CSSReset />
      <div>
        <Menu serach={search} setSearch={setSearch} />
        <Header />

        <Timeline playlist={config.playlist} searchTitle={search} />
      </div>
    </>
  );
}

export default HomePage;
