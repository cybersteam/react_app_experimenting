function a(){
    // var is block scoped - it only is relevant to 
    for (var i=0; i < 3; i++){
        console.log(i);
        //setTimeout only runs when the complete code has run succesfully
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
        console.log(i)
    }
}

a();