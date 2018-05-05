/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice1 as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
Init();
//var toss, tossResult;
//document.querySelector('.dice1').style.display = 'none';
//document.querySelector('.dice2').style.display = 'none';

var active, score, current, gameStatus, winningScore,player1,player2;
    
    //document.querySelector('#coin').style.display = 'none';
var winningscore = function (num) {
    
    if (isNaN(num)) {
       
            winningScore = parseInt(prompt("Please enter the winning score"));
            winningscore(winningScore);
        }
    }

    document.querySelector('.btn-new').addEventListener('click', function () {
        Init();
        gameStatus = true;
        player1 = prompt("please enter player 1 name");
        player2 = prompt("please enter player 2 name");
        winningScore = parseInt(prompt("Please enter the winning score"));
        console.log(winningScore);
        winningscore(winningScore);
       
        //player1 = prompt("please enter player 1 name");
   
        
   
        document.querySelector('#name-0').textContent = player1;
        document.querySelector('#name-1').textContent = player2;
        //document.querySelector('#toss').style.display = 'block';
        //document.querySelector('#coin').style.display = 'block';


    });

    document.querySelector('.btn-roll').addEventListener('click', function () {

        if (gameStatus) {
            var dice1 = Math.ceil(Math.random() * 6);
            var dice2 = Math.ceil(Math.random() * 6);
            if (dice1 === 1 && dice2 === 1) {
                current = 0;
                document.querySelector('#current-' + active).textContent = current;
                NextPlayer();

            }
            else if (dice1 === 6 && dice2 === 6) {
                current = 0;
                document.querySelector('#current-' + active).textContent = current;
                score[active] = 0;
                document.querySelector('#score-' + active).textContent = score[active];
                NextPlayer();
            }
            else {
                var dice1Dom = document.querySelector('.dice1');
                var dice2Dom = document.querySelector('.dice2');
                dice1Dom.style.display = 'block';
                dice1Dom.src = '../Images/dice-' + dice1 + '.png';
                dice2Dom.style.display = 'block';
                dice2Dom.src = '../Images/dice-' + dice2 + '.png';
                current += dice1 + dice2;


                document.querySelector('#current-' + active).textContent = current;
            }




        }

    });

    document.querySelector('.btn-hold').addEventListener('click', function () {
        if (gameStatus) {
            score[active] += current;
            document.querySelector('#score-' + active).textContent = score[active];

            if (score[active] >= winningScore) {
                console.log('player-' + active + '-panel');
                document.querySelector('.player-' + active + '-panel').classList.remove('active');
                document.querySelector('.player-' + active + '-panel').classList.add('winner');
                document.querySelector('#name-' + active).textContent = 'Winner'
                document.querySelector('.dice1').style.display = 'none';
                document.querySelector('.dice2').style.display = 'none';
                Init();

                gameStatus = false;
            }
            else {
                current = 0;
                document.querySelector('#current-' + active).textContent = current;
                NextPlayer();
            }


        }
    });




    

    function NextPlayer() {

        active = active === 0 ? 1 : 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
    }

function Init() {
    
   
    //console.log(tossResult);
    //if (tossResult === 'heads')
    active = 0;
    //else {
    //    active = 1;
    //}
    //console.log('Current--' + active);
    current = 0;
    score = [0, 0];
   // document.querySelector('#toss').style.display = 'none';
    //document.querySelector('#coin').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-'+active+'-panel').classList.add('active')
    
    };


    //document.querySelector('#coin').addEventListener('click', function () {
    //    var flipResult = Math.random();
    //    document.querySelector('#coin').classList.remove('heads');
    //    document.querySelector('#coin').classList.remove('tails');
    //    setTimeout(function () {
    //        if (flipResult <= 0.5) {
    //            document.querySelector('#coin').classList.add('heads');
    //            tossResult='heads'
    //            console.log('it is head');
    //        }
    //        else {
    //            document.querySelector('#coin').classList.add('tails');
    //            tossResult = 'tails';
    //            console.log('it is tails');
    //        }
            
    //        toss = true;
    //        TossResult();
    //    }, 100);
        
    //})


function TossResult() {
    
    setTimeout(function () {
        if (tossResult === 'heads') {
            document.querySelector('#toss').textContent = "Player 1 Won the toss";
        }
        else {
            document.querySelector('#toss').textContent = "Player 2 Won the toss";
        } }, 100);

    setTimeout(Init,5000);
    
    }













