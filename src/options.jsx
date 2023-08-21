import Head from "./components/head";
import { createEffect, createSignal } from "solid-js";
import { useLocalTheme } from './settings';
import themes from "./themes.json";
import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

function Options() {
  var [ localTheme, setLocalTheme ] = useLocalTheme();

  var format = (item, type) => (item.name);

  const [theme, setTheme] = createSignal({ name: themes.filter(i => i.theme == localTheme)[0].name, theme: localTheme });

  createEffect(() => {
    setLocalTheme(theme().theme)
    document.body.setAttribute("data-theme", theme().theme)
  });
  
  return (
    <>
        <Head defaultTitle="Options" />
        <div class="options">
            <div class="option">
              <div class="optionTitle">Theme</div>
              <div class="optionText">Make Nebula your own!</div>
              <Select initialValue={theme()} options={themes} format={format} onChange={setTheme} />
            </div>
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
            <div class="option"></div>
        </div>
    </>
  );
}

export default Options;