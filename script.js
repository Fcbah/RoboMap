let linear = 125;
let angular = 125;

var spA =125;
var spB =-120;
LinP = false;
LinL = false;
AngP = false;
AngL = false;

function MousedownLin(id)
{
    if(id == "F"){
        
        if(linear == -100){
            linear =0;
        }
        else if (linear == 0){
            linear = 100;
        }
        else{
            linear += 15;
        }
        LinP = true;
    }
    if(id == "B"){
        if(linear == 100){
            linear =0;
        }
        else if (linear == 0){
            linear = -100;
        }
        else{
            linear -= 15;
        }
        LinL = true;
    }
}
function MouseupLin()
{
    Linp = false;
    LinL = false;
}
function MousedownAng(id)
{
    if(id == "R"){
        
        if(angular == -100){
            angular =0;
        }
        else if (angular == 0){
            angular = 100;
        }
        else{
            angular += 50;
        }
        AngP = true;
    }
    if(id == "L"){
        if(angular == 100){
            angular =0;
        }
        else if (angular == 0){
            angular = -100;
        }
        else{
            angular -= 50;
        }
        AngL = true;
    }
}
function MouseupAng(){
    AngL = false;
    AngP = false;
}

function routine()
{
    
    var count = document.querySelector("#angu");
    count.innerText = angular.toString();

    count = document.querySelector("#line");
    count.innerText = linear.toString();

    if(angular > 100){
        angular = 100;
    }else if(angular > 0){
        angular = 0;
    }else if(angular >= -100){
        angular = 0;
    }
    else{
        angular = -100
    }

    setTimeout(routine,1000);
}



    function send()
    {
    spA = (linear+angular)/2;
    spB = (linear - angular)/2;
    let xhr = new XMLHttpRequest();
    let outa = 'http://192.168.4.1:8080/?';
    outa += 'spA=';
    outa += spA.toString();
    outa += '&spB=';
    outa += spB.toString();
    xhr.open("GET",outa);
    xhr.send();

    xhr.onload = function(){
        setTimeout(send,1000);
        console.log(xhr.response);       
        
        }
    }
    console.log("ready");
    routine();
    send();
        
    