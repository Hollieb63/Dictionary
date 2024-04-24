import React,{useState} from "react";


export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);

function handleKeywordChange(event){
    setKeyword(event.target.value);

}


function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
}

    return(
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search"onChange={handleKeywordChange}/>
          </form>
        </div>
    )
}