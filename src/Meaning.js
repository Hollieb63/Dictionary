import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";


export default function Meaning(props){
return(
    <div className="Meaning">
     
       <section>
    <h3>{props.meaning.partOfSpeech}</h3>
    <p>{props.meaning.definition}</p>
   
    <em>
        {props.meaning.example}</em>
       
        
        <Synonyms synonyms={props.meaning.synonyms} />
 </section>
   
 
    </div>
)
}