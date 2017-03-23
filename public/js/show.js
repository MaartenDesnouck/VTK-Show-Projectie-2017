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
            //TODO find pic and photshop verions of it
            invisible()
            setContent(
                "<div>" +
                "<img src=/img/VTK.png alt='straat004' id='straat003' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/VTK.png alt='straat003' id='straat003' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/put.jpg alt='straat002' id='straat002' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
                "<img src=/img/VTK.png alt='straat001' id='straat001' style='position: absolute; margin:auto; width: 100vw; height: 100vh;'>" +
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
            setContent("<center><img src=/img/put.jpg alt='woonkamer_hilok' style='width: 100vw; height: 100vh;'></center>")
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
            //TODO find pic
            //TODO animate this shit of video?
            // Animate long pic moving from left ot right
            setContent("<center><img src=/img/wegisweg.png alt='wegisweg' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 8:
            // fade to black
            fadeOut()
            break;

        case 9:
            // ACHTERGROND OP HET PERRON
            // Gewoon een tramperron van Gent Sint Pieters.
            // mss toch doen verschuiven? controle over snelheid? Geen muur gwn projectie?
            // zijn gescheiden worden door een muur waar Harry, Ron en Hermelien doorlopen
            //TODO take pic
            setContent("<center><img src=/img/perron.png alt='perron' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 9:
            // fade to black
            fadeOut()
            break;

        case 10:
            // FILMPJE HARRY, RON EN HERMELIEN PAKKEN DE TRAM NAAR ZWIJNAARDE
            // Does what it says on the tin. Gaat opgenomen worden op de filmdag
            //TODO get video
            invisible()
            setContent(
                "<video autoplay id='TRAM'>" +
                "<source src='/video/tram.mp4' type='video/mp4'>" +
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
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            //TODO find pic
            setContent("<center><img src=/img/leraarskamer.jpg alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 12:
            // fade to black
            fadeOut()
            break;

        case 13:
            // WAT HAGRID IN DE SPIEGEL ZIET
            // Reclame Macbook youtube
            //TODO download and cut, put in mirror?
            setContent(
                "<video autoplay id='MACBOOK'>" +
                "<source src='/video/macbook_reclame.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('MACBOOK').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // WAT HENNIE IN DE SPIEGEL ZIET
            // Wir war van vanalles (zie script)
            //TODO everything

        case 10:
            // WAT VDW IN DE SPIEGEL ZIET
            // Filmpje been met netkousen (wordt opgenomen op de filmdag)
            //TODO set video
            setContent(
                "<video autoplay id='SPIEGELVDW'>" +
                "<source src='/video/spiegel_vdw.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('SPIEGELVDW').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // ACHTERGROND SORTEERSCENE
            // Grote eetzaal
            //TODO find pic
            setContent("<center><img src=/img/grote_eetzaal.png alt='grote_eetzaal' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 6:
            // fade to black
            fadeOut()
            break;

        case 10:
            // ACHTERGROND LEYS ZIJN LES
            // Natuurkundig lokaal met blackbord
            //TODO find pic
            setContent("<center><img src=/img/lokaal_natuurkunde.png alt='lokaal_natuurkunde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 6:
            // fade to black
            fadeOut()
            break;

        case 10:
            // ACHTERGROND DHOEDT ZIJN LES
            // Computerzaal met blackbord
            //TODO find pic
            setContent("<center><img src=/img/lokaal_dhoedt.png alt='lokaal_dhoedt' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 6:
            // fade to black
            fadeOut()
            break;

        case 10:
            // ACHTERGROND HENNIE HAAR LES
            // 3 draken (WOBA, ANA en MELA)
            //TODO find pic
            setContent("<center><img src=/img/mela.png alt='mela' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 6:
            // fade to black
            fadeOut()
            break;

        case 10:
            // ACHTERGROND CURSUSVERKOOP
            // Ergens een gang in Zwijnaarde
            //TODO find pic
            setContent("<center><img src=/img/gang_zwijnaarde.png alt='gang_zwijnaarde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 6:
            // fade to black
            fadeOut()
            break;

        case 10:
            // FILMPJE TERUG IN DE TIJD
            // Eventueel filmpje film overpakken van Harry Potter Chamber of secrets + draaikolk
            //TODO filmpje krijgen
            setContent(
                "<video autoplay id='TERUGINDETIJD'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('TERUGINDETIJD').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // ACHTERGROND TOVERPOORTSCENE
            // Deltaaaa  (eventueel hergebruik film vorig jaar).
            setContent(
                "<video autoplay id='TOVERPOORTSCENE'>" +
                "<source src='/video/delta_geel.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('TOVERPOORTSCENE').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // ACHTERGROND BOS SCENE
            // Creepy donker bos met een vuurtje waarrond de acteurs kunnen zitten
            //TODO foto vinden
            //TODO vuur animeren
            setContent("<center><img src=/img/kampvuur.png alt='kampvuur' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND LAPLACE TRANSFORMATIE COISE
            // Lokaal in Plateau
            //TODO find pic
            setContent("<center><img src=/img/lokaal_coise.png alt='lokaal_coise' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // LAPLACE TRANSFORMATIE COISE
            // Coise rukt hart uit lichaam //schaduw en steekt het in haar dagboek.
            // Als ze dan het dagboek terug open doet staat er een afbeelding van het hart.
            //TODO foto van het dagboek?

        case 10:
            // ACHTERGROND DOOD VAN LILLY
            // Woonkamer Lilly en Leys. Nadat Coisemort Harry heeft proberen vermoorden moet elk meubelstuk kapot zijn buiten de spiegel.
            // We dachten hiervoor echte meubelstukken op het podium te zetten dus zou de achtergrond vooral wat schilderijen of een vensterbank met bloemetjes moeten zijn.
            //TODO meubels
            //TODO find pic maybe 2 pics?
            setContent("<center><img src=/img/woonkamer_lenl.png alt='woonkamer_lenl' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND EEN SPIEGELBEELD UIT HET VERLEDEN
            // Gang in Zwijnaarde
            //TODO find pic
            setContent("<center><img src=/img/gang_zwijnaarde.png alt='gang_zwijnaarde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND VECHTSCENE
            // Dezelfde achtergrond als bij de leraarskamer.
            //TODO enter pic
            setContent("<center><img src=/img/leraarskamer.png alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
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
