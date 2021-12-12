function insert(cellNumber) {
    var cell = document.getElementById(cellNumber);
    var player = document.getElementById("player").innerHTML;
    if(player.slice(-1) == "O")
        cell.innerHTML = "O";
    else
        cell.innerHTML = "X";
    checkWin(player); 
}

function checkWin(player) {
    const cells = [];
    var end = false;
    var winner = "none";
    for(var i=0; i<9; i++) {
        cells[i] = document.getElementById((i+1).toString()).innerHTML;
    }
    if((cells[0] == cells[1] && cells[1] == cells[2]) ||
       (cells[3] == cells[4] && cells[4] == cells[5]) ||
       (cells[6] == cells[7] && cells[7] == cells[8]))
        end = true;
    else if((cells[0] == cells[3] && cells[3] == cells[6]) ||
       (cells[1] == cells[4] && cells[4] == cells[7]) ||
       (cells[2] == cells[5] && cells[5] == cells[8]))
        end = true;
    else if((cells[0] == cells[4] && cells[4] == cells[8]) ||
       (cells[2] == cells[4] && cells[4] == cells[6]))
        end = true;
    if(end) {
        winner = document.getElementById("player").innerHTML.slice(-1);
        var buttons = document.getElementsByClassName("boardButton");
        for(var i=0; i<buttons.length; i++)
            buttons[i].setAttribute("disabled",true);
        document.getElementById("player").innerHTML = "\'"+winner+"\'"+" WON!";
        return;
    }
    else {
        if(player.slice(-1) == "O")
            document.getElementById("player").innerHTML = player.slice(0,player.length-1)+"X";
        else
            document.getElementById("player").innerHTML = player.slice(0,player.length-1)+"O";
    }
}

function newGame() {
    document.getElementById("player").innerHTML = "Player: O";
    var cells = document.getElementsByTagName("TH");
    for(var i=0; i<9; i++) {
        cells[i].innerHTML = "<button class=\"boardButton\" onclick=\"insert('"+(i+1)+"')\"></button>";
    }
}