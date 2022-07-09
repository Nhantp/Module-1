function button_add() {
    array[x]=document.getElementById("text").value;
    alert("Element:"+array[x]+"index:"+x);
    x++;
    document.getElementById("text").value= "";
}
function button_display() {
    let e="<hr>";
    for(let i=0; i<array.length; i++){
        e+="Element: "+ i +"="+array[i]+"<br>"
    }
    document.getElementById("result").innerHTML=e;
}