
import { Fragment } from "react";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
const names=[
  {
  id:'e1',
  name:'RED'
  },
  {id:'e2',
  name:'GRE'},
  {id:'e3',
  name:'YEL'}]
function App() {
  return(
    <Fragment>
      <Navbar/>
        <Button items={names}/>
        
    </Fragment>
 
    // 
  );
}
export default App