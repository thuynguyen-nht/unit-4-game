$(document).ready(function () {


    //1. random number is generated by computer from 19 -> 120

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
        $("#RandomNumber").text(randomNumber);
    }
    console.log(getRandomInt(19, 121));

    //2. random number is generated for each crystals, from 1->12
    $("btn1").on("click", function () {

    });


    //3. when user click on any of the crystals,
    //the number will be added to the total score number.




    //4. Everytime user clicked, the brower will check as if the total number is smaller or bigger.




    //a. Check if the totalNumber is bigger than the computer random number. 
    //user lose -> refresh the page.



    //b. Check if the totalNumber is smaller, keep adding number when clicked.


});