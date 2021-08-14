document.getElementById("start").onclick = function() {
    var n = document.getElementById("NumberArr").value;
    if(!(n% 1 == 0) || n<=0 ){
        alert("введите натуральное число!!!");
        return;
    }
    document.getElementById("sortedarray").innerHTML = "<br>Отсортированные массивы<br>" + generateArr(n).join('<br>');
}
function RandomLengths(n) {
    var array = new Array();
	var RealLength;
    while(array.length < n) {
         RealLength = Math.ceil(Math.random()*20)+1;
		  if (array.indexOf(RealLength) === -1){
            array.push(RealLength);
        }
    
    }
    return array;
}
                  
function generateArr(n) {
    var newArray = new Array();
    var arraysLenghts = new Array(); 
     arraysLenghts = RandomLengths(n);
    for(var i = 0; i < n; i++) {
        var array = new Array();
        for(var j = 0; j < arraysLenghts[i]; j++) {
           MaximumNum = Math.ceil(Math.random() * 30);
            array.push(MaximumNum);
        }
        newArray.push(array);
    }
    document.getElementById("unsortedarray").innerHTML = "<br>Неотсортированные массивы<br>" + newArray.join('<br>');
    for(var i = 0; i < n; i++)
	{
        if((i + 1) % 2 == 0)
		{
            for(var j = 0; j < arraysLenghts[i]; j++)
			{
                for(var k = 0; k < arraysLenghts[i] - j; k++)
				{
                    if(newArray[i][k] > newArray[i][k + 1])
					{
                        var arr = newArray[i][k];
                        newArray[i][k] = newArray[i][k + 1];
                        newArray[i][k + 1] = arr;
                    }
                }
            }
        }
        else{
            for(var j = 0; j < arraysLenghts[i]; j++)
			{
                for(var k = 0; k < arraysLenghts[i] - j; k++)
				{
                    if(newArray[i][k] < newArray[i][k + 1])
					{
                        var arr = newArray[i][k];
                        newArray[i][k] = newArray[i][k + 1];
                        newArray[i][k + 1] = arr;
                    }
                }
            }
        }
    }
    return newArray;
}

