(function ($) {
    
    function numbers() {

        var x = document.getElementById('firstNumber').value;
        var y = document.getElementById('secondNumber').value;
        return Math.max(x,y);

    };

    $('#determine').on("click", function (event) {
        $('#largestNumber').html(numbers());
    });



    function words() {

        var a = document.getElementById('firstWord').value;
        var b = document.getElementById('secondWord').value;

        if (a.length < b.length){
            console.log(a)
        }

    };

    $('#determine2').on("click", function (event) {
        $('#largestNumber').html(words());
    });

    function rollem(){
        
        var sides = document.getElementById('numSides').value;
        var dice = document.getElementById('numDice').value;
        console.log(sides);

        roll = 0

        for (i=0; i<dice; i++){
            rannie = parseInt(Math.random())
            roll = roll + (rannie*dice)+1;
            console.log( "lol" + roll);
        }

        return roll;

    }

    $('#rollem').on("click", function (event){
        $('#result').html(rollem());
    });
    
})(jQuery);
