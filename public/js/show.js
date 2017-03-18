var sectie = 0

// NAVIGATIE
document.onkeypress = function kiesSectie() {
    switch (event.keyCode) {
        case 113:
            //console.log("Previous");
            sectie--;
            if (sectie < 0) {
                sectie = 0;
            }
            render(sectie, 'back');
            break;
        case 100:
            //console.log("Next");
            sectie++;
            render(sectie, 'forward');
            break;
        case 32:
            var video = document.getElementsByTagName('video')[0]
            video.paused ? video.play() : video.pause();
            break;
    }
}

//TINDER
function like(liked){
    var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    var animate = liked ? 'animateYes' : 'animateNo';
    $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
    });
}

//CONTENT
function fadeIn() {
    $('#content').animate({
        opacity: 1.0,
    }, 2000, function() {});
}

function fadeOut() {
    $('#content').animate({
        opacity: 0.0,
    }, 2000, function() {});
}

function visible() {
    $('#content').animate({
        opacity: 1.0,
    }, 0, function() {});
}

function invisible() {
    $('#content').animate({
        opacity: 0.0,
    }, 0, function() {});
}

function setContent(inhoud) {
    document.getElementById('content').innerHTML = inhoud
}

function clear() {
    document.getElementById('content').innerHTML = ""
}

// RENDER FUNCTIE
function render(sectie, direction) {
    console.log("SECTIE: " + sectie);
    switch (sectie) {
        case 0:
            setContent("<h1 style='color:red;'>VTK Show</h1>")
            break;
        case 1: //overgang naar zwart wachtscherm voor de show
            fadeOut()
            break;

            // ****************** INTRO ******************
            //gewoon het promofilmpje (filmpje)
            //efkes zwart
            //dansje hier ergens met een zekere achtergrond

        case 2: //overgang naar het introfilmpje en daarna terug zwart
            //invisible()
            setContent(
                "<video autoplay id='trailer'>" +
                "<source src='/video/trailer.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('trailer').addEventListener('ended', myHandler_trailer, false);
            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

            // ****************** SCENE 1 ******************
            //Stroboscoop delta (filmpke)
            //Delta casual (filmpke)(1minuut ofzo)

        case 3: //overgang naar  rode delta
            // laatste minuut van 170 op loop
            setContent(
                "<video muted autoplay loop id='00170'>" +
                "<source src='/video/00170.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;
        case 4: //overgang naar gele delta
            // ****************** SCENE 2 ******************
            // Delta discussie (filmpke)
            $('#content').animate({
                opacity: 0.0,
            }, 2000, function() {
                setContent(
                    "<video muted autoplay loop id='00173'>" +
                    "<source src='/video/00173.mp4' type='video/mp4'>" +
                    "</video>"
                )
                fadeIn()
            });
            break;
        case 5:
            // ****************** SCENE 3 ******************
            // Call met coise
            //overgang uit filmpje Delta discussie
            $('#content').animate({
                opacity: 0.0,
            }, 2000, function() {
                setContent(
                    "<video autoplay id='facetime'>" +
                    "<source src='/video/facetime.mp4' type='video/mp4'>" +
                    "</video>"
                )
                fadeIn()

                //einde filmpje detecteren en dan fadeout
                document.getElementById('facetime').addEventListener('ended', myHandler_facetime, false);
                function myHandler_facetime(e) {
                    $('#content').animate({
                        opacity: 0.0,
                    }, 2000, function() {
                        setContent(
                            "<video muted autoplay loop id='00174'>" +
                            "<source src='/video/00174.mp4' type='video/mp4'>" +
                            "</video>"
                        )
                        fadeIn()
                    });
                }
            });
        case 6: //overgang uit filmpje Delta ruzie
            fadeOut()
            break;

        case 7:
            setContent(
                "<video autoplay id='aeyels'>" +
                "<source src='/video/aeyels.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren
            document.getElementById('aeyels').addEventListener('ended', myHandler_aeyels, false);
            function myHandler_aeyels(e) {
                $('#content').animate({
                    opacity: 0.0,
                }, 2000, function() {
                    setContent(
                        "<center><img src=/img/delta.png alt='delta' style='width: 100vw; height: 100vh;'></center>"
                    )
                    fadeIn()
                });
            }
            break;

        case 8:
            // gele  delta
            $('#content').animate({
                opacity: 0.0,
            }, 2000, function() {
                setContent(
                    "<video muted autoplay loop id='00173'>" +
                    "<source src='/video/00173.mp4' type='video/mp4'>" +
                    "</video>"
                )
                fadeIn()
            });
            break;
        case 9:
            fadeOut();
            break;

            // ****************** SCENE 5 ******************
            //Dans: zakken in de grond, heel de dans lang en dan aan het einde stoppen op
            //het begin van een nieuw filmpje dat zich onder de grond afspeelt
            //Vertrekken uit delta naar plateau (filmpke van remy)

        case 10: //overgang naar in de grond zakken
            setContent("<center><img id='mario' src=/img/zakken.png alt='mario' style='width: 100vw; top: 0px;'></center>")
            fadeIn()

            function init(){
               imgObj = document.getElementById('mario');
               imgObj.style.position= 'relative';
               imgObj.style.left = '0px';
            }

            function moveUp(){
               imgObj.style.top = parseInt(imgObj.style.top) - 1 + 'px';
               setTimeout(moveUp, 30);
            }
            break;
        case 11: //zakken
            init();
            moveUp();
            break;

        case 12: //filmpje uit de kelder kruipen
            $('#content').animate({
                opacity: 0.0,
            }, 2000, function() {
                setContent(
                    "<video autoplay id='richting_plateau'>" +
                    "<source src='/video/richting_plateau.mp4' type='video/mp4'>" +
                    "</video>"
                )
                fadeIn()

                //einde filmpje detecteren en dan fadeout
                document.getElementById('richting_plateau').addEventListener('ended', myHandler_richting_plateau, false);
                function myHandler_richting_plateau(e) {
                    fadeOut()
                }
            });
            break;
            //overgang naar foto in de plateau
            //hal_plateau.jpg
        case 13:
            setContent(
                "<center><img src=/img/hal_plateau.jpg alt='hal_plateau' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 14: //overgang van foto in de plateau
            fadeOut()
            break;

            // ****************** SCENE 6 ******************
            //In de plateau (foto fullscreen)

        case 15: //overgang naar andere foto in de plateau
            //hal_auda.jpg
            setContent(
                "<center><img src=/img/hal_auda.jpg alt='hal_auda' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 16: //overgang van andere foto in de plateau
            fadeOut()
            break;

            // ****************** SCENE 7 ******************
            // Nog steeds de plateau (foto van hal)

            // ****************** SCENE 8 ******************
            // eerste foto van plateau in sepia (foto in sepia)
            // hier komt er nog een dansje
            // dan dokterspraktijk (foto in sepia)
            // dan breakup scene (foto in sepia)
            // er komt hier ergens nog een pisscene
            // en dan pauze

        case 17: //overgang naar scene 8
            //plateau_buiten.jpg
            setContent(
                "<center><img src=/img/plateau_buiten_sepia.jpg alt='plateau' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 18:
            fadeOut()
            break;
            //hier komt een dansje gwn met de foto van buiten
        case 19:
            //dokter.jpg
            setContent(
                "<center><img src=/img/couch.jpg alt='dokter' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 20:
            fadeOut()
            break;
        case 21:
            setContent(
                "<center><img src=/img/plateau_buiten_grijs.jpg alt='plateau' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 22:
            fadeOut()
            break;

            //PAUZE

            // ****************** SCENE 9 ******************
            //Split screen:
            //  links: aeyels zijn kantoor (foto of filmpje)
            //  rechts: chemielab (foto of filmpje)
        case 23:
            setContent(
                "<center><img src=/img/VTK.png alt='VTK' style='max-width: 100vw; max-height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 24:
            fadeOut()
            break;

        case 25: //overgang naar scene 9
            //TODO fixen van de fade in
            //"<p>Split screen: //SCENE_9</p>" +
            //"<p>links: aeyels zijn kantoor (foto of filmpje)</p>" +
            //"<p>rechts: chemielab (foto of filmpje)</p>"
            document.body.style.backgroundImage = "url('/img/lab1.jpg')";
            document.body.style.backgroundSize= "100vw 100vh";
            setContent(
                "<div id='flipbook' style='left: -50%'>"+
                	"<div><img src=/img/aeyels.jpg alt='aeyels' style='width: 100vw; height: 100vh;'></div>"+
                	"<div></div>"+
                "</div>"
            )
            $('#flipbook').turn({
                width: '100%',
                height: '100%',
                duration: 3500,
                gradients: false,
                turnCorners: "bl,tr",
            });
            fadeIn()
            $('#content').animate({
                opacity: 1.0,
            }, 1000, function() {});
            break;
        case 26:
            $("#flipbook").turn("next");
            break;

            // ****************** SCENE 10 *****************
            //same

            // ****************** SCENE 11 *****************
            //same

            // ****************** SCENE 12 *****************
            //same

            // ****************** SCENE 13 *****************
            //same

            // ****************** SCENE 14 *****************
            // Switch naar coise haar kant: uitrollen van de rest van haar lab over het bureau van aeyels
            // tinder met achtergrond: mss andere achtergrond
            //-> inlog scherm met login naam en wachtwoord zichtbaar
            //terug naar bureau overschakelen als achtergrond

        case 27: //lege login
            document.body.style.backgroundImage = "url('/img/lab1.jpg')";
            document.body.style.backgroundSize= "100vw 100vh";
            invisible()
            setContent(
                "<div id='phone'>"+
                    "<div id='app'>"+
                        "<div class='header' style='height: 16px'>"+
                            "<div class='top'>"+
                                "<span class='left'>"+
                          "<span class='fontawesome-circle'></span>"+
                                "<span class='fontawesome-circle'></span>"+
                                "<span class='fontawesome-circle-blank'></span>"+
                                "<span>A-team</span>"+
                                "<span class='fontawesome-signal'></span>"+
                                "</span>"+
                                "<span class='center clock'></span>"+
                                "<span class='right'>"+
                          "<span>69%</span>"+
                                "<div id='battery'></div>"+
                                "<span class='fontawesome-bolt'></span>"+
                                "</span>"+
                            "</div>"+
                        "</div>"+
                        "<div id='login'>"+
                            "<img src='/img/cas.png' style='position:relative; width:100%; height:100%;'></a>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            )

            var Phone = {
                wrap: $('#phone'),
                clock: $('.clock'),
                updateClock: function() {
                    var date = new Date();
                    var hours = date.getHours();
                    var min = date.getMinutes();
                    hours = (hours < 10 ? "0" : "") + hours;
                    min = (min < 10 ? "0" : "") + min;
                    var str = hours + ":" + min;
                    this.clock.text(str);
                }
            }
            fadeIn();
            break;
        case 28: //august
            document.getElementById('login').innerHTML = "<img src='/img/cas_august.png' style='position:relative; width:100%; height:100%;'></a>"
            break;
        case 29: //leeg passwoord
            document.getElementById('login').innerHTML = "<img src='/img/cas_august_.png' style='position:relative; width:100%; height:100%;'></a>"
            break;
        case 30: //B
            document.getElementById('login').innerHTML = "<img src='/img/cas_august_b.png' style='position:relative; width:100%; height:100%;'></a>"
            break;
        case 31: //BU
            document.getElementById('login').innerHTML = "<img src='/img/cas_august_bu.png' style='position:relative; width:100%; height:100%;'></a>"
            break;
        case 32: //BUI
            document.getElementById('login').innerHTML = "<img src='/img/cas_august_bui.png' style='position:relative; width:100%; height:100%;'></a>"
            break;
        case 33: //BUIS
            document.getElementById('login').innerHTML = "<img src='/img/cas_august_buis.png' style='position:relative; width:100%; height:100%;'></a>"
            break;

        case 34:
            setContent(
                "<div id='phone'>"+
                    "<div id='app'>"+
                        "<div class='header' style='height: 16px'>"+
                            "<div class='top'>"+
                                "<span class='left'>"+
                          "<span class='fontawesome-circle'></span>"+
                                "<span class='fontawesome-circle'></span>"+
                                "<span class='fontawesome-circle-blank'></span>"+
                                "<span>A-team</span>"+
                                "<span class='fontawesome-signal'></span>"+
                                "</span>"+
                                "<span class='center clock'></span>"+
                                "<span class='right'>"+
                          "<span>69%</span>"+
                                "<div id='battery'></div>"+
                                "<span class='fontawesome-bolt'></span>"+
                                "</span>"+
                            "</div>"+
                        "</div>"+
                        "<div id='people'></div>"+
                        "<div id='control'>"+
                            "<div class='button reverse'>"+
                                "<a href='#' class='trigger'><img src='/img/reverse.png' style='position:relative; width:70%; height:70%; top:14%' alt='reverse'></a>"+
                            "</div>"+
                            "<div class='button no'>"+
                                "<a href='#' class='trigger'><img src='/img/no.png' style='position:relative; width:70%; height:70%; top:14%' alt='no'></a>"+
                            "</div>"+
                            "<div class='button yes'>"+
                                "<a href='#' class='trigger'><img src='/img/yes.png' style='position:relative; width:70%; height:70%; top:14%' alt='yes'></a>"+
                            "</div>"+
                            "<div class='button superlike'>"+
                                "<a href='#' class='trigger'><img src='/img/superlike.png' style='position:relative; width:70%; height:70%; top:14%' alt='superlike'></a>"+
                            "</div>"+
                            "</nav>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            )

            //TINDER
            var Person = {
                wrap: $('#people'),
                people: [
                    {
                        img: "/img/tinder/tinder_mario.png"
                    }, {
                        img: "/img/tinder/tinder_cooman.png"
                    }, {
                        img: "/img/tinder/tinder_dhoedt.png"
                    }, {
                        img: "/img/tinder/tinder_dewaele.png"
                    }, {
                        img: "/img/tinder/tinder_debie.png"
                    }, {
                        img: "/img/tinder/tinder_verbeken.png"
                    }
                ],
                add: function(persoon) {
                    var random = this.people[persoon];
                    this.wrap.append("<div class='person'><img style='width: 100%; height: 100%;' alt='" + random.name + "' src='" + random.img + "' /></div>");
                }
            }

            var App = {
                yesButton: $('.button.yes .trigger'),
                noButton: $('.button.no .trigger'),
                blocked: false,
                like: function(liked) {
                    var animate = liked ? 'animateYes' : 'animateNo';
                    var self = this;
                    if (!this.blocked) {
                        this.blocked = true;
                        $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
                            $(this).remove();
                            //Person.add();
                            self.blocked = false;
                        });
                    }
                }
            };

            var Phone = {
                wrap: $('#phone'),
                clock: $('.clock'),
                updateClock: function() {
                    var date = new Date();
                    var hours = date.getHours();
                    var min = date.getMinutes();
                    hours = (hours < 10 ? "0" : "") + hours;
                    min = (min < 10 ? "0" : "") + min;
                    var str = hours + ":" + min;
                    this.clock.text(str);
                }
            }

            Phone.updateClock();
            Person.add(0);
            Person.add(1);
            Person.add(2);
            Person.add(3);
            Person.add(4);
            Person.add(5);
            fadeIn()
            break;
        case 35:
            like(false);
            break;
        case 36:
            like(true);
            break;
        case 37:
            like(true);
            break;
        case 38:
            like(false);
            break;
        case 39:
            like(false)
            break;
        case 40:
            like(true);
            break;
        case 41:
            fadeOut();
            break;
        case 42:
            setContent(
                "<center><img src=/img/black.jpg alt='black' style='width: 100vw; height: 100vh;'></center>"
            )
            $('#content').animate({
                opacity: 1.0,
            }, 1000, function() {
                setContent("");
                document.body.style.backgroundImage = "";
                invisible();
            });
            break;

            // ****************** SCENE 15 *****************
            //foto als achtergond (scene met de waterput) (foto)
        case 43:
            setContent(
                "<center><img src=/img/put.jpg alt='put' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 44:
            document.body.style.backgroundImage = "";
            $('#content').animate({
                opacity: 0.0,
            }, 2000, function() {
                setContent(
                    "<center><img src=/img/black.jpg alt='black' style='width: 100vw; height: 100vh;'></center>"
                )
            });
            break;

            // ****************** SCENE 16 *****************
            // het grote gevecht, scene met de raket (foto van hangaar (vehicle assembly building))
            // slowmation timer op het scherm, met hondersten erbij, in NASA lancering stijl
            //eventueel hier iets van een timestream met hln berichten

        case 45:
            visible()
            document.body.style.backgroundImage = "url('/img/VAB_zwart.jpg')";
            document.body.style.backgroundSize= "100vw 100vh";
            fadeOut()
            break;
        case 46:
            setContent(
                "<div class='wrapper'>"+
                  "<div class='time-part-wrapper'>"+
                    "<div class='time-part minutes tens'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                    "<div class='time-part minutes ones'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>9</span>"+
                        "<span class='digit'>8</span>"+
                        "<span class='digit'>7</span>"+
                        "<span class='digit'>6</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                  "<div class='time-part-wrapper'>"+
                    "<div class='time-part seconds tens'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                    "<div class='time-part seconds ones'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>9</span>"+
                        "<span class='digit'>8</span>"+
                        "<span class='digit'>7</span>"+
                        "<span class='digit'>6</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                  "<div class='time-part-wrapper'>"+
                    "<div class='time-part hundredths tens'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>9</span>"+
                        "<span class='digit'>8</span>"+
                        "<span class='digit'>7</span>"+
                        "<span class='digit'>6</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                    "<div class='time-part hundredths ones'>"+
                      "<div class='digit-wrapper'>"+
                        "<span class='digit'>0</span>"+
                        "<span class='digit'>9</span>"+
                        "<span class='digit'>8</span>"+
                        "<span class='digit'>7</span>"+
                        "<span class='digit'>6</span>"+
                        "<span class='digit'>5</span>"+
                        "<span class='digit'>4</span>"+
                        "<span class='digit'>3</span>"+
                        "<span class='digit'>2</span>"+
                        "<span class='digit'>1</span>"+
                        "<span class='digit'>0</span>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"
            )
            fadeIn()
            break;
        case 47:
            setContent(
                "<center><img src=/img/VAB_zwart.jpg alt='VAB' style='width: 100vw; height: 100vh;'></center>"+
                "<audio autoplay>"+
                  "<source src='/video/raket_geluid.mp4' type='audio/mp4'>"+
                "</audio>"
            )
            document.body.style.backgroundImage = "";
            fadeOut()
            break;

        case 48:
            setContent("")
            break;

            // ****************** SCENE 17 *****************
            // scene binnenin de raket (bridge van star trek) eventueel sterren langs het raam passeren
            // eventueel schuddende achtergrond (want het is een raketlancering)
        case 49:
            setContent(
                "<center><img src=/img/startrek2.jpg alt='STARTREK' style='width: 100vw; height: 100vh;'></center>"
            )
            fadeIn()
            break;
        case 50:
            fadeOut()
            break;

            // ****************** SCENE 18 *****************
            // de raket ontploft (filmpje) (challenger)
            // terug in de hangaar (foto)
            // dansje ook met gwn dezelfde foto

        case 51:
            setContent(
                "<video autoplay id='raket'>" +
                "<source src='/video/raket.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('raket').addEventListener('ended', myHandler_raket, false);
            function myHandler_raket(e) {
                $('#content').animate({
                    opacity: 0.0,
                }, 2000, function() {
                    setContent("<center><img src=/img/VAB.jpg alt='VAB' style='width: 100vw; height: 100vh;'></center>")
                    fadeIn()
                });
            }
            break;
        case 52:
            fadeOut()
            break;

            // ****************** SCENE 19 *****************
            // Aeyels zijn kantoor (gwn foto)

        case 53:
            setContent("<center><img src=/img/aeyels2.png alt='aeyels' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;


        case 54:
            fadeOut()
            break;

        case 55:
            // ****************** SCENE 20 *****************
            // Wordt vervolgd

            setContent("<div class='center'>Wordt vervolgd...</div>")
            fadeIn()
            break;

        case 56:
            fadeOut()
            break;

        case 57:
            setContent(
                "<video autoplay loop muted id='schild'>" +
                "<source src='/video/schild.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 58:
            fadeOut()
            break;
    }
}
