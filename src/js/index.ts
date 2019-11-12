import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"



let url="https://localhost:44318/api/Word";

interface Word {
    text: string;
    count: number;
}

document.getElementById("wordButton").addEventListener("click",buttonPress);
getAll();

function buttonPress():void{

let insertWord=(<HTMLInputElement>(document.getElementById("wordInput"))).value;
axios.put<Word>(url+"/9999",{
    text:insertWord,
    count:0 
 }).then(function (response) {
    console.log(response);
    getAll();
  }).catch(function(response){
      console.log(response);
  })


}


function getAll():void{

    axios.get<Word[]>(url).then((response:AxiosResponse)=>{
document.getElementById("wordList").innerHTML="";
        console.log(response.data);
        response.data.forEach((element:Word) => {
            
             let size=(element.count*2)%200+25;
             let biggest="";
             if (size<50){
                document.getElementById("wordList").innerHTML+='<li style="color:black; font-size:'+size+'px;"'+ ">"+element.text+"</li>";
             }
             else
             if (size>=50 && size<=100){
                document.getElementById("wordList").innerHTML+='<li style="color:blue; font-size:'+size+'px;"'+ ">"+element.text+"</li>";
             }
             else{
                document.getElementById("wordList").innerHTML+='<li style="color:cyan; font-size:'+size+'px;"'+ ">"+element.text+"</li>";
             }
            
           
    
        }); 
            
        
    
       });
}



let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
