import { Header } from "/src/components/header/Header";
import { Menu } from "/src/components/menu/Menu";
import { Timeline } from "/src/components/timeline/Timeline";

import config from "../config.json";
import { CSSReset } from "../src/components/CssReset/CssReset";

function HomePage(props) {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />

        <Timeline playlist={config.playlist} />
      </div>
    </>
  );
}

export default HomePage;
