import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);

function handleKeywordChange(event){
    setKeyword(event.target.value);

}

function handleResponse(response){
console.log(response.data[0]);
}



function search(event){
    event.preventDefault();
  

    let apiKey="f176dboa0e40a3602864ef25ecact0b3";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
   
}

    return(
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search"onChange={handleKeywordChange}/>
          </form>
        </div>
    )
}