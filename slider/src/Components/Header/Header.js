/** @jsxRuntime classic */
/**@jsx jsx */ 
import {css, jsx} from "@emotion/react";
import { faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
    return(
        <section css={styles}>
            <FontAwesomeIcon className="Header_icon" icon={faAngleDoubleRight}/>
            <span className="Header">CLIENT REVIEWS</span>
            <FontAwesomeIcon className="Header_icon" icon={faAngleDoubleLeft}/>
        </section>
    );
};

const styles=css`
    font-weight: 500;
    color: rgb(50,77,103);
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 70px; 
    > .Header{
        margin: 0 10px;
    }
    > .Header_icon{
        color: red;
    }
`
export default Header;