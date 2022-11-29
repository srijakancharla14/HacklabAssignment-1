import { Fragment, useState, useEffect } from "react";
function Button(props) {
    const [countDown, setcountDown] = useState(0); 
    const [currentState, setcurrentState] = useState(null);
    const [upcomingState, setupcomingState] = useState("red");
    let timer;
    
    useEffect(() => {
        timer = setInterval(() => setcountDown(countDown > 0 ? countDown-1: 0), 1000);
        return () => clearInterval(timer);
    },[countDown]);
    
    useEffect(() => {
        console.log(countDown,currentState, upcomingState)
        if(countDown<=0) {
            console.log("Update current state to ::", upcomingState);
            setcurrentState(upcomingState);
            if (upcomingState === "red")  { 
                setupcomingState("green");
                console.log("Delay Added :: ", currentState, upcomingState, 15);
                setcountDown(15);
            }
            else if(upcomingState === "green")  {
                setupcomingState("yellow");
                console.log("Delay Added :: ", currentState, upcomingState,  5);
                setcountDown(5);
            }
            else if(upcomingState === "yellow")  {
                setupcomingState("red");
                console.log("Delay Added :: ", currentState, upcomingState,  20);
                setcountDown(20);
            }
        }
    },[currentState, countDown]);


  return (
    <Fragment>
        <div className=" bg-gray-500  h-20 mt-3 w-60 ml-96 ">
            <h1 className="font-semibold mt-2 mx-3 ">Counter</h1>
            <h1 className="font-semibold mx-28 ">
                {/* {minute}:{second} */}
                
                {countDown}
            </h1>
        </div>

        <button // Red
            style={{background: currentState === "red" ? "#991b1b" : "black"}}
            className={"mt-20 ml-80 m-10 p-20 rounded-full font-sans text-center"}
            onClick={() => {currentState !== "red" && setupcomingState("red"); setcountDown(0)}}
        >
            {props.items[0].name}
        </button>
        <button // Green
            style={{background: currentState === "green" ? "#166534": "black"}}
            className=" ml-52 p-20 rounded-full"
            onClick={() => {currentState !== "green" && setupcomingState("green"); setcountDown(0)}}
        >
            {props.items[1].name}
        </button>
        <div className="ml-36">
            <button // Yellow
                style={{background: currentState === "yellow" ? "#FFFF00": "black"}}
                className=" ml-96 mt-10 p-20 rounded-full"
                onClick={() => {currentState !== "yellow" && setupcomingState("yellow"); setcountDown(0)}}
            >
            {props.items[2].name}
            </button>
        </div>
    </Fragment>
  );
}
export default Button;

