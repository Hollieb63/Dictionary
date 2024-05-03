import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
let [results,setResults]=useState(null);
let [photos, setPhotos]=useState ([]);

function handleKeywordChange(event){
    setKeyword(event.target.value);

}

function handleImages(response){
setPhotos(response.data.photos)
}

function handleResponse(response){
    setResults(response.data);
    let imageApiKey="f176dboa0e40a3602864ef25ecact0b3";
    let imageApiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios
    .get(imageApiUrl, { headers: { Authorization: `Bearer ${imageApiKey}` } })
    .then(handleImages);


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
            <input type="search" placeholder="Search for a word" className="form-control search-input" onChange={handleKeywordChange}/>
          </form>
          <small className="hint">i.e. London, weather, coffee
          </small>
          </section>
          <Results results={results}/>
          <Photos photos={photos}/>
        </div>
    )
}