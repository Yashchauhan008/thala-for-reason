const chack = function(){
    var data = document.getElementById("thala");
    var result = document.getElementById("result");
    var reason = document.getElementById("reason");
    var math = document.getElementById("math");
    var video = document.querySelector("video");
    var inner = document.querySelector("card-inner")

    var len = data.value.length;
    var temp = len-7;
    var temp2 = temp*-1

    var reasonstr = `${data.value} = ${len}`
    var str1 = `${len} - ${temp} = 7`
    var str2 = `${len} + ${temp2} = 7`
    var str3 = `${len} + ${temp2} = 7`
    var str4 = `thala for a reason`

    reason.innerHTML = reasonstr;
    if(temp>0){
        math.innerHTML = str1 ;
    }
    else if(temp<0){
        math.innerHTML = str2 ;
    }
    else{
        math.innerHTML = str3
    }
    result.innerHTML = str4;

    video.style.display = "block"
    video.play()
    // inner.style.opacity = "0"
}
