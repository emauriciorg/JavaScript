
function is_positive_int(unknow_type)
{
    return(typeof unknow_type)!== "number" 
        || unknow_type < 0 
        || !(unknow_type % 1 === 0);
}

function draw_stair(triangle_height)
{
    /*Checks before doing the stair*/
    if (is_positive_int(triangle_height) )
    {
        console.log(triangle_height + " Is NOT a valid height");
        return;
    }

    let stair ="#";

    for (let i= 0; i<=triangle_height; i=i+1){
        console.log(stair);
        stair= stair+"#";
    }
    console.log("The Stair len is " + stair.length);
}

draw_stair("ts"); // control test
draw_stair(-5);  // control test
draw_stair(5.1); // control test
draw_stair(5);
