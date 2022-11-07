import { render } from "react-dom";
import Pet from "./Pet";



const App = () => {
  return (
    <div onClick={() => {}}>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="HCockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
  )
  } 

render(<App />, document.getElementById("root"));