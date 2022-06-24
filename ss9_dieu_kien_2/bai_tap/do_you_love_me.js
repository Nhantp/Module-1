function yesClick() {
    alert("Đúng rồi đấy:)))");
}
function noClick() {
    var x= Math.round(Math.random()*window.innerWidth);
    var y=Math.round(Math.round(Math.random())*window.innerHeight);
    document.getElementById('noBtn').style.left= x+'px';
    document.getElementById('noBtn').style.top= y+'px';
}