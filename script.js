  var btn2 =document.querySelector('#fill2');
        var button= document.querySelector('#fill');
        var ar=document.querySelector('#two');
button.addEventListener('click', function (change) {
    button.style.backgroundColor = "black";
    ar.style.color="white";
    btn2.addEventListener('click',function(change2){
        btn2.style.backgroundColor="white";
        btn2.style.color="black";
    });
});