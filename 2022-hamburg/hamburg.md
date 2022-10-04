---
title: "Lasst uns die Blackbox öffnen!"
subtitle: "Aufbau eines prototypischen Scholarly Makerspace"
author:
    - Till Grallert
    - Sophie Eckenstaler
institute: Future e-Research Support in the Humanities, Humboldt-Universität zu Berlin
date: 2022-09-20
status: draft
lang: de
bibliography: https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
reference-section-title: "Literatur"
suppress-bibliography: true
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
url: https://furesh.github.io/slides/2022-hamburg
tags:
    - FuReSH
    - public relations
    - slides
---

## Was?

DFG-Projekt zur Förderung von *digitaler* und *computationaler* **Werkzeugkompetenz** (*tool literacy*) in den Geistes- und Kulturwissenschaften unter Beteiligung von Universitätsbibliothek und den Lehrstühlen für Digital History (Inst. f. Geschichte) und Information Processing and Analytics (Inst.f. Bibliotheks- und Informationswissenschaften) der Humboldt-Universität zu Berlin (2022--25).

# Raison d'etre
## Postdigitaler Moment

>It is our position that the “digital” cannot be understood as a separate domain of culture. If we actually examine the digital [...] we see that today digital information processing is present in every aspect of our lives [@CPCAbout].

- Alles ist bereits immer durch Computer re-medialisiert 
- Die Unterscheidung zwischen *digital* und *analog* bzw. hergebrachten Ansätzen ist bedeutungslos geworden [@Berry+2017]

::: notes

Das gilt für Forschungsgegenstände, Quellen, und Werkzeuge

:::

## Kennen Sie die?

![](https://furesh.github.io/slides/assets/images/wordcloud/wordcloud-rel-100_tools-in-1036-dh-conferences-2014-2018-w_100.svg)

## Die Geistes- und Kulturwissenschaften haben ein Problem

::: columns
:::: column
![](https://furesh.github.io/slides/assets/images/wordcloud/wordcloud-rel-100_tools-in-1036-dh-conferences-2014-2018-w_100.svg)
::::
:::: column

- Es herrscht in der Breite ein Mangel an 
    + **Theorie**: Verständnis des epistemischen Wandels
    + **Methode**: Beherrschung der notwendigen Werkzeuge
    + positivem **Wissen**: Überblick über die Möglichkeiten
- *"Digital" Humanities* als Indikator

::::
:::


## Aufgabe 
### Von *digital consumers* zu *digital citizens*

::: columns
:::: column

![](https://furesh.github.io/slides/assets/images/blackbox/blackbox_makerspace-inside.png)

::::
:::: column


Wir müssen 

- den epistemischen Wandel ergreifen
- Blackboxes öffnen
- Wissensdomäne massiv ausweiten 

::::
:::
::: notes

- *digital citizenry* ist von [@Rankin2018PeoplesHistory, 11] geprägt
- kann **nur kollaborativ** adäquat bewältigt werden. 
+ Tool literacy ist extrem aufwändig

:::

# Ein prototypischer Scholarly Makerspace!?
## Makerspace

>Der Grundgedanke von Makerspaces ist das Teilen von **Räumen**, **Ressourcen** und **Wissen** innerhalb einer **Gemeinschaft**, welche Einzelpersonen sonst nicht zur Verfügung stünden [@Spath2019Makerspaces, 41]


## Gegenstand

- digitale und computationelle Aspekte zeitgenössischer Geistes- und Kulturwissenschaften
- durch Forschungsfragen getrieben
- die Auswirkungen auf den Erkenntnisprozess untersuchend
- die gesellschaftlichen Auswirkungen untersuchend

::: notes

- durch Forschungsfragen getrieben:
    + Wie lassen sich genuin digitale, kulturelle Artefakte für die Zeitgeschichte des 21. Jahrhunderts einsetzen
    + Wie lassen sich (sehr) große Corpora mit *distant reading* statistisch valide erschließen?
    + Wie lassen sich Soziale Medien für die Untersuchung gesellschaftlichen Wandels in repressiven Systemen nutzen?
- die Auswirkungen auf den Erkenntnisprozess untersuchend:
    + Welche Auswirkungen haben OCR Algorithmen und Normalisierung auf die Qualität meines Korpus?
    + Was ist die Auswirkung von abstrahierenden Operationalisierungen für die quantitative Auswertung?
- die gesellschaftlichen Auswirkungen untersuchend?
    + Wie hoch ist der Verbrauch natürlicher Ressourcen für das Training einer KI auf die Klassifizierung von Abbildungen in mittelalterlichen Handschriften?
    + Was ist mit dem Einsatz von Sklaverei-ähnlichen Zuständen für die Herstellung und Erhalt der notwendigen technischen Infrastrukturen?
    + Welche Folge hat eine auf Beiträge in den Sozialmedien trainierte KI für die Hausratversicherungen in sozialen Brennpunkten?

:::

## Gegenstand

Die computationelle Forschung in den Geistes- und Kulturwissenschaften umfasst drei Komponenten [@Drucker2021DHCoursebook]

1. Erstellung, Aufbereitung **digitaler Materialien**
2. **computationelle Be- / Verarbeitung** dieser Materialien
3. **Präsentation** der Ergebnisse, der Prozesse und der Materialien

## Ziele

Stärkung der *tool literacy* (Werkzeugkompetenz) für:

+ **Teilhabe** an der Digitalität durch computationelle Methoden,
+ kritische **Reflexion** über ein neues epistemisches Paradigma,
+ Genese **neuer Erkenntnisse** {--für die Geistes- und Kulturwissenschaften--}

## Ansatz: Minimal computing

>Das Haus ist gebaut aus den Steinen, die vorhanden waren [@Brecht1967SchlechteZeiten].

Im Sinne des *minimal computing* ist das Spannungsfeld aus "was brauchen wir?" und "was haben wir?" handlungsleitend. [@Gil+2016]

- Kontextabhängig
- Hilfe zur Selbsthilfe
- Fokus auf **methodische Zugänge** mit beispielhaften Implementation

::: notes

- die minimale Lösung ist unter den Bedingungen der Wissenschaft, die einzig machbare
- muss im Einklang mit guter Wissenschaftlicher Praxis stehen
- Nutzer_innen sollen ermächtigt werden
- Lösungen müssen nach dem Verlassen des Makerspaces funktional bleiben

:::

## Ansatz: Making

Werkzeuge und Methoden sind mit Machtverhältnissen verwoben

>Do artefacts have politics? [@Winner+1980]

>Do politics have artefacts? [@DunbarHester2014LowPower]


- **Making** als Experimentieren, Tüfteln, Ausprobieren, Werkeln als Selbstermächtigung mit dem Ziel der (Wieder)Aneignung der Produktionsmittel
- **Maker turn**: Kreativität von Design, Herstellung und Erfahrung von (digitalen) Objekten als From von Wissenschaft

::: notes

- Geschichte
    + 1970er Kalifornien: kooperative Werkstätten
    + Recht auf Reparatur
    + DIY: do it yourself culture
- bezieht sich auf [@Wythoff2022MinimalComputing], der die beiden Fragen verknüpft hat
    + Do artefacts have politics? [@Winner+1980]
    + Do politics have artefacts? [@DunbarHester2014LowPower]
- Kritik an Maker culture als omnipotenter maskuliner Raum:
    - >knowledge of circuitry is often conflated with (superheroic) command over people, situations, and things. In present-day “maker” cultures, consider the ubiquity of remarks such as “getting under the hood” or “knowing the nuts and bolts,” which tend to fuse logic with mastery, control with masculinity, engineering with rationality, and programming with revealing. [@Sayers2017Introduction, 3]

:::


## Prototyp

::: columns
:::: narrow

![](https://furesh.github.io/slides/assets/images/operationalisierung/toolbox_icons.jpg)

::::
:::: wide


- Fokus auf Übertragbarkeit und Nachnutzbarkeit
    + Nur das absolut Notwendige selber machen
    + Nutzung bestehender offener Infrastrukturen
    + Modulares System
    + Dokumentation, Dokumentation, Dokumentation
    + Open Data und Open Science von Anfang an
- Begleitende Studien
    + Forschungs- und Projektseminare

::::
:::

# Operationalisierung

---------

>Der Grundgedanke von Makerspaces ist das Teilen von **Räumen**, **Ressourcen** und **Wissen** innerhalb einer **Gemeinschaft**, welche Einzelpersonen sonst nicht zur Verfügung stünden [@Spath2019Makerspaces, 41]

::: notes

- Zentrale Frage in unserer Projektphase ist, wie sich Idee des Scholarly Makerspace an einem konkreten Ort, nämlich der UB, konkret umsetzen bzw. implementieren lässt
    + hierbei ganz bei der traditionellen Maker-Culture und Maker-Bewegung, nämlich [Zitat] 

:::

## Raum

![Der Scholarly Makerspace an der UB der HU Berlin](https://furesh.github.io/slides/assets/images/photos/ub-makerspace.jpg)

::: notes

- Makerspace als Lernort
- Wichtig beim Scholarly Makerspace ist nach wie vor der physische Raum, in dem letztlich Austausch und Vernetzung der Community stattfinden können
    + Herausforderung: bzgl. Des Bibliotheksbau in Berlin (Grimm-Zentrum) die Bibliothek traditionell gedacht und geplant wurde, d.h. diese neuen Räume müssen erst geschaffen werden (nicht frei von Konflikten abläuft)
+ Anforderungen: angenehme Atmosphäre
        * Platz
        * Licht
        * Schallschutz
        * Gruppenarbeitsplätze
        * "Werkbänke"

:::

## Ressourcen

::: columns
:::: column

### Werkzeuge

- Metaphorische physische Werkzeuge, Werkzeugkisten und -regale
- Modularisierte computationelle Werkzeuge
- Verweise auf Literatur, Tutorials, Use cases

::::
:::: column

### Infrastruktur

- Dockingstationen für Laptops
- Vorhandene Resourcen an der HU Berlin nutzbar machen
    + Zugang zu GPU-Rechner
    + Servern des CMS

::::
:::

::: notes

- 2. Hinsichtlich der Ressourcen denken wir den Makerspace zweiteilig:
    + zum einen wollen wir Infrastrukturen vor Ort zur Verfügung stellen (Hardware, mit der gearbeitet werden kann, aktuell Dockingstations, kann durchaus erweitert werden z.B. 3D-Drucker, wenn Bedarf da ist), aber auch vorhandene Infrastrukturangebote an der HU nutzbar machen (Zugang zu GPU-Rechenkapazitäten, Server des CMS, etc.)
    + zum anderen aggregieren wir bei uns digitale Werkzeuge, welche im geistewissenschaftlichen Forschungsprozess zum Einsatz kommen
    + wobei wir Werkzeuge metaphorisch als physisch denken und diese entsprechend nach Werkzeugkisten  und -regale systematisieren
    + daneben gibt es Werkzeuganleitungen, die aus Literatur, Tutorials und Best Practices bestehen

:::

## Metaphern ernst nehmen
### Werkzeuge

![](https://furesh.github.io/slides/assets/images/operationalisierung/blackbox_contents.jpg)

- **Werkzeug**: Methode, Software, Hardware, Sprache, Format, etc.
- Ausgangspunkte: 
    + Werkzeuge sind zunächst eine **Blackbox**
    + können als **Werkzeugkiste** wieder Werkzeuge enthalten
- Benötigen 
    + **Werkstoffe** als **Input** und 
    + **Knowhow** für den Gebrauch
- Generieren durch **Verarbeitung** / **Berechnung** einen **Output**

::: notes

- da Defintion digitales Werkzeug/ Tool nicht eindeutig ist und Abgrenzungen schwierig sind, halten wir den Begriff generisch und offen
- demzufolge sind alle digitalen Objekte, die im Forschungsprozess verwendet werden und demnach der Erkenntnisgenerierung dienen,  Werkzeuge
- diese wiederum lassen sich klassifizieren
- Bei der Vermittlung von tool literacy ist der Ausgangpunkt, das alle Werkzeuge zunächst Blackboxes sind
- insbesondere der Schritt der Verarbeitung bzw. des Rechnens bleibt für viele unsichtbar

:::

## Demo "Blackbox"

<!-- hier Blackbox code snippet einfügen-->

::: columns-3
:::: column

### Input

<textarea class="form-control to_clear" type="text" placeholder="Geben sie einen Text ein" id="bb_example"></textarea>
<!-- <label for="bb_example">Your text</label> -->

::::
:::: column

### Blackbox

<button type="button" class="btn btn-warning" id="bb_button_count" onclick="this.setAttribute('disabled', ''); document.getElementById('bb_button_text').removeAttribute('disabled', '');">Rechne</button>
<button disabled type="button" class="btn btn-warning" id="bb_button_text" onclick="document.getElementById('bb_result_text').removeAttribute('hidden'); document.getElementById('bb_button_clear').removeAttribute('disabled'); this.setAttribute('disabled', '');">Zeige den Inhalt</button>
<button disabled type="button" class="btn btn-warning" id="bb_button_clear" onclick="document.getElementById('bb_result_text').setAttribute('hidden', ''); document.getElementById('bb_button_count').removeAttribute('disabled'); this.setAttribute('disabled', '');">Leeren</button>

<p hidden class="to_clear" id="bb_result_text"></p>

::::
:::: column

### Output

<p id="bb_result_count" class="to_clear"></p>
<!-- <p id="bb_result_text" hidden class="to_clear"></p> -->

::::
:::

<!-- the script powering the blackbox -->
<script>

    document.getElementById("bb_button_count").addEventListener("click", function() { 
        
        let chars = document.getElementById("bb_example").value;  

        let trimmedChars = chars.trim().replace(/ /g,'')
        
        let count = 0;
        let output_text = [];

        for (let index = 0; index < trimmedChars.length; index++) {
            const element = trimmedChars[index];
            let asc = element.charCodeAt(0);
            if(asc < 128) {
                output_text.push(element);
                count ++;
            }
        }

        let result_text = output_text.join("");
        let result_count = count;
        
        document.getElementById("bb_result_count").innerHTML = result_count;
        document.getElementById("bb_result_text").innerHTML = result_text;

    });

    document.getElementById("bb_button_clear").addEventListener("click", function() { 
        
        let text = document.getElementsByClassName('to_clear');

        for (let index = 0; index < text.length; index++) {
            const element = text[index];
            if (document.getElementsByTagName("textarea")) {
                element.value = '';
            }
            if (document.getElementsByTagName("textarea")) {
                element.innerHTML = '';
            }
        } 
    });
</script>

::: notes

- kleines nicht repräsentatives Demo-Beispiel mitgebracht, um Blackbox zu veranschaulichen
- erwartet als Input Plain Text
- Was macht die Blackbox: sie zählt Zeichen des eingebenen Texts und gibt die gezählten Zeichen zurück
- Beispiel mit King: Best Case > erwartbares Ergebnis (unproblematisch, auch wenn man nicht genau weiß, was im Hintergrund genau passiert)
- Beispiel mit König: Worst Case > unerwartetes Ergebnis (problematisch)
- hier kommt der Makerspace in Spiel: Maschinenraum öffen und hineinschauen, was da eigentlich passiert
- Vermutung liegt nahe, dass die Maschine hier einen anderen Zeichensatz oder Zeichkodierung verwendet als meine und daher das Ergebnis verfälscht wird 

:::

## Wissen

- Personal schafft, bereitet auf und vermittelt Wissen über Werkzeuge
- gemeinsames Experimentieren

::: notes

- wichtig bei Bereitstellung für uns, diese nicht hierarchisch zu denken
    + wir das Personal sind nicht die Experten, die frontal erklären

:::

## Gemeinschaft

- gemeinsames, offenes Forschen
- Vermittlung zwischen Wissensdomainen

::: notes

- uns geht es um die Gemeinschaft
- Ziel ist ...

:::

# Wie sieht das konkret aus
## Was bauen wir?
### Werkzeugregal-Architektur

::: columns
:::: column

![](https://furesh.github.io/slides/assets/images/operationalisierung/toolbox_architecture.jpg)

::::
:::: column

- Offen und Modular
- Wissen(smanagement)
- Gemeinschaft(lich)

::::
:::

::: notes

- Für Vortrag in Hamburg nur kurz zeigen und überspringen
    + Diese Infrastruktur dient dem Wissensmanagement
    + Wissen wird durch Personal und Community geschaffen, aufbereitet und vermittelt
    + Wissen wird in die Gemeinschaft / Gesellschaft zurückgegeben

:::
## Wer sind unsere Zielgruppen?

Forscher_innen aller Karrierstufen nach dem Master

::: columns-3
:::: column

### Typ 1

Keine / geringe Kenntnisse aber Interesse an DH

::::
:::: column

### Typ 2

Detaillierte Vorstellungen aber mangelnde Kenntnisse für konkrete Umsetzung

::::
:::: column

### Typ 3

Detaillierte Kenntnisse aber mangelnder Zugang zu Infrastrukturen

::::
:::

## Was bieten wir an?
### Hilfe zur Selbsthilfe

- Infrastruktur für eigenes Arbeiten
    + wöchentliche Einführungen in den Scholarly Makerspace
    + offene Materialien und Infrastrukturen für die Nachnutzung und Erweiterung
- "Sprechstunden" bzw. gemeinsames Experimentieren
    + Drop-in
    + Offene Sprechstunde
    + gezielte Beratung
- Community hours für den Austausch

## Was bieten wir nicht an?

- Wir schreiben keine Anträge
- Wir setzen keine Projekte um
- Wir bauen keine Webseiten
- Wir machen keinen dauerhaften Toolsupport


# Schluß / Danke!
## Literatur {#refs}