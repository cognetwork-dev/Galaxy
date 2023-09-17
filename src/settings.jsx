import useLocalStorage from "./useLocalStorage.jsx";

const useLocalFallback = (key, fallback) => {
  var [local, setLocal] = useLocalStorage(key);
  return [local === null ? fallback : local, setLocal];
};

export var useLocalTheme = () => useLocalFallback("theme", "default");
export var useLocalTitle = () => useLocalStorage("title");
export var useLocalIcon = () => useLocalStorage("icon");
export var useLocalClickoff = () => useLocalFallback("clickoff", "false");