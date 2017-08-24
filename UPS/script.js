var w;
function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            console.log(w);
            w = new Worker("worker.js");
            console.log(w);
            var first = (document.getElementById("first").value).split("\n");
        	var second = (document.getElementById("second").value).split("\n");
        	var third = (document.getElementById("third").value).split("\n");
        w.postMessage([first,second,third]);
        }
        w.onmessage = function(event) {
             document.getElementById("fourth").value += event.data + "\n";
             //console.log(event.data);
        };
    } else {
        document.getElementById("fourth").value = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() { 
    document.getElementById("fourth").value = "";
    w.terminate();
    w = undefined;
}

function separate(){
    var resl = document.getElementById("fourth").value;
    var valueText = resl.split("\n");
    document.getElementById("fourth").value = "";
    for (var i = 0; i < valueText.length - 1; i++) {
        //console.log(valueText[i].slice(0, 10) + "||" + valueText[i+1].slice(0, 10));
        if(valueText[i].slice(0, 10) !== valueText[i+1].slice(0, 10)){
            document.getElementById("fourth").value += valueText[i];
            document.getElementById("fourth").value += "\n\n";
        }
        else{
            document.getElementById("fourth").value += valueText[i];
            document.getElementById("fourth").value += "\n";
        }
    }
    document.getElementById("fourth").value += valueText[valueText.length - 1];
}
