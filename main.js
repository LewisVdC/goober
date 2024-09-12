var goobers = 1;
var finders = 0;


document.getElementById("goobercount").innerHTML = "goober count: "+goobers;



function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.goobers !== "undefined") goobers = savegame.goobers;
    if (typeof savegame.finders !== "undefined") finders = savegame.finders;
}


// most important one
var save={
goobers:goobers,
finders:finders
} 

document.getElementById("goobercount").innerHTML = "goober count: "+goobers;

function goober(number){goobers=goobers+number
    document.getElementById("goobercount").innerHTML = "goober count: "+goobers;
}

function buyFinder(){
    document.getElementById("goobercount").innerHTML = "goober count: "+goobers;
    var findercost = Math.floor(10*Math.pow(1.1,finders));
    if (goobers >= findercost){
        finders=finders+1
        goobers=goobers-findercost
        document.getElementById("findercount").innerHTML= finders;
        document.getElementById("goobercount").innerHTML = "goober count: "+goobers;
    }

    var nextCost = Math.floor(10 * Math.pow(1.1,finders));
    document.getElementById('findercost').innerHTML = nextCost; 
}


window.setInterval(function(){
    var save={
        goobers:goobers,
        finders:finders}
    localStorage.setItem("save",JSON.stringify(save));
    goober(finders)

}, 1000);