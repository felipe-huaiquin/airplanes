var player = {
    left: 450,
    top: 450
}

var enemies = [
    {left: 350, top: 200},
    {left: 450, top: 250}
]

var missiles = []

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

    function moveEnemies(){
        var content = "";
        for(var i = 0; i < enemies.length; i++){
            enemies[i].top+=5
        }
        document.getElementById("enemies").innerHTML = content;
    }
    moveEnemies();

    function drawMissiles(){
        var output = "";
        for(var i = 0; i < missiles.length; i++){
            
        }
    }
    drawMissiles();

    document.onkeydown = function(e){
        // // diagonal movements
        // while(((e.key == 'a' && e.key == 'w')||(e.key == 'ArrowLeft'&& e.key =='ArrowUp'))){
        //     player.left+=-10;
        //     player.top+=10;
        // }
        // organic movements
        if( (e.key == 'a' || e.key == 'ArrowLeft') && player.left > 0){
            player.left+=-10;
        }
        if((e.key == 'w' || e.key == 'ArrowUp') && player.top > 0){
            player.top+=-10;
        }
        if((e.key == 'd' || e.key == 'ArrowRight') && player.left < 691){
            player.left+=10;
        }
        if((e.key == 's' || e.key == 'ArrowDown') && player.top < 511){
            player.top+=10;
        }
        drawPlayer();
        if((e.key == 'c' || e.key == 'Control')){
            missiles.push({left: player.left, top: player.top})
        }
    }

    function gameLoop(){
        moveEnemies();
        drawPlayer();
        drawEnemies();
        setTimeout(gameLoop,1000);
    }
    gameLoop();
}