import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const LazyComponent = React.lazy(async () => {
  // 遅延
  await new Promise(resolve => setTimeout(resolve, 2000));

  return import("./Component");
});

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
