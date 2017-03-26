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
    }, 2000, function() {});
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
            //TODO change trailer file
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
            // Straatbeeld dat donker wordt. De lantaarns en lichtjes in de huisjes gaan aan.
            // VDW komt op het podium (dit verschijnt dus niet op het doek) en
            // laat de lantaarnpalen één voor één uit gaan.
            // Wat later vliegt Hagrid over de huisjes en laat baby Harry uit de lucht vallen (zwarte silhouet).
            //TODO photshop verions of it
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
            //TODO find pic
            invisible()
            setContent("<center><img src=/img/livingroom3.jpg alt='woonkamer_hilok' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 9:
            // fade to black
            fadeOut()
            break;

        case 10:
            // HAGRID ZIJN LIEDJE
            // Wolken die voorbij gaan.
            // Beeld van de Wegisweg
            invisible()
            setContent(
                "<video autoplay id=''>" +
                "<source src='/video/.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('TRAM').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 11:
            // fade to black
            fadeOut()
            break;

        case 12:
            // ACHTERGROND OP HET PERRON
            // Gewoon een tramperron van Gent Sint Pieters.
            // mss toch doen verschuiven? controle over snelheid? Geen muur gwn projectie?
            // zijn gescheiden worden door een muur waar Harry, Ron en Hermelien doorlopen
            //TODO cut and paste 2 pics?
            invisible()
            setContent("<center><img src=/img/STATION.JPG alt='perron' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 13:
            // fade to black
            fadeOut()
            break;

        case 14:
            // FILMPJE HARRY, RON EN HERMELIEN PAKKEN DE TRAM NAAR ZWIJNAARDE
            // Does what it says on the tin. Gaat opgenomen worden op de filmdag
            invisible()
            setContent(
                "<video autoplay id='TRAM'>" +
                "<source src='/video/TRAM.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('TRAM').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 15:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 16:
            // fade to black
            fadeOut()
            break;

        case 17:
            // WAT HAGRID IN DE SPIEGEL ZIET
            // Reclame Macbook youtube
            //TODO cut, put in mirror
            invisible()
            setContent(
                "<video autoplay id='MACBOOK'>" +
                "<source src='/video/MACBOOK.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('MACBOOK').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 19:
            // WAT VDW IN DE SPIEGEL ZIET
            // Filmpje been met netkousen (wordt opgenomen op de filmdag)
            //TODO get video, put in mirror
            invisible()
            setContent(
                "<video autoplay id='SPIEGELVDW'>" +
                "<source src='/video/SPIEGELVDW.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('SPIEGELVDW').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 18:
            // WAT HENNIE IN DE SPIEGEL ZIET
            // Wir war van vanalles (zie script)
            //TODO everything ???
            // liedje dingen waar ik zo van hou

            // BLACKOUT


        case 20:
            // ACHTERGROND SORTEERSCENE
            // Grote eetzaal
            invisible()
            setContent("<center><img src=/img/hogwarts2.jpg alt='grote_eetzaal' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 21:
            // fade to black
            fadeOut()
            break;

        case 22:
            // ACHTERGROND LEYS ZIJN LES
            // Natuurkundig lokaal met blackbord
            //TODO find pic
            invisible()
            setContent("<center><img src=/img/lokaal_natuurkunde.png alt='lokaal_natuurkunde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 23:
            // fade to black
            fadeOut()
            break;

        case 24:
            // ACHTERGROND DHOEDT ZIJN LES
            // Computerzaal met blackbord
            invisible()
            setContent("<center><img src=/img/PC_B.JPG alt='PCB' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 25:
            // fade to black
            fadeOut()
            break;

        case 26:
            // ACHTERGROND HENNIE HAAR LES
            // 3 draken (WOBA, ANA en MELA)
            //GOT MUZIEK
            invisible()
            setContent("<center><img src=/img/AUD_A2.JPG alt='mela' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

            //TODO switch between dragons and classroom, GoT clip?
            //terug naar de les

        case 27:
            // fade to black
            fadeOut()
            break;

        case 28:
            // ACHTERGROND CURSUSVERKOOP
            // Ergens een gang in Zwijnaarde
            //TODO find pic
            invisible()
            setContent("<center><img src=/img/hogwarts1.jpg alt='gang_zwijnaarde1' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 29:
            // fade to black
            fadeOut()
            break;

        case 30:
            // FILMPJE TERUG IN DE TIJD
            // Eventueel filmpje film overpakken van Harry Potter Chamber of secrets + draaikolk
            //TODO filmpje krijgen
            invisible()
            setContent(
                "<video autoplay id='TERUGINDETIJD1'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('TERUGINDETIJD1').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

            //
            // PAUZE
            // zelfde vortex -> in het VERLEDEN
            // verder nog eens de vortex om terug naar het heden te gaan naar de transformatie scene

        case 31:
            invisible()
            setContent("<center><img src=/img/VTK.png alt='VTK_schild' style='height: 100vh;'></center>")
            fadeIn()
            break;

        case 32:
            // fade to black
            fadeOut()
            break;

        case 33:
            // FILMPJE TERUG IN DE TIJD
            // Eventueel filmpje film overpakken van Harry Potter Chamber of secrets + draaikolk
            //TODO filmpje krijgen
            invisible()
            setContent(
                "<video autoplay id='TERUGINDETIJD2'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('TERUGINDETIJD2').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 34:
            // ACHTERGROND TOVERPOORTSCENE
            // Deltaaaa
            //TODO aansluiten op vorig filmpje?
            invisible()
            setContent(
                "<video autoplay loop muted id='DELTA_PAARS'>" +
                "<source src='/video/DELTA_PAARS.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()
            break;

        case 35:
            // fade to black
            fadeOut()
            break;

        case 36:
            // BOS SCENE
            // Creepy donker bos met een vuurtje waarrond de acteurs kunnen zitten
            //TODO vuur animeren
            invisible()
            setContent("<center><img src=/img/forrest.jpg alt='kampvuur' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

            //TODO VUUR

        case 37:
            // fade to black
            fadeOut()
            break;

        case 38:
            // ACHTERGROND LIEFDESSCENE
            // gras aerial shot
            invisible()
            setContent("<center><img src=/img/grass2.jpg alt='gras' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 39:
            // fade to black
            fadeOut()
            break;

        case 40:
            // ACHTERGROND LAPLACE TRANSFORMATIE COISE
            // Lokaal in Plateau
            //TODO find pic
            invisible()
            setContent("<center><img src=/img/AUD_J.JPG alt='lokaal_coise' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 41:
            // fade to black
            fadeOut()
            break;

        case 42:
            // LAPLACE TRANSFORMATIE COISE
            // Coise rukt hart uit lichaam //schaduw en steekt het in haar dagboek.
            // Als ze dan het dagboek terug open doet staat er een afbeelding van het hart.
            //TODO foto van het dagboek?

        case 43:
            // ACHTERGROND DOOD VAN LILLY
            // Woonkamer Lilly en Leys. Nadat Coisemort Harry heeft proberen vermoorden moet elk meubelstuk kapot zijn buiten de spiegel.
            // We dachten hiervoor echte meubelstukken op het podium te zetten dus zou de achtergrond vooral wat schilderijen of een vensterbank met bloemetjes moeten zijn.
            //TODO photoshop before and after version
            invisible()
            setContent("<center><img src=/img/livingroom_empty.jpg alt='woonkamer_lenl1' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 44:
            // fade to black
            fadeOut()
            break;

        case 45:
            // ACHTERGROND DOOD VAN LILLY
            invisible()
            setContent("<center><img src=/img/livingroom_empty.jpg alt='woonkamer_lenl2' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

            // VORTEX

        case 46:
            // fade to black
            fadeOut()
            break;

        case 47:
            // ACHTERGROND EEN SPIEGELBEELD UIT HET VERLEDEN
            // Gang in Zwijnaarde
            //TODO find pic
            invisible()
            setContent("<center><img src=/img/hogwarts1.jpg alt='gang_zwijnaarde2' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 48:
            // fade to black
            fadeOut()
            break;

            // coise komt uit de spiegel and stuff

            // Liedje: I wanna be be evil

            // derp

            // help help help help

            // srly help

            //

        case 49:
            // ACHTERGROND VECHTSCENE
            // Dezelfde achtergrond als bij de leraarskamer.
            invisible()
            setContent("<center><img src=/img/LERAAR.jpg alt='LERAAR' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 50:
            // fade to black
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
