

// ***** Events *****

$(document).ready(function () {



    // Cdoe for Wrestler Objs
    var characters = [
        Hulk = {
            name: "Hulk Hogan",
            healthPoints: 500,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 40,
            photo: "assets/images/hulk-hogan.webp",
            theme: "assets/themes/Hulk-Hogan-Real-American.mp3"
        },
        Brett = {
            name: "Brett Hart",
            healthPoints: 492,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 25,
            photo: "assets/images/bret-hart.jpg",
            theme: "assets/themes/Bret_Hart_-_WWE_Bret_Hart_Theme_Song_FilesNG.com.mp3"
        },
        Stone = {
            name: "Stone Cold",
            healthPoints: 485,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 30,
            photo: "assets/images/stone-cold.jpeg",
            theme: "assets/themes/Steve-Austin-Stone-Cold-WWE-Theme.mp3"
        },
        Rock = {
            name: "The Rock",
            healthPoints: 401,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 29,
            photo: "assets/images/the-rock.jpg",
            theme: "assets/themes/The-Rock-Electrifying-WWE.mp3"
        },
        Shawn = {
            name: "Shawn Michaels",
            healthPoints: 489,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 25,
            photo: "assets/images/sean-michaels.jpeg",
            theme: "assets/themes/Shawn-Michaels-Sexy-Boy-WWE.mp3"
        },
        Rick = {
            name: "Rick Flair",
            healthPoints: 400,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 25,
            photo: "assets/images/rick-flair.jpeg",
            theme: "assets/themes/Ric-Flair-Down-WWE-Theme-Song.mp3"
        },
        Razor = {
            name: "Razor Ramon",
            healthPoints: 398,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 30,
            photo: "assets/images/razor-ramon.jpg",
            theme: "assets/themes/1992 Razor Ramon - WWE Theme Song - Bad Guy [Download] [HD].mp3"
        },
        Undertaker = {
            name: "The Undertaker",
            healthPoints: 474,
            attackPower: Math.floor(Math.random() * 100),
            counterAttack: 50,
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
            $("#roster").append(`<a id='${wrestler.name}'class="profile" href='#'><div><figure><img alt='${wrestler.name}'src='${wrestler.photo}'class='img-thumbnail wrestler '></img><p id='${wrestler.name.replace(/\s+/g, '-')}' class='.hp'>${wrestler.name} ${wrestler.healthPoints}</p></figure></div></a>`);
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

    winLose = [
        "assets/fight-sounds/boos3.mp3",
        "assets/fight-sounds/cheer_8k.mp3"
    ]

    var crowdBoo = new Audio(winLose[0]);
    var crowdCheer = new Audio(winLose[1]);
    var dying = new Audio("assets/fight-sounds/Street Fighter Death Sound.mp3")

    var bell = new Audio("assets/fight-sounds/Boxing Bell Start Round-SoundBible.com-1691615580.mp3");

    var fightQuotes = [
        "Ouch that's gotta hurt Mean Gene!",
        "The insanity of that move!",
        "He hits the buckle!",
        "What a counter strike!",
        "Off the top ropes!",
        "Oh no not the elbow!",
        "Wait..What?!? He's got a chair!",
        "Across the chest!",
        "He just got suplexed!",
        "Folks don't try this at home!"

    ]

    let quotes = function (fightQuotes) {
        var randNum = Math.floor(Math.random() * fightQuotes.length);
        var quote = (`<p class='tele'>${fightQuotes[randNum]}</p>`);
        $("#telecom").append(quote);
    }

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
                    $(this).addClass("animated lightSpeedIn");
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
                        $(".enemy").remove();
                        $("#arena").append(this);
                        $(this).addClass("animated bounceInDown");
                        cpu = characters[i];
                        console.log(cpu);
                        $(this).addClass("enemy");
                        $(".img-thumbnail").removeClass("bg-danger");
                        opponenstLeft -= 1;
                        $("#select").html(`Opponents left: ${opponenstLeft}`);
                        bell.play();
                        $("#screen").html(`<div id='telecom'class='jumbotron text-center'><p class='tele mb-5'>${user.name} vs ${cpu.name}</p></div>`);
                        enemy = true;
                        $("#battle").show();
                    }
                }
            }
        })
    }





    renderChars(characters);
    $("a").click(choosePlayer);
    $("a").click(chooseEnemy)
    // Code for the Attack button

    $("#battle").click(function () {
        fightSounds(moves);
        isDead(user);
        increasePower(user);

        // Code to change User and CPU HPs when attack is clicked

        cpu.healthPoints -= user.attackPower;
        user.healthPoints -= cpu.counterAttack;
        console.log(cpu.healthPoints);
        console.log(user.healthPoints);
        
        $(`#${user.name.replace(/\s+/g, '-')}`).html(user.name + " " + user.healthPoints);
        $(`#${cpu.name.replace(/\s+/g, '-')}`).html(cpu.name + " " + cpu.healthPoints);

        
        // Code to update the telecom with damage points and HP

        $("#screen").html(`<div id='telecom'class='jumbotron text-center'><p class='tele mb-5'>${user.name} vs ${cpu.name}</p><p class='tele'>You dealt ${user.attackPower} damage points to ${cpu.name}</p><p class='tele'>You received ${cpu.counterAttack} damage points from ${cpu.name}</p></div>`);

        quotes(fightQuotes);

        // Code to remove a enemy once HP is done

        if (cpu.healthPoints <= 0) {
            cpu.counterAttack = 0;
            $('#battle').hide();
            $(".enemy").removeClass("bounceInDown");
            $(".enemy").addClass("animated rollOut");
            enemy = false;
            chooseEnemy();

        } else if (user.healthPoints <= 0) {
            user.attackPower = 0;
            $(".user").remove();

        }

        // Code if User wins with restart button
        if (opponenstLeft === 0 && cpu.healthPoints <= 0) {
            bell.play();
            crowdCheer.play();
            $("#roster").append(`<div id='you-win' class='jumbotron mx-auto text-center'><h1 class='h1'>You Win ${user.name}!</h1><button type='button' value='Refresh Page' id='restart'class='btn btn-lg mt-3 font-weight-bold'>Play Again</button></div>`);
            $("#battle").remove();
        } else if ((user.healthPoints <= 0 && cpu.healthPoints > 0) || (user.healthPoints <= 0 && cpu.healthPoints <= 0)) {
            bell.play();
            crowdBoo.play();
            user.attackPower = 0;
            $(".user").addClass("animated hinge"); 
            // $(".user").remove(); 
            $("#roster").empty();
            $("#roster").append(`<div id='you-win' class='jumbotron mx-auto text-center'><h1 class='h1'>You Lose ${user.name}!</h1><button type='button' value='Refresh Page' id='restart'class='btn btn-lg mt-3 font-weight-bold'>Play Again</button></div>`);
            $("#battle").remove();
        }
        
    })

})




$(document).on("click", "#restart", function () {
    window.location.reload();
})

