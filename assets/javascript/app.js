

// ***** Events *****

$(document).ready(function () {



    // Cdoe for Wrestler Objs
    var characters = [
        Hulk = {
            name: "Hulk Hogan",
            healthPoints: 500,
            attackPower: 10,
            counterAttack: 7,
            photo: "assets/images/hulk-hogan.webp",
            theme: "assets/themes/Hulk-Hogan-Real-American.mp3"
        },
        Brett = {
            name: "Brett Hart",
            healthPoints: 432,
            attackPower: 8,
            counterAttack: 4,
            photo: "assets/images/bret-hart.jpg",
            theme: "assets/themes/Bret_Hart_-_WWE_Bret_Hart_Theme_Song_FilesNG.com.mp3"
        },
        Stone = {
            name: "Stone Cold",
            healthPoints: 495,
            attackPower: 9,
            counterAttack: 4,
            photo: "assets/images/stone-cold.jpeg",
            theme: "assets/themes/Steve-Austin-Stone-Cold-WWE-Theme.mp3"
        },
        Rock = {
            name: "The Rock",
            healthPoints: 398,
            attackPower: 6,
            counterAttack: 7,
            photo: "assets/images/the-rock.jpg",
            theme: "assets/themes/The-Rock-Electrifying-WWE.mp3"
        },
        Shawn = {
            name: "Shawn Michaels",
            healthPoints: 480,
            attackPower: 8,
            counterAttack: 5,
            photo: "assets/images/sean-michaels.jpeg",
            theme: "assets/themes/Shawn-Michaels-Sexy-Boy-WWE.mp3"
        },
        Rick = {
            name: "Rick Flair",
            healthPoints: 465,
            attackPower: 4,
            counterAttack: 9,
            photo: "assets/images/rick-flair.jpeg",
            theme: "assets/themes/Ric-Flair-Down-WWE-Theme-Song.mp3"
        },
        Razor = {
            name: "Razor Ramon",
            healthPoints: 391,
            attackPower: 6,
            counterAttack: 5,
            photo: "assets/images/razor-ramon.jpg",
            theme: "assets/themes/1992 Razor Ramon - WWE Theme Song - Bad Guy [Download] [HD].mp3"
        },
        Undertaker = {
            name: "The Undertaker",
            healthPoints: 415,
            attackPower: 10,
            counterAttack: 5,
            photo: "assets/images/undertaker.jpg",
            theme: "assets/themes/The-Undertaker-WWE-Theme-Song.mp3"
        }

    ]


    function startOfBaseattack(user) {
        baseAttack = user.attackPower;
    }

    function increasePower(user) {
        user.attackPower += baseAttack;
    }



    function updateHealth(user, cpu) {
        $(".hp").html(`${user.name} ${user.healthPoints}`);
    }

    function isDead(player) {
        if (player.healthPoints <= 0 && $(this).hasClass("user")) {
            $("#battle").html("Restart");
            $("#battle").click(function () {
                location.reload();
            })
        } else if (player.healthPoints <= 0 && $(this).hasClass("enemy")) {
            $(".enemy").remove();
            enemy === false;
            chooseEnemy();
        }
    }


    function renderChars(characters) {
        for (var i = 0; i < characters.length; i++) {
            var wrestler = characters[i];
            $("#roster").append(`<a id='${wrestler.name}'class="profile" href='#'><div><figure><img alt='${wrestler.name}'src='${wrestler.photo}'class='img-thumbnail wrestler '></img><p id='${wrestler.name}' class='.hp'>${wrestler.name} ${wrestler.healthPoints}</p></figure></div></a>`);
        }
    }

    var track;

    var moves = [
        "assets/fight-sounds/Kick-SoundBible.com-1331196005.mp3",
        "assets/fight-sounds/Right Cross-SoundBible.com-1721311663.mp3",
        "assets/fight-sounds/Slap-SoundMaster13-49669815.mp3",
        "assets/fight-sounds/Upper Cut-SoundBible.com-1272257235.mp3"
    ];

    let fightSounds = function (moves) {
        var randNum = Math.floor(Math.random() * moves.length);
        var move = new Audio(moves[randNum]);
        move.play();
    }
    var bell = new Audio("assets/fight-sounds/Boxing Bell Start Round-SoundBible.com-1691615580.mp3");


    // Variables 
    var chosen = false;
    var enemy = false;
    var user;
    var cpu;
    var opponenstLeft = characters.length - 1;
    var baseAttack = 0;



    function choosePlayer() {
        if (chosen === false) {
            // track.play();
            for (var i = 0; i < characters.length; i++) {
                if (characters[i].name === (this).id) {
                    $("#arena").append(this);
                    user = characters[i];
                    console.log(user);
                    var track = new Audio(user.theme);
                    console.log(track);
                    track.play();
                    $("#arena").append("<img src='assets/images/vs.png'>");
                    $(this).addClass("user");
                    $(this).removeClass(".profile");
                    $(".img-thumbnail").addClass("bg-danger");
                    $("#select").html("Choose your opponent:");
                    chosen = true;
                    startOfBaseattack(user);
                }

            }

        }
    }


    function chooseEnemy() {
        $("a").on(`click`, function () {
            if ((chosen) && (enemy === false)) {
                for (var i = 0; i < characters.length; i++) {
                    if (characters[i].name === (this).id) {
                        $("#arena").append(this);
                        cpu = characters[i];
                        console.log(cpu);
                        $(this).addClass("enemy");
                        $(".img-thumbnail").removeClass("bg-danger");
                        opponenstLeft -= 1;
                        $("#select").html(`Opponents left: ${opponenstLeft}`);
                        $("#screen-row").append(`<div class='jumbotron bg-primary text-warning'>Fight!</div>`);
                        bell.play();
                        enemy = true;
                    }
                }
            }
        })
    }




    renderChars(characters);
    $("a").click(choosePlayer);
    $("a").click(chooseEnemy)
    $("#battle").click(function() {
        fightSounds(moves);
        isDead(user);
        increasePower(user);
        cpu.healthPoints -= user.attackPower;
        user.healthPoints -= cpu.counterAttack;
        console.log(cpu.healthPoints);
        console.log(user.healthPoints);
 
        if (cpu.healthPoints <=0) {
            $(".enemy").remove();
            enemy = false;
            chooseEnemy();
        }

        if (opponenstLeft === 0 && cpu.healthPoints <=0) {
            bell.play();
            $("#roster").append(`<div id='you-win' class='jumbotron mx-auto text-center'><h1 class='h1'>You Win ${user.name}!</h1><button type='button' value='Refresh Page' id='restart'class='btn btn-lg font-weight-bold'>Play Again</button></div>`);
            $("#battle").remove();
        } 


       
    })

    if (enemy === true && chosen === true) {
        $("#screen-row").append(`<div id='results-cam' class='jumbotron mx-auto text-center'><h1 class='h1'>It's ${user.name} => ${user.healthPoints} versus ${cpu.name} => ${cpu.healthPoints}</h1><p></p></div>`);
    }


})




$(document).on("click", "#restart", function(){
    window.location.reload();
})

