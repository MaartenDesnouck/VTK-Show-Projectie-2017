var sectie = 0

// NAVIGATIE
document.onkeypress = function kiesSectie() {
    switch (event.keyCode) {
        case 113:
            // S - previous
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

        case 2: //overgang naar het introfilmpje en daarna terug zwart
            //TODO change trailer file
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

        case 3:
            // ACHTERGROND GOOGLE DRIVE STRAAT
            // Straatbeeld dat donker wordt. De lantaarns en lichtjes in de huisjes gaan aan.
            // VDW komt op het podium (dit verschijnt dus niet op het doek) en
            // laat de lantaarnpalen één voor één uit gaan.
            // Wat later vliegt Hagrid over de huisjes en laat baby Harry uit de lucht vallen (zwarte silhouet).
            // Eventueel alles in vectorgrafics, te bespreken
            //TODO find pic
            //TODO animate this shit
            setContent("<center><img src=/img/straat.png alt='straat' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 4:
            // ACHTERGROND WOONKAMER HILOKKERS
            //TODO find pic
            fadeOut()
            setContent("<center><img src=/img/woonkamer_hilok.png alt='aeyels' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 5:
            // HAGRID ZIJN LIEDJE
            // Wolken die voorbij gaan.
            // Beeld van de Wegisweg
            //TODO find pic
            //TODO animate this shit of video?
            setContent("<center><img src=/img/wegisweg.png alt='wegisweg' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;
        case 6:

        case 7:
            // ACHTERGROND OP HET PERRON
            // Gewoon een tramperron van Gent Sint Pieters.
            // Linkerhelft en rechterhelft zouden twee verschillende perrons moeten
            // zijn gescheiden worden door een muur waar Harry, Ron en Hermelien doorlopen
            //TODO take pic
            setContent("<center><img src=/img/perron.png alt='perron' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 8:
            // FILMPJE HARRY, RON EN HERMELIEN PAKKEN DE TRAM NAAR ZWIJNAARDE
            // Does what it says on the tin. Gaat opgenomen worden op de filmdag
            //TODO get video
            setContent(
                "<video autoplay id='tram'>" +
                "<source src='/video/tram.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('tram').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 9:
            // ACHTERGROND LERAARSKAMER ZWIJNAARDE
            // Ergens een leuke oude zaal vinden met wat zetels
            //TODO find pic
            setContent("<center><img src=/img/leraarskamer.png alt='leraarskamer' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // WAT HAGRID IN DE SPIEGEL ZIET
            // Reclame Macbook youtube //TODO
            setContent(
                "<video autoplay id='terug_in_de_tijd'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('terug_in_de_tijd').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // WAT HENNIE IN DE SPIEGEL ZIET
            // Wir war van vanalles (zie script)
            //TODO everything

            // WAT VDW IN DE SPIEGEL ZIET
            // Filmpje been met netkousen (wordt opgenomen op de filmdag)
            //TODO set video
            setContent(
                "<video autoplay id='terug_in_de_tijd'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            // einde filmpje detecteren en dan fadeout
            document.getElementById('terug_in_de_tijd').addEventListener('ended', myHandler_trailer, false);

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

        case 10:
            // ACHTERGROND LEYS ZIJN LES
            // Natuurkundig lokaal met blackbord
            //TODO find pic
            setContent("<center><img src=/img/lokaal_natuurkunde.png alt='lokaal_natuurkunde' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND DHOEDT ZIJN LES
            // Computerzaal met blackbord
            //TODO find pic
            setContent("<center><img src=/img/lokaal_dhoedt.png alt='lokaal_dhoedt' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND HENNIE HAAR LES
            // 3 draken (WOBA, ANA en MELA)
            //TODO find pic
            setContent("<center><img src=/img/mela.png alt='mela' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND CURSUSVERKOOP
            // Ergens een gang in Zwijnaarde
            //TODO find pic
            setContent("<center><img src=/img/aeyels2.png alt='aeyels' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // FILMPJE TERUG IN DE TIJD
            // Eventueel filmpje film overpakken van Harry Potter Chamber of secrets + draaikolk
            //TODO filmpje krijgen
            setContent(
                "<video autoplay id='terug_in_de_tijd'>" +
                "<source src='/video/terug_in_de_tijd.mp4' type='video/mp4'>" +
                "</video>"
            )
            fadeIn()

            //einde filmpje detecteren en dan fadeout
            document.getElementById('terug_in_de_tijd').addEventListener('ended', myHandler_trailer, false);

            function myHandler_trailer(e) {
                fadeOut();
            }
            break;

        case 10:
            // ACHTERGROND TOVERPOORTSCENE
            // Deltaaaa  (eventueel hergebruik film vorig jaar).
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
            setContent("<center><img src=/img/aeyels2.png alt='aeyels' style='width: 100vw; height: 100vh;'></center>")
            fadeIn()
            break;

        case 10:
            // ACHTERGROND EEN SPIEGELBEELD UIT HET VERLEDEN
            // Gang in Zwijnaarde
            //TODO find pic
            setContent("<center><img src=/img/aeyels2.png alt='aeyels' style='width: 100vw; height: 100vh;'></center>")
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
