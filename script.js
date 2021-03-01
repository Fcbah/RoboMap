let linear = 125;
let angular = 125;


function MousedownLin(id)
{
    if(id == "F"){

    }
}
function MouseupLin()
{

}

function routine()
{
    if(linear > 125){
        linear -=10
    }

}
function send()
{
    setTimeout(send,1000)
}

    var spA =125;
    var spB =-120;
    
    console.log("ready");
    let xhr = new XMLHttpRequest();
    let outa = 'http://192.168.4.1:8080/?';
    outa += 'spA=';
    outa += spA.toString();
    outa += '&spB=';
    outa += spB.toString();
    xhr.open("GET",outa);
    xhr.send();

    xhr.onload = function(){
        console.log(xhr.response);
        
    }