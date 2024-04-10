
var slide=1;
showSlide(slide);
function slideChng(n){
    showSlide(slide+=n);
}

function showSlide(n){
    var i;
    var arr=document.getElementsByClassName("mySlides");
    if(n>arr.length)
        slide=1;
    if(n<1)
        slide=arr.length;
    for(i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    arr[slide-1].style.display="block";
}