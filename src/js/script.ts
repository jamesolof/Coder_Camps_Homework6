
let userEntry: string = '';
let theWord: string;
let fails: number;
let wins: number;
let theAnswer: string[];
let wasGuessed: string;
let entry1: string;

function game() {

    fails = 0;
    wins = 0;
    theAnswer = [];
    wasGuessed = '';
    theWord = entry1

    for (let i = 0; i < theWord.length; i++) {
        this.theAnswer.push('?', ' ');
        $('#gameDisplay').html(theAnswer.join(''));
    }
    $('#theHanger').html(`<img src="/img/hMan${fails}.png">`)

}

function guessCheck(guessy) {
    let guess: string = guessy;
    let indexr: number = 0;
    console.log(theWord);

    if ((wasGuessed.indexOf(guess) == -1) && guess.length == 1) {
        while (theWord.indexOf(guess, indexr) > -1) {
            indexr = theWord.indexOf(guess, indexr)
            theAnswer[indexr * 2] = guess;
            wins++;
            indexr++;
        }
        if (theWord.indexOf(guess) == -1) {
            fails++;
            $('#theHanger').html(`<img src="/img/hMan${fails}.png">`)
        }
        if (fails < 6) {
            $('#gameDisplay').html(theAnswer.join(''))
        }
        if (fails >= 6) {
            $('#gameDisplay').html('YOU LOST')
        }
    }
}
function loadDoc() {
    let that = this
    let x: string = '';
    $.ajax({
        accepts: 'text/json',
        method: 'Get',
        url: 'data/wordlist.json'
    })
        .done(function (data) {
            let words = <string[]>data;
            let randy = Math.floor(Math.random() * words.length)
            x = (words[randy])
            that.entry1 = x;
        });
};

loadDoc();

$('#enter').on("click", function (event) {
    guessCheck($('#entry').val());
});


$('#ng').on("click", function (event) {
    loadDoc();
    game();
});
