/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import React,{useState, createContext, useEffect} from "react";
import people from "./Data/data";

export const ClientContext = createContext();
function Main( {children} ){
    const [clients] = useState(people);
    const [index, setIndex] = useState(0); 

    let lastIndex = clients.length -1 ;
    const Increase = () => {
        index === lastIndex ? setIndex(0) : setIndex(index+1);

    }
    const Decrease = () => {
        index === 0 ? setIndex(lastIndex) : setIndex(index-1); 
    }

    useEffect(()=>{
        let slider = setInterval(Increase, 5000);
        return () => {
            clearInterval(slider)
        };
    },[index])
    console.log(clients);
    return(
    <ClientContext.Provider value={{clients, index, setIndex, Increase, Decrease}}>
        <div css={styles}>
            {children}
        </div>
    </ClientContext.Provider>
        );
};
const styles = css`
margin: 0 auto;
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center; 
// max-width: 700px;
`;
export default Main;
