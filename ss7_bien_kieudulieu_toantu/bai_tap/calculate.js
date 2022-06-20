function addi() {
    let a=parseInt(document.getElementById("cal1").value);
    let b=parseInt(document.getElementById("cal2").value);
    let c=a+b;
    // document.write("result: "+c);
    document.getElementById("display").innerText = c;
}

function subt() {
    let a=parseInt(document.getElementById("cal1").value);
    let b=parseInt(document.getElementById("cal2").value);
    let d=a-b;
    // document.write("result: "+d);
    document.getElementById("display").innerText=d;
}
function multi() {
    let a=parseInt(document.getElementById("cal1").value);
    let b=parseInt(document.getElementById("cal2").value);
    let e=a*b;
    // document.write("result: "+e)
    document.getElementById("display").innerText=e;
}
function divi() {
    let a=parseInt(document.getElementById("cal1").value);
    let b=parseInt(document.getElementById("cal2").value);
    let f=a/b;
    // document.write("result: "+f)
    document.getElementById("display").innerText=f;
}