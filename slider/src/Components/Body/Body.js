/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext} from "react";
import { ClientContext} from "../../Main";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Content from "../Content/Content";
function Body(){
    const { clients, index, setIndex, Increase, Decrease} =useContext(ClientContext);
    // let lastIndex = clients.length -1 ;
    // const Increase = () => {
    //     index === lastIndex ? setIndex(0) : setIndex(index+1);
    // }
    // const Decrease = () => {
    //     index === 0 ? setIndex(lastIndex) : setIndex(index-1); 
    // }
    return(
    <section css={styles}>
        <button onClick = {Decrease} className = "prev">
            <FontAwesomeIcon icon={faChevronLeft} className="fontAwesome-icon"/>
        </button>
        <Content/>
        <button onClick = {Increase} className = "next">
            <FontAwesomeIcon icon={faChevronRight} className="fontAwesome-icon"/>
        </button>
    </section>    
    )
}
const styles = css`
    display:flex;
    align-items: center;
    justify-content: center;
    height:300px;
    width: 650px;
    position: relative;
    // overflow: hidden;
    > button{
        position: absolute;
        width: 32px;
        height: 32px;
        cursor: pointer;
        display:flex;
        align-items: center;
        border: none;
        border-radius: 15%;
        background-color: #617d98;
        z-index: 1;
        > .fontAwesome-icon{
            width: 22px;
            height: 22px;
            color: white;
        }
    }
    .prev{
        left: 0;
    }
    .next{
        right: 0;
    }
    
`
export default Body;