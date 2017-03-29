var sectie = 0

// NAVIGATIE
document.onkeypress = function kiesSectie() {
    switch (event.keyCode) {
        case 113:
            // Q - previous
            sectie--;
            if (sectie < 0) {
                sectie = 0;
            }
            render(sectie, 'back');
            break;
        case 100:
            // W - next
            sectie++;
            render(sectie, 'forward');
            break;
        case 32:
            // SPACE BAR - pause/resume video
            var video = document.getElementsByTagName('video')[0]
            video.paused ? video.play() : video.pause();
            break;
    }
}

// CONTENT
function fadeIn() {
    $('#content').animate({
        opacity: 1.0,
    }, 2000, function() {});
}

function fadeOut() {
    $('#content').animate({
        opacity: 0.0,
    }, 2000, function() {
        setContent()
    });
}

function fadeInPart(id) {
    $('#' + id).animate({
        opacity: 1.0,
    }, 2000, function() {});
}

function fadeOutPart(id) {
    $('#' + id).animate({
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
        case 1: //direct naar zwart wachtscherm voor de show
            setContent()
            fadeOut()
            break;

            // ****************** INTRO ******************
            // gewoon de trailer

        case 2: //overgang naar het introfilmpje en daarna terug zwart
            setContent(
                "<video autoplay id='TRAILER'>" +
                "<source src='/video/trailer.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('TRAILER').addEventListener('ended', TRAILER_end, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 3:
            // ACHTERGROND GOOGLE DRIVE STRAAT
            invisible()
            setContent(
                "<div>" +
                "<img src=/img/straat4.png alt='straat004' id='straat004' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/straat3.png alt='straat003' id='straat003' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/straat2.png alt='straat002' id='straat002' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/straat1.png alt='straat001' id='straat001' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "</div>"
            )
            fadeIn()
            break;

        case 4:
            fadeOutPart('straat001')
            break;

        case 5:
            fadeOutPart('straat002')
            break;

        case 6:
            fadeOutPart('straat003')
            break;

        case 7:
            fadeOutPart('straat004')
            break;

        case 8:
            // ACHTERGROND WOONKAMER HILOKKERS
            invisible()
            setContent("<center><img src=/img/livingroom3.jpg alt='woonkamer_hilok' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 9:
            // HAGRID ZIJN LIEDJE, EINDIGD MET ACHTERGROND OP HET PERRON

            setContent(
                "<video autoplay id='HAGRID'>" +
                "<source src='/video/HAGRID.mp4' type='video/mp4' style='width: 100vw; height: 100vh;'>" +
                "</video>"
            )

            // einde filmpje detecteren en dan fadeout
            document.getElementById('HAGRID').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;


        case 10:
            // fade to black
            fadeOut()
            break;

        case 11:
            // FILMPJE HARRY, RON EN HERMELIEN PAKKEN DE TRAM NAAR ZWIJNAARDE
            // Does what it says on the tin. Gaat opgenomen worden op de filmdag
            invisible()
            setContent(
                "<video autoplay id='TRAM'>" +
                "<source src='/video/TRAM.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 12:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 13:
            // fade to black
            fadeOut()
            break;

        case 14:
            // WAT HAGRID IN DE SPIEGEL ZIET
            // Reclame Macbook youtube
            invisible()
            setContent(
                "<video autoplay id='MACBOOK'>" +
                "<source src='/video/MACBOOK.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 15:
            // fade to black
            fadeOut()
            break;

        case 16:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 17:
            // fade to black
            fadeOut()
            break;

        case 18:
            // WAT VDW IN DE SPIEGEL ZIET
            // Filmpje been met netkousen (wordt opgenomen op de filmdag)
            invisible()
            setContent(
                "<video autoplay id='VANDEWALLE_SPIEGEL'>" +
                "<source src='/video/VANDEWALLE_SPIEGEL.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 19:
            // fade to black
            fadeOut()
            break;

        case 20:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 21:
            // fade to black
            fadeOut()
            break;

        case 22:
            // WAT HENNIE IN DE SPIEGEL ZIET
            // Wir war van vanalles (zie script)
            invisible()
            setContent(
                "<video autoplay id='HENNIE_SPIEGEL'>" +
                "<source src='/video/HENNIE_SPIEGEL.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 23:
            // ACHTERGROND SORTEERSCENE
            // Grote eetzaal
            invisible()
            setContent("<center><img src=/img/hogwarts2.jpg alt='grote_eetzaal' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 24:
            // fade to black
            fadeOut()
            break;

        case 25:
            // ACHTERGROND LEYS ZIJN LES
            // Natuurkundig lokaal met blackbord
            invisible()
            setContent("<center><img src=/img/AUD_A2.JPG alt='lokaal_natuurkunde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 26:
            // fade to black
            fadeOut()
            break;

        case 27:
            // ACHTERGROND DHOEDT ZIJN LES
            // Computerzaal met blackbord
            invisible()
            setContent("<center><img src=/img/PC_B.JPG alt='PCB' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 28:
            // fade to black
            fadeOut()
            break;

        case 29:
            // Filmpje hennie die bord afveegt
            invisible()
            setContent(
                "<video autoplay id='HENNIE_BORD'>" +
                "<source src='/video/HENNIE_BORD.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 30:
            // Hennie haar les
            invisible()
            setContent("<center><img src=/img/AUD_J.JPG alt='mela' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 31:
            // fade to black
            fadeOut()
            break;

        case 32:
            // DRIE draken van game of thrones
            invisible()
            setContent(
                "<video autoplay id='GOT_DRAKEN'>" +
                "<source src='/video/GOT_DRAKEN.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 33:
            // ACHTERGROND HENNIE HAAR LES
            invisible()
            setContent("<center><img src=/img/AUD_J.JPG alt='mela' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 34:
            // fade to black
            fadeOut()
            break;

        case 35:
            // ACHTERGROND CURSUSVERKOOP
            // Ergens een gang in Zwijnaarde
            invisible()
            setContent("<center><img src=/img/hogwarts1.jpg alt='gang_zwijnaarde1' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 36:
            // fade to black
            fadeOut()
            break;

        case 37:
            // FILMPJE TERUG IN DE TIJD
            // Eventueel filmpje film overpakken van Harry Potter Chamber of secrets + draaikolk
            invisible()
            setContent(
                "<video autoplay id='VORTEX_VOOR_PAUZE'>" +
                "<source src='/video/VORTEX_VOOR_PAUZE.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

            //*****************
            //      PAUZE
            //*****************


        case 38:
            invisible()
            setContent("<center><img src=/img/VTK.png alt='VTK_schild' style='height: 100vh;'></center>")
            fadeIn()
            break;

        case 39:
            // fade to black
            fadeOut()
            break;

            //*****************
            //   TWEEDE DEEL
            //*****************

        case 40:
            // FILMPJE TERUG IN DE TIJD
            invisible()
            setContent(
                "<video autoplay id='VORTEX_NA_PAUZE'>" +
                "<source src='/video/VORTEX_NA_PAUZE.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 41:
            // fade to black
            fadeOut()
            break;

        case 42:
            // ACHTERGROND TOVERPOORTSCENE
            // Deltaaaa
            invisible()
            setContent(
                "<video autoplay loop muted id='DELTA_PAARS'>" +
                "<source src='/video/DELTA_PAARS.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 43:
            // fade to black
            fadeOut()
            break;

        case 44:
            // BOS SCENE
            invisible()
            setContent(
                "<div>" +
                "<img src=/img/forrest.jpg alt='bos' style='position: absolute; width: 100vw; height: 100vh;'>" +
                "<img src=/img/fire2.gif alt='fire' style='position: absolute; width: 15vw; height: 60vh; bottom: -5vh; left:85vh'>" +
                "<img src=/img/forrest.jpg alt='bos' id='bos001' style='position: absolute; width: 100vw; height: 100vh;'>" +
                "</div>"
            )
            fadeIn()
            break;

        case 45:
            fadeOutPart('bos001')
            break;

        case 46:
            // fade to black
            fadeOut()
            break;

        case 47:
            // ACHTERGROND LIEFDESSCENE
            // gras aerial shot
            invisible()
            setContent("<center><img src=/img/grass2.jpg alt='gras' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 48:
            // fade to black
            fadeOut()
            break;

        case 49:
            // ACHTERGROND LAPLACE TRANSFORMATIE COISE
            // Lokaal in Plateau
            invisible()
            setContent("<center><img src=/img/hogwarts4.jpg alt='hogwarts4' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 50:
            // fade to black
            fadeOut()
            break;

        case 51:
            // LAPLACE TRANSFORMATIE COISE
            // Coise rukt hart uit lichaam //schaduw en steekt het in haar dagboek.
            // Als ze dan het dagboek terug open doet staat er een afbeelding van het hart.
            invisible()
            setContent(
                "<video autoplay id='COISE_HART'>" +
                "<source src='/video/COISE_HART.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 52:
            // fade to black
            fadeOut()
            break;

        case 53:
            // ACHTERGROND DOOD VAN LILLY
            // Woonkamer Lilly en Leys. Nadat Coisemort Harry heeft proberen vermoorden moet elk meubelstuk kapot zijn buiten de spiegel.
            // We dachten hiervoor echte meubelstukken op het podium te zetten dus zou de achtergrond vooral wat schilderijen of een vensterbank met bloemetjes moeten zijn.
            invisible()
            setContent("<center><img src=/img/livingroom_empty.jpg alt='woonkamer_lenl1' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 54:
            // fade to black
            fadeOut()
            break;

        case 55:
            // ACHTERGROND DOOD VAN LILLY
            invisible()
            setContent("<center><img src=/img/livingroom_empty2.png alt='woonkamer_lenl2' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 56:
            // fade to black
            fadeOut()
            break;

        case 57:
            // FILMPJE TERUG IN DE TIJD
            invisible()
            setContent(
                "<video autoplay id='VORTEX_NA_PAUZE'>" +
                "<source src='/video/VORTEX_NA_PAUZE.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 58:
            // fade to black
            fadeOut()
            break;

        case 59:
            // ACHTERGROND EEN SPIEGELBEELD UIT HET VERLEDEN
            // Gang in Zwijnaarde
            invisible()
            setContent("<center><img src=/img/hogwarts1.jpg alt='gang_zwijnaarde2' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 60:
            // fade to black
            fadeOut()
            break;

        case 61:
            // HARY SPIEGEL
            invisible()
            setContent(
                "<video autoplay id='HARRY_SPIEGEL'>" +
                "<source src='/video/HARRY_SPIEGEL.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 62:
            // fade to black,
            fadeOut()
            break;

        case 63:
            // SPIEGELLIED
            invisible()
            setContent(
                "<video autoplay id='SPIEGELLIED'>" +
                "<source src='/video/SPIEGELLIED.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 64:
            // fade to black,
            fadeOut()
            break;

        case 65:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE, heel lang
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 66:
            // fade to black voor dansje
            fadeOut()
            break;

        case 67:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE, heel lang
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 68:
            // fade to black
            fadeOut()
            break;

        case 69:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE, heel lang
            invisible()
            setContent("<center><img src=/img/hogwarts4.jpg alt='hogwarts4' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 70:
            // fade to black
            fadeOut()
            break;

        case 71:
            // AFTITLEING
            invisible()
            setContent(
                "<video autoplay id='AFTITELING'>" +
                "<source src='/video/AFTITELING.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 72:
            fadeOut()
            break;
    }
}
