// import React, { useEffect } from "react";
// import { useUploadsState } from "../context/UploadImageContext";
// import { DragAndDrop } from "components/DragDrop";

import { Component, createSignal } from "solid-js";
import { DragAndDrop } from "../components/drag_drop";
import { NameInput } from "../components/nameInput";

// import { Card } from "../components/Card";
export const MainPage: Component = () => {
  const [name, setName] = createSignal("");
  console.log(name());

  // useEffect(() => {
  //   console.log(context.images);
  // }, [context.images]);
  const handle = (target: HTMLInputElement) => {
    setName(target.value);
    console.log(name());
  };
  return (
    <div class={"py-10 relative"}>
      <div class="mx-auto flex flex-col-reverse md:flex-row justify-between items-start max-w-5xl mb-10">
        <div class="mt-5 md:mt-0">
          <NameInput setName={handle} />
          <button class="mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
        <DragAndDrop />
      </div>
    </div>
  );
};

export default MainPage;
