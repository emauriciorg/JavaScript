
function is_int(unknow_type)
{
        return unknow_type % 1 === 0;
}

function draw_triangle(triangle_height){

    /*Checks before doing the stair*/
    if ((typeof triangle_height)!== "number" 
        || triangle_height < 0 
        || !is_int(triangle_height) )
    {
        console.log(triangle_height + " Is NOT a valid height");
        return;
    }
    else
    {
        console.log(triangle_height + " Is a valid height");
    }

    let stair ="#";
    for (let i= 0; i<=triangle_height; i=i+1){
        console.log(stair);
        stair= stair+"#";
    }
    console.log("The Stair len is " + stair.length);

}

draw_triangle("ts"); // control test
draw_triangle(-5);  // control test
draw_triangle(5.1); // control test
draw_triangle(5);
