var element= prompt("What would you like to do?");
var list= ["study"];

while (element!=='quit'){
    if (element==="new"){
    console.log(list);
    }
    var element= prompt("What would you like to do?");
    console.log(list.push(element));
    if (element==="list"){
        list.forEach(function(element){
            console.log(element);
        });
    }
        
}
