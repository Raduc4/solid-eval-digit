import { MainPage } from "./pages";
import type { Component } from "solid-js";
import { DragAndDrop } from "./components/drag_drop";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <MainPage />
    </div>
  );
};

export default App;
