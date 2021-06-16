/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import {useContext, useState} from "react";
import {ClientContext} from "../../Main";
import React from "react";
function Content(){
    const {clients, index, setIndex,} = useContext(ClientContext);
    // console.log("heloo");
    // console.log(clients);
    return(
        <div css={styles} className = ".slider">
        {
            clients.map((client, indexClient) =>{
            const  {id, image, name, title, quote } = client;
            let class_name = "nextSlide";
            console.log(index);
                if(indexClient === index) 
                    class_name = "activeSlide";
                if(indexClient + 1 === index || (indexClient === clients.length -1 && index === 0) ) 
                    class_name= "lastSlide";
            return(
                <article className={class_name} >
                    <img key={id} src={image}/>
                    <h4>{name} </h4>
                    <div>{title}</div>
                    <p>{quote}</p>
                </article>
                )
            }) 
        }
        </div>
    );

};
const styles = css`
@keyframes slide-fadeIn {
    from {
        opacity: 0;
        // transform: translateX(100%);             
     }
    to {
        opacity:1;
        // transform: translateX(0%);
    }
}
@keyframes fade-slide-out {
    from {
        opacity: 1;
        transform: translateX(0%);             
        }
    to {
        opacity:0;
        transform: translateX(-100%);
    }
}
    display: flex;
    height:100%;
    width: 100%;
    animation: slide-fadeIn 1s;
    position: absolute;
    > article{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        height:100%;
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
        // animation: slide-fadeIn 1s;
        transition: all 0.4s linear;
        img{
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover; 
            border: 3px solid #bcccdc;
        }
        h4{
            text-transform: uppercase;
            color: #88cf81;
            margin-bottom: 7px;
        }
        div{
            text-transform: capitalize;
        }
        p{
            text-align: center;
        }
    }
    > article.activeSlide{
        opacity: 1;
        transform: translateX(0);
    }
    > article.nextSlide{
        transform: translateX(100%);
    }
    > article.lastSlide{
        transform: translateX(-100%);
    }
`
export default Content;