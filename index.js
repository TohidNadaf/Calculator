let string = "";
let buttons =  document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
      
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
    else if(e.target.innerHTML == 'DE'){
            string = string.slice(0, string.length - 1);
            // string = string.replace('characterToReplace', '');
            document.querySelector('input').value = string;
    }




    else if(e.target.innerHTML == 'π'){
        string = "3.14";
         document.querySelector('input').value = string;
}


else if(e.target.innerHTML == '²'){
    string =(string * string);
     document.querySelector('input').value = string;
}


        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

       }) 

})