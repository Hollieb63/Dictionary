import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
let [results,setResults]=useState(null);

function handleKeywordChange(event){
    setKeyword(event.target.value);

}

function handleResponse(response){

setResults(response.data);

}



function search(event){
    event.preventDefault();
  

    let apiKey="f176dboa0e40a3602864ef25ecact0b3";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
   
}

    return(
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search"onChange={handleKeywordChange}/>
          </form>
          <Results results={results}/>
        </div>
    )
}