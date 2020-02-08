var player = {
    left: 450,
    top: 450
}

var enemies = [
    {left: 350, top: 200},
    {left: 450, top: 250}
]

window.onload= function(){
    function drawPlayer(){
        var content = "<div class='player' style='left: "+player.left+"px; top: "+player.top+"px'></div>";
        document.getElementById("players").innerHTML = content;
    }
    drawPlayer();

    function drawEnemies(){
        var content = "";
        for(var i = 0; i < enemies.length; i++){
            content += "<div class='enemy' style='left: "+enemies[i].left+"px; top: "+enemies[i].top+"px'></div>"

        }
        document.getElementById("enemies").innerHTML = content;
    }
    drawEnemies();

    document.onkeydown = function(e){
        if( e.keyCode == 37 && player.left > 0){
            player.left+=-10;
        }
        if(e.keyCode == 38 && player.top > 0){
            player.top+=-10;
        }
        if(e.keyCode == 39 && player.left < 691){
            player.left+=10;
        }
        if(e.keyCode == 40 && player.top < 511){
            player.top+=10;
        }
        drawPlayer();
    }
}