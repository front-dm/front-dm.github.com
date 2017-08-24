var firstData, secondData, thirdData;
var flag = false;
onmessage = function(event){
	firstData = event.data[0];
	secondData = event.data[1];
	thirdData = event.data[2];

	for (var i = 0; i < firstData.length; i++) {
		for (var j = 0; j < secondData.length-2; j++) {
			if(firstData[i] === secondData[j]){
				postMessage(`${firstData[i]} \t ${thirdData[j]}`);
				flag = true;
			}
		}
		if(!flag){
			postMessage(`${firstData[i]}`);
		}else{
			flag = false;
		}
	}	
}

