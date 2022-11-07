
// index.js for click me app
// Created by Kevin Kemmerer

var tile_array = [];

function whichBox(tile_id) {
    if (tile_array.includes(tile_id)) {
        console.log("You already clicked this");
    } else {
        tile_array.push(tile_id);
        document.getElementById(tile_id).style = "background-color: green";
    }
}

function arrayWatcher(tile_id) {
    whichBox(tile_id);

    if (tile_array.length === 16) {   
        var countInterval = 0;
        let refreshID = setInterval(function () {
            changeColors();
            if (++countInterval === 16) {
                window.clearInterval(refreshID);
            }
        }, 600);
    } else {
        return;
    }
}

function changeColors() {
    if (tile_array.length !== 0) {
        document.getElementById(tile_array.pop()).style = "background-color: #ccc";
    } else {
        return;
    }
}
