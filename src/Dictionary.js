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
            <section>
          <form onSubmit={search}>
            <label><h2 className="label">Browse the Dictionary </h2></label>
            <input type="search" placeholder="Search for a word" class="form-control search-input" onChange={handleKeywordChange}/>
          </form>
          <small class="hint">i.e. London, weather, coffee</small>
          </section>
          <Results results={results}/>
        </div>
    )
}