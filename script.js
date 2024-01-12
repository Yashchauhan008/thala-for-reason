const chack = function(){
    var data = document.getElementById("thala");
    var result = document.getElementById("result");
    var reason = document.getElementById("reason");
    var math = document.getElementById("math");
    var video = document.querySelector("video");
    var inner = document.querySelector("card-inner")

    var len = data.value.length;
    var temp = len-7;
    var temp1 = len-temp
    var temp2 = temp*-1

    var reasonstr = `${data.value} = ${len}`
    var str1 = `${len} - ${temp} = 7`
    var str2 = `${len} - ${temp2} = 7`
    var str3 = `thala for a reason`

    reason.innerHTML = reasonstr;
    if(temp>=0){
        math.innerHTML = str1 ;
    }
    else{
        math.innerHTML = str2 ;
    }
    result.innerHTML = str3;

    video.style.display = "block"
    video.play()
    // inner.style.opacity = "0"
}