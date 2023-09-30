import Head from "./components/head";
import { createEffect, createSignal } from "solid-js";
import { useLocalTheme, useLocalTitle, useLocalIcon, useLocalClickoff } from './settings';
import themes from "./themes.json";
import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

function Options() {
  //Nebelung did the code

  var [localTheme, setLocalTheme] = useLocalTheme();
  const [localTitle, setLocalTitle] = useLocalTitle();
  const [localIcon, setLocalIcon] = useLocalIcon();
  const [localClickoff, setLocalClickoff] = useLocalClickoff();

  var format = (item, type) => (item.name);

  const [theme, setTheme] = createSignal({ name: themes.filter(i => i.theme == localTheme)[0].name, theme: localTheme });

  createEffect(() => {
    setLocalTheme(theme().theme)
    document.body.setAttribute("data-theme", theme().theme)
  });

  const [isAboutBlank, setIsAboutBlank] = createSignal(parent.aboutBlank == true)

  const openAboutBlank = () => {
    var win = window.open("about:blank")
    win.window.aboutBlank = true
    win.document.write(`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; background: ${getComputedStyle(document.body).getPropertyValue("--background").trim()}" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${window.location.href}"></iframe>`)
  }

  const updateTitle = (e) => {
    setLocalTitle(e.target.value)
    document.title = e.target.value || "Options | Galaxy"
  }

  const updateIcon = (e) => {
    setLocalIcon(e.target.value)
    document.querySelector("link[rel='icon']").href = e.target.value || "/logo.png"
  }

  const toggleClickoff = (e) => {
    if (e.target.getAttribute("on") == "false") {
      e.target.setAttribute("on", "true")
    } else if (e.target.getAttribute("on") == "true") {
      e.target.setAttribute("on", "false")
    } else {
      e.target.setAttribute("on", "true")
    }

    setLocalClickoff(e.target.getAttribute("on"))
  }

  return (
    <>
        <Head defaultTitle="Options" />
        <div class="options">
            <div class="option">
              <div class="optionTitle">Theme</div>
              <div class="optionText">Make Galaxy your own!</div>
              <Select initialValue={theme()} options={themes} format={format} onChange={setTheme} />
            </div>
            <div class="option">
              <div class="optionTitle">Tab Mask</div>
              <div class="optionText">Disguise your tab to your liking!</div>
              <input class="optionInput" placeholder="Title" onKeyUp={updateTitle} value={localTitle} />
              <input class="optionInput" placeholder="Favicon" onKeyUp={updateIcon} value={localIcon} />
            </div>
            {!isAboutBlank() ? (
              <div class="option">
                <div class="optionTitle">About Blank</div>
                <div class="optionText">Open Galaxy in a about:blank!</div>
                <button class="optionButton" onclick={openAboutBlank}>Open</button>
              </div>
            ) : ""}
            <div class="option">
              <div class="optionTitle">Clickoff Cloaking</div>
              <div class="optionText">Disguise your tab on clickoff!</div>
              {localClickoff == "true" ? (
              <div class="toggle" onclick={toggleClickoff} on="true">
                <div class="toggleInside"></div>
              </div>
              ) : (
              <div class="toggle" onclick={toggleClickoff} on="false">
                <div class="toggleInside"></div>
              </div>
              )}
            </div>
        </div>
    </>
  );
}

export default Options;