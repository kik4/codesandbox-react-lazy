import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const LazyComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import("./Component");
});

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
