import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import appSubcrice from "./AppSetSubcriceChat";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function emitComments(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment lesson ${id}`
      })
    );
  }, 2000);
}

emitComments(1);
emitComments(2);
emitComments(3);

root.render(
  <StrictMode>
    <appSubcrice />
  </StrictMode>
);
