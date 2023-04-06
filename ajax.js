console.log("welcome to ajax");


let fetchbtn= document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',buttonclickhandler);

function buttonclickhandler(){
    console.log('you have clicked the fetch button');

    const xhr= new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
   // xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    //xhr.getResponseHeader('Content-type','application/json');

    xhr.onprogress= function(){
        
        console.log("on progress");
    }

   /* xhr.onreadystatechange= function(){
        console.log("readystate is = "+ xhr.readyState);

    }*/

    xhr.onload= function(){

        if(this.status===200){
            console.log(this.response);
        }
        else
        {
            console.error("some problem occured");
        }

    }
    param='{"name":"test12345678","salary":"123","age":"23"}';
    xhr.send(param);
    console.log("we are done");
}

let popbtn= document.getElementById("popbtn");
popbtn.addEventListener('click',popclickhandler);

function popclickhandler(){
    console.log('you have clicked the populate button');

    const xhr1= new XMLHttpRequest();

    xhr1.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);
   /*xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');*/

/*xhr.onprogress= function(){
        
        console.log("on progress");
    }*/

   /* xhr.onreadystatechange= function(){
        console.log("readystate is = "+ xhr.readyState);

    }*/

    xhr1.onload= function(){

        if(this.status===200){
            let obj=JSON.parse(this.response);
            console.log(obj);
            let l1=document.getElementById('l1');
            str="";
            //const len=Object.getOwnPropertyNames(obj).length;
            //console.log(len);
            console.log(Object.values(obj).length);
           /* for (key in obj)
            {
                str+='<li>${obj[key].employee_name}</li>';
            }*/
            for (let i = 0; i < 24; i++) {
                //const employee = obj[i];
                let temp=obj.data[i].employee_name;
                str+='<li>'+temp+'</li>';
              }
           l1.innerHTML=str;
        }
        else
        {
            console.log("some problem occured");
        }
        

    }
    
    xhr1.send();
    console.log("we are done");
}
