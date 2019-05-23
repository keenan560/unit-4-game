//Code I tried but failed

// let GameManager = {
//    setGameStart: function(classType) {
//     this.resetPlayer(classType);
//     this.setPreFight();
//    },
//    resetPlayer: function(classType) {
//     switch (classType) {
//         case "Brett Hart":
//             player = new Player("Brett Hart", 432, 8, 4,"Bret_Hart_-_WWE_Bret_Hart_Theme_Song_FilesNG.com.mp3");
//           break;
//         case "Shawn Michaels":
//             player = new Player("Shawn Michaels", 480, 8, 5, "Shawn-Michaels-Sexy-Boy-WWE.mp3");
//             break;
//         case "Rick FLair":
//             player = new Player("Rick Flair", 465, 4, 9, "Ric-Flair-Down-WWE-Theme-Song.mp3");
//             break;
//         case "The Rock":
//             player = new Player("The Rock", 398, 6, 7, "The-Rock-Electrifying-WWE.mp3");
//             break;
//         case "Stone Cold":
//             player = new Player("Stone Cold", 495, 9, 4, "Steve-Austin-Stone-Cold-WWE-Theme.mp3");
//             break;
//         case "Hulk Hogan":
//             player = new Player("Hulk Hogan", 500, 10, 7, "Hulk-Hogan-Real-American.mp3");
//             break;
//         case "The Undertaker":
//             player = new Player("The Undertaker", 415, 10, 5, "The-Undertaker-WWE-Theme-Song.mp3");
//             break;
//         case "Razor Ramon":
//             player = new Player("Razor Ramon", 391, 6, 5, "1992 Razor Ramon - WWE Theme Song - Bad Guy [Download] [HD].mp3");
//             break;
//     }
//        let getInterface = function(classType) {
//            if (classType === "Brett Hart" ) {
//                $("#Brett").html("HP: " + player.healthPoints);
//            }

//            $("#Shawn").html("HP: " + player.healthPoints);
//            $("#Rick").html("HP: " + player.healthPoints);
//            $("#Rock").html("HP: " + player.healthPoints);
//            $("#Stone").html("HP: " + player.healthPoints);
//            $("#Hulk").html("HP: " + player.healthPoints);
//            $("#Undertaker").html("HP: " + player.healthPoints);
//            $("#Razor").html("HP: " + player.healthPoints);
//        }

//        getInterface();

//    },
//    setPreFight: function() {

//    }
// }

// let player;
// let enemy;

// function Player(classType, healthPoints, attackPower, counterAttack, theme) {
//     this.classType =  classType;
//     this.healthPoints = healthPoints;
//     this.attackPower = attackPower;
//     this.counterAttack = counterAttack;
//     this.theme = theme;
// }

// function Enemy(enemyType, healthPoints, attackPower, counterAttack, theme) {
//     this.enemyType = enemyType;
//     this.healthPoints = healthPoints;
//     this.attackPower = attackPower;
//     this.counterAttack = counterAttack;
//     this.theme = theme;
// }

// function hpOnPage(elementId) {
//     for (var i = 0; i < characters.length; i++) {
//         $(elementId).append("<div />");
//         $(elementId).append("HP: " + characters[i].name);
//         $(elementId).append("HP: " + characters[i].healthPoints);
//         $(elementId).append("HP: " + characters[i].attackPower);
//         $(elementId).append("HP: " + characters[i].counterAttack);
//         $(elementId).append("HP: " + characters[i].theme);
//     }
// }

// function updateLocation(fromElementId,toElementId) {
//     $(fromElementId).children().remove();
//         for (var i = 0; i < characters.length; i++) {
//             $(toElementId).append("<img>");
//             $(toElementId + "img: last-child").attr("id", characters[i].name);
//             $(toElementId + "img: last-child").attr("src",)
//         }
// }

$(document).ready(function() {
  // Cdoe for Wrestler Objs
  var characters = {
    Hulk: {
      name: "Hulk Hogan",
      healthPoints: 500,
      attackPower: 10,
      counterAttack: 7,
      theme: "Hulk-Hogan-Real-American.mp3"
    },
    Brett: {
      name: "Brett Hart",
      healthPoints: 432,
      attackPower: 8,
      counterAttack: 4,
      theme: "Bret_Hart_-_WWE_Bret_Hart_Theme_Song_FilesNG.com.mp3"
    },
    Stone: {
      name: "Stone Cold",
      healthPoints: 495,
      attackPower: 9,
      counterAttack: 4,
      theme: "Steve-Austin-Stone-Cold-WWE-Theme.mp3"
    },
    Rock: {
      name: "The Rock",
      healthPoints: 398,
      attackPower: 6,
      counterAttack: 7,
      theme: "The-Rock-Electrifying-WWE.mp3"
    },
    Shawn: {
      name: "Shawn Michaels",
      healthPoints: 480,
      attackPower: 8,
      counterAttack: 5,
      theme: "Shawn-Michaels-Sexy-Boy-WWE.mp3"
    },
    Rick: {
      name: "Rick Flair",
      healthPoints: 465,
      attackPower: 4,
      counterAttack: 9,
      theme: "Ric-Flair-Down-WWE-Theme-Song.mp3"
    },
    Razor: {
      name: "Razor Ramon",
      healthPoints: 391,
      attackPower: 6,
      counterAttack: 5,
      theme: "1992 Razor Ramon - WWE Theme Song - Bad Guy [Download] [HD].mp3"
    },
    Undertaker: {
      name: "The Undertaker",
      healthPoints: 415,
      attackPower: 10,
      counterAttack: 5,
      theme: "The-Undertaker-WWE-Theme-Song.mp3"
    }
  };

  // Variables
  var chosen = false;
  var enemy = false;
  var user;
  var cpu;
  var baseAttack = 0;

  function user(name, healthPoints, attackPower, counterAttack, theme) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttack = counterAttack;
    this.theme = theme;
  }
  function attackEnemy(user, enemy) {
    while (
      characters.user.healthPoints > 0 ||
      characters.enemy.healthPoints > 0
    ) {
      characters.enemy.healthPoints -= characters.user.attackPower;
      characters.user.healthPoints -= characters.enemy.attackPower;
    }
  }

  function isEndofRound() {
    if (characters.user.healthPoints <= 0) {
      alert("Hey you lost!");
    }
    if (characters.enemy.healthPoints <= 0) {
      alert("Cool you won the round!");
    }
  }

  function choosePlayer() {
    if (chosen === false) {
      $("#arena").append($(this));
      //   user = this;
      $("#arena").append("<img src='assets/images/vs.png'>");
      $(this).addClass("user");
      $(this).removeClass(".profile");
      $(".img-thumbnail").addClass("bg-danger");
      $("#select").html("Choose your opponent:");
      chosen = true;
    } else {
      $("#arena").append(this);
      cpu = this;
      $(this).addClass("enemy");
      $(".img-thumbnail").removeClass("bg-danger");
      $("#select").html("Get ready to rumble!!");
      $(".btn").show();
      $(".jumbotron").show();
      $(".jumbotron").html(
        "Use the Attack button below to beat your opponent!"
      );
      enemy = true;
    }
    // Not sure what you're trying to do here
    // chooseEnemy();
  }

  // Choose enemy is not a function it is an event listener listening for clicks
  //   let chooseEnemy = $(".profile").click(function() {
  //     if (chosen && !enemy) {
  //       $("#arena").append(this);
  //       cpu = this;
  //       $(this).addClass("enemy");
  //       $(".img-thumbnail").removeClass("bg-danger");
  //       $("#select").html("Get ready to rumble!!");
  //       $(".btn").show();
  //       $(".jumbotron").show();
  //       $(".jumbotron").html(
  //         "Use the Attack button below to beat your opponent!"
  //       );
  //       enemy = true;
  //     }
  //   });

  // Code to make objects appear with images
  // You where calling the character objects by the wrong names.
  $("#Brett").html("HP: " + characters.Brett.healthPoints);
  $("#Shawn").html("HP: " + characters.Shawn.healthPoints);
  $("#Rick").html("HP: " + characters.Rick.healthPoints);
  $("#Rock").html("HP: " + characters.Rock.healthPoints);
  $("#Stone").html("HP: " + characters.Stone.healthPoints);
  $("#Hulk").html("HP: " + characters.Hulk.healthPoints);
  $("#Undertaker").html("HP: " + characters.Undertaker.healthPoints);
  $("#Razor").html("HP: " + characters.Razor.healthPoints);

  // ***** Events *****

  $(".btn").hide();
  $(".jumbotron").hide();
  $(".profile").click(choosePlayer);
  // hpOnPage(".profile");
});
