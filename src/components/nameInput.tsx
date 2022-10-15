import clsx from "clsx";
import { createSignal } from "solid-js";
// import { useUploadsState } from "context/UploadImageContext";

// interface IProps {
//   imgSrc: string;
//   id: string;
// }
export const NameInput = ({ setName }: { setName: any }) => {
  return (
    <div class="mb-6">
      <label class="block mb-2 text-xl font-medium text-green-900 dark:text-white">
        {"Numele elevului"}
      </label>
      <input
        type="text"
        id="success"
        class="bg-green-50 border border-white text-white dark:text-white placeholder-white dark:placeholder-white text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white"
        placeholder=""
        onInput={(e: any) => setName(e.target)}
      />
    </div>
  );
};
