import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div onClick={() => {}}>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
