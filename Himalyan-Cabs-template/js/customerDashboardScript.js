$(document).ready(function(){

    //check for active tab
function activator() {
    if ($('ul li:nth-child(1)').hasClass("active")) {
        $('#accountInfoForm').css("display", "block");
    }
    if ($('ul li:nth-child(2)').hasClass("active")) {
        $('#addressBookForm').css("display", "block");
    }
    if ($('ul li:nth-child(3)').hasClass("active")) {
        $('#ordersForm').css("display", "block");
    }
    if ($('ul li:nth-child(4)').hasClass("active")) {
        $('#bookRide').css("display", "block");
    }
}
    //make tab active
    $('ul li').click(function(){
        $('ul li').removeClass("active")
        $("form").css("display","none")
        $(this).addClass("active");
activator();
    });


});
function rideBooked() {
    alert("Your ride has been confirmed");
}