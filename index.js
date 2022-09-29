                    function startFunction() { ///start
                        var x = document.getElementById("myDIV");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                    }
                    if (new Date().getHours() > 17) {
                        document.getElementById("demo").innerHTML = "Bonsoir et bienvenue dans le 'Life Game'.";
                        window.style("background-color:black");
                    }

                    function startTime() {
                        var today = new Date();
                        var h = today.getHours();
                        var m = today.getMinutes();
                        var s = today.getSeconds();
                        m = checkTime(m);
                        s = checkTime(s);
                        document.getElementById('time').innerHTML =
                            h + ":" + m + ":" + s;
                        var t = setTimeout(startTime, 500);
                    }

                    function checkTime(i) {
                        if (i < 10) {
                            i = "0" + i
                        }; // add zero in front of numbers < 10
                        return i;
                    }

                    function startTime() {
                        var today = new Date();
                        var h = today.getHours();
                        var m = today.getMinutes();
                        var s = today.getSeconds();
                        m = checkTime(m);
                        s = checkTime(s);
                        document.getElementById('time').innerHTML =
                            h + ":" + m + ":" + s;
                        var t = setTimeout(startTime, 500);
                    }

                    function checkTime(i) {
                        if (i < 10) {
                            i = "0" + i
                        }; // add zero in front of numbers < 10
                        return i;
                    }

                    function myDealer() {
                        var txt;
                        var person = confirm(" Salut tu veut de la weed?  Confirme et gagne: 1 points de détente et perds: 1 points de santé. Passe ton chemin et gagne 1 points de Karma et 1 de Santé!"); //var "nom" dans l'alert
                        if (person == null || person == "") {
                            txt = " Refuser! Bon choix! Tu gagne 1 points de Karma, 1 d'ego et conserve ta santé!";
                            //document.write("visit my skill -https://codepen.io/h-lautre/");
                            document.getElementById("karma").innerHTML += "🌞";
                            document.getElementById("santé").innerHTML += "💚";
                            document.getElementById("ego").innerHTML += "👑";

                        } else { //" " + person +
                            txt = "Accepter! Tu gagne: 1 points de détente, Tu perds: 1 points de santé"; //dans var "text""(pour aligner sur une deuxieme ligne faire "premier mess .n second message .n trois etc")
                            //comment suprimer un point? /= ou -= m'affiche "NaN" car valeur non numerique?
                            //test avec var-- non fonctionnelle
                            document.getElementById("santé").innerHTML /= "💚";
                            document.getElementById("détente").innerHTML += "🍃";

                        }
                        document.getElementById("deal").innerHTML = txt;


                    }

                    function myflic() {
                        'use strict';
                        window
                        var player;
                        var random;
                        var computer;
                        // var gagnant;
                        var txt;
                        player = window.prompt("Viens on joues à Chifoumi! pierre feuille ou ciseau ?"); //var "nom" dans l'alert        
                        player = player.toLowerCase();
                        random = Math.random();

                        // 1/3 de chance pour chacun 
                        if (random < 1 / 3) {
                            computer = 'pierre';
                        } else if (random < 2 / 3) {
                            computer = 'feuille';
                        } else {
                            computer = 'ciseau';
                        }

                        //definir une égalité
                        if (computer == player) {
                            alert("egalité, gagne un point détente !");
                            document.getElementById("détente").innerHTML += "🍃";
                        } else if ((computer == 'pierre' && player == 'ciseau') ||
                            (computer == 'ciseau' && player == 'feuille') ||
                            (computer == 'feuille' && player == 'pierre')) {
                            alert("Perdu. Déguage petit et gagne un point expérience !");
                            //solution n'ont concluante, car je souhaite afficher le result dans "txt"
                            document.getElementById("expé").innerHTML += "🔧";

                        } else {
                            alert("Bien joué, tu gagne un point égo !");
                            document.getElementById("ego").innerHTML += "👑";
                        }
                        // txt = "computer" + "player "
                        //effacer le txt precedent?
                        // document.getElementById("flic").value = txt;
                        //document.getElementById("deal"||"flic").deleteData(0, 5);
                        // document.getElementById("deal"||"flic").innerHTML = hidden;
                        //document.getElementById("deal").innerHTML = clear.other.txt;
                        // document.getElementById("flic").innerHTML = txt;  


                    }

                    /*
                                //TESTE{echange points} non fonctionnel car pas orienté cote objet je pense!!!
                                function myDealer(){
                                var dealer;
                                if ("ego" == "👑👑👑") {
    
                                    confirm(" Veut tu échanger t'es point ego contre des points éxperience? cela te seras utile pour le reste de ta life!");
                                    if (confirm == null) {
                                        alert(" Peut être plus tard, lorsque la raison aurat prit le dessus !");
                                        document.getElementById("karma").innerHTML -= "🌞";//comment enlever un points? (indique "NAN")
                                        document.getElementById("ego").innerHTML += "👑";
                                    } else (confirm = "") {// prompt = " " + person +
                                        alert("Accepter! Tu est sur le bon chemin pour vivre heureux!");
                                        document.getElementById("karma").innerHTML += "🌞";
                                        document.getElementById("expé").innerHTML += "🔧🔧🔧🔧";
    
                                    }    
                                }
                            } 
                    */

                    //a-revoir !!!
                    // non fonctionnel car pas orienté cote objet je pense ( gael tu persiste dans le vent!!!!) 
                    function détente() {
                        var détente;
                        if ("détente" == "🍃🍃🍃") {
                            // document.getElementById("détente").innerHTML =="🍃🍃🍃";
                            alert("Game Over");
                        }
                    }

                    ///////////////////////////////////////////////////////////////////////////////////////////////////////
                    //script d'origine repimpé 
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////
                    var oneTime = true;
                    (function() {
                        var myAudio = document.getElementById('myAudio');
                        var claque = document.getElementById('claque');
                        var zen = document.getElementById('zen');
                        var supersaian = document.getElementById('supersaian');
                        var shot = document.getElementById('shot');
                        var sprite = document.querySelector('.sprite'),

                            key = {
                                left: false,
                                right: false,
                                claque: false,
                                zen: false,
                                supersaian: false,
                                shot: false
                            }, //,up:false},
                            trans = 0,
                            property = getTransformProperty(sprite);

                        function getTransformProperty(element) {
                            var properties = [
                                'transform',
                                'WebkitTransform',
                                'msTransform',
                                'MozTransform',
                                'OTransform'
                            ];
                            var p;
                            while (p = properties.shift()) {
                                if (typeof element.style[p] != 'fixed') {
                                    return p;
                                }
                            }
                            return false;
                        }

                        function translate() {
                            sprite.style[property] = 'translateX(' + trans + 'px)';
                        }
                        //////collision detection a mettre en place ici?


                        function walk(e) {
                            var keyCode = e.keyCode;

                            if (keyCode === 39) {
                                key.right = true;
                                //
                            }
                            if (keyCode === 32) {
                                key.supersaian = true;
                                /////////////////////////////
                            }
                            if (keyCode === 38) {
                                key.claque = true;
                                claque.play();
                                ////////////////////////////  
                                /////////////////////////////
                            }
                            if (keyCode === 13) {
                                key.shot = true;
                                shot.play();
                                ////////////////////////////
                            }
                            if (keyCode === 40) {
                                key.zen = true;
                                myAudio.play();
                                ////////////////////////////  
                            } else if (keyCode === 37) {
                                key.left = true;
                            }
                            if (key.right === true) {
                                trans += 7; // var x avancé du perso
                                translate();
                                sprite.classList.remove('left');
                                sprite.classList.add('right');
                                sprite.classList.add('walk-right');
                                ////////////////////////////////////
                            }
                            if (key.claque === true) {
                                trans += 0;
                                translate();
                                // a-revoir
                                sprite.classList.remove('claque');
                                sprite.classList.add('claque');
                                sprite.classList.add('walk-claque');
                                // document.getElementById("karma").innerHTML += "🌑";

                                /////////////////////////////////////
                                ////////////////////////////////////
                            }
                            if (key.zen === true) { //&&=é(conditions)
                                trans += 0;
                                translate();
                                if (oneTime) document.getElementById("santé").innerHTML += "💚";
                                sprite.classList.remove('zen');
                                sprite.classList.add('zen');
                                sprite.classList.add('walk-zen');
                                oneTime = false;


                                //sprite.classList.add('zen');
                                /////////////////////////////////////
                                ////////////////////////////////////
                            }
                            if (key.supersaian === true) {
                                trans += 0;
                                translate();
                                //  document.getElementById("").innerHTML += "";
                                sprite.classList.remove('supersaian');
                                sprite.classList.add('supersaian');
                                sprite.classList.add('walk-supersaian');
                                ////shot
                            }
                            if (key.shot === true) {
                                trans += 0;
                                translate();
                                sprite.classList.remove('shot');
                                sprite.classList.add('shot');
                                sprite.classList.add('walk-shot');

                                //////////////////////////////
                            } else if (key.left === true) {
                                trans -= 7;
                                translate();
                                sprite.classList.remove('right');
                                sprite.classList.add('left');
                                sprite.classList.add('walk-left');
                            }
                        }

                        function stop(e) {
                            var keyCode = e.keyCode;
                            if (keyCode === 39) {
                                key.right = false;
                                ///////////////////////
                            }
                            if (keyCode === 32) {
                                key.supersaian = false;
                                ///////////////////////
                            }
                            if (keyCode === 38) {
                                key.claque = false;
                                ///////////////////////
                            }
                            if (keyCode === 13) {
                                key.shot = false;
                                ///////////////////////
                                ///////////////////////
                            }
                            if (keyCode === 40) {
                                key.zen = false;
                                ///////////////////////
                            } else if (keyCode === 37) {
                                key.left = false;
                            }
                            if (key.right === false) {
                                sprite.classList.remove('walk-right');
                            }
                            if (key.left === false) {
                                sprite.classList.remove('walk-left');
                                ////////////////////////////:
                            }
                            if (key.claque === false) {
                                sprite.classList.remove('claque');
                                //////////////////////////////////////:
                                ////////////////////////////:
                            }
                            if (key.supersaian === false) {
                                sprite.classList.remove('supersaian');
                            } //////////////////////////////////////:
                            if (key.zen === false) {
                                sprite.classList.remove('zen');

                                //////////////////////////////////////:
                            } //////////////////////////////////////:
                            if (key.shot === false) {
                                sprite.classList.remove('shot');

                            } //////////////////////////////////////:
                        }


                        document.addEventListener('keydown', walk, false);
                        document.addEventListener('keyup', stop, false);
                        document.addEventListener('keyclaque', claque, false);
                        document.addEventListener('keyzen', zen, false);
                        document.addEventListener('keysupersaian', supersaian, false);
                        document.addEventListener('keyshot', shot, false);
                        //teste touch pad
                        document.addEventListener("keydown", keyDownHandler, false); //a revoir (finaliser la    )
                        document.addEventListener("keyup", keyUpHandler, false);
                        document.addEventListener("mousemove", mouseMoveHandler, false);
                    })();