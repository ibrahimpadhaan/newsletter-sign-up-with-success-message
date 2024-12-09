function myfunc() {
    let inp = document.getElementById("imail").value;
    if(inp.length < 2) {
        document.getElementById("imail").style.color = "rgba(255,0,0,0.7)";
        document.getElementById("imail").style.border = "2px solid rgba(255,0,0,0.4)";
        document.getElementById("imail").style.backgroundColor = "rgba(255,0,0,0.2)";
        document.getElementById("spn").innerHTML = "Valid email required";
    }
    let arr = inp.split("");
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "@" && arr.length > 2) {
            window.location.href = "index2.html";
        }
        else {
            document.getElementById("imail").style.color = "rgba(255,0,0,0.7)";
            document.getElementById("imail").style.border = "2px solid rgba(255,0,0,0.4)";
            document.getElementById("imail").style.backgroundColor = "rgba(255,0,0,0.2)";
            document.getElementById("spn").innerHTML = "Valid email required";
        }
    }
}