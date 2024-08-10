
   var a="" 
   
    const factPara=document.querySelector("p");
    const getFacts=async()=>{
        a=document.querySelector("input").value;
        var b="https://api.dictionaryapi.dev/api/v2/entries/en/";
         var c=b+a;
        let response= await fetch(c);
       let data= await response.json();
       factPara.innerText=data[0].meanings[0].definitions[0].definition;
       
    };
    const btn=document.querySelector("button");
    btn.addEventListener("click",getFacts);
