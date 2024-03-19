//import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './App.css'

const App = () => {
  return (
    <div id="wrapper">
      <div id="header">
        <TransformWrapper minScale={0.1} maxScale={16}>
          <TransformComponent wrapperStyle={{ width: "100%", maxHeight: "calc(100vh - 50px)" }}>
            <img src="Anthropocene.jpg" alt="test" />
          </TransformComponent>
        </TransformWrapper>
      </div>

    </div>
  );
};
export default App
