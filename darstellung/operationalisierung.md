---
title: "Der *Scholarly Makerspace* an der UB der HU Berlin"
subtitle: "Unser Serviceportfolio"
author:
    - Till Grallert
    - Sophie Eckenstaler
    - Samantha Tirtohusodo
institute: 
    - "Humboldt-Universität zu Berlin, Universitätsbibliothek, Grimm-Zentrum"
    - "DFG-Projekt \"Future e-Research Support in the Humanities\" (2022--25)"
homepage: https://makerspace.hypotheses.org/
date: 2022-11-10
url: 
status: published
lang: de
bibliography:
    - ../assets/bibliography/FuReSH.csl.json
    - https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
tags:
    - FuReSH
    - public relations
    - slides
---

---------

Wir bauen im Rahmen des DFG-Projekts "Future e-Research Support in the Humanities" an der Universitätsbibliothek der Humboldt-Universität zu Berlin unter Beteiligung der Lehrstühle für *Digital History* (Inst. f. Geschichte) und *Information Processing and Analytics* (Inst.f. Bibliotheks- und Informationswissenschaften) einen **prototypischen *Scholarly Makerspace*** zur Förderung **digitaler** und **computationaler Werkzeugkompetenz** (*tool literacy*) in den Geistes- und Kulturwissenschaften auf (2022--25).

::: columns-3
:::: column

![Sophie Eckenstaler](https://furesh.github.io/slides/assets/images/photos/portrait_se-circle.png)

::::
:::: column

![Till Grallert, PhD](https://furesh.github.io/slides/assets/images/photos/portrait_tg-circle.png)

::::
:::: column

![Samantha Tirtohusodo](https://furesh.github.io/slides/assets/images/photos/portrait_st-circle.png)

::::
:::

::: notes

- Sophie
    + Museologie, Medieninformatik sowie Digital History (MA)
    + Doktorandin und Wimi am Lehrstuhl Digital History
    + Schwerpunkt auf Research Software Engineering
- Till
    + Geschichte (PhD, MA)
    + Islamwissenschaft, Judaistik und VWL
    + mehr als 10 Jahre Erfahrungen in den DH
        * Global DH, critical DH: unter den Bedingungen des Globalen Südens
        * multilingual DH: vor allem Arabisch und Osmanisch
        * Digitale Editorik, NER
        * Netzwerkanalyse, Stilometrie
        * Data viz
- Sam
    + Bibliotheks- und Informationsmanagement
    + Information Science
    + Außerdem am FID Buch-, Bibliothek-, und Informationswissenschaft angestellt
    + Schwerpunkt
        * User Experience

:::


# Wie arbeiten wir? {data-background-image="https://furesh.github.io/slides/assets/images/blackbox/black-box_question-mark-people-c_blue.png" data-background-size="90%"}
## Die Blackbox

>The term black box [...] is a device or system that, for convenience, is described solely in terms of its inputs and outputs. One need not understand anything about what goes on inside such black boxes. One simply brackets them as instruments that perform certain valuable functions. [@Winner+1993, 365]

![](https://furesh.github.io/slides/assets/images/operationalisierung/blackbox_io-2.jpg)


::: notes

+ Schutz von Betriebsgeheimnissen
+ Nutzerfreundlichkeit

:::

## Was haben wir um sie zu öffnen?

![](https://furesh.github.io/slides/assets/images/operationalisierung/research-process_resources.jpg)

## Minimal computing

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
- *vorhanden* reicht im Sinne Heideggers nicht, Dinge müssen *zuhanden* sein

:::

## Was haben wir?

![](https://furesh.github.io/slides/assets/images/operationalisierung/process_what-do-we-have.jpg)

::: notes

- Beispielhafter Prozess für den Einsatz von Software

:::

# Operationalisierung {data-background-image="https://furesh.github.io/slides/assets/images/blackbox/blackbox_makerspace-inside.png" data-background-size="90%"}

## Beispiel: Werzeugliste

>Wir bauen einen *Scholarly Makerspace* auf und wollen eine **Liste von Werkzeugen** kuratieren, die auf der **Häufigkeit** ihrer **Benutzung in der Forschung** beruht (Unsere eigene User Story).

::: columns
:::: column


|         term        | freq | freq.rel |
| ------------------- | ---- | -------- |
| R                   |  259 |        1 |
| TEI                 |  155 |      0.6 |
| internet            |  134 |     0.52 |
| NLP                 |  118 |     0.46 |
| XML                 |  117 |     0.45 |
| GitHub              |   98 |     0.38 |
| API                 |   88 |     0.34 |
| OA                  |   77 |      0.3 |
| ML                  |   76 |     0.29 |
| GIS                 |   70 |     0.27 |
| topic modeling      |   67 |     0.26 |
| LOD                 |   66 |     0.25 |
| Python              |   66 |     0.25 |
| OCR                 |   64 |     0.25 |
| network analysis    |   62 |     0.24 |

: Absolute und relative Häufigkeiten von "Werkzeugen" in ADHO Konferenz-Abstracts, 2014--18 {#tbl:freq-adho}

<!--
| distant reading     |   50 |     0.19 |
| RDF                 |   50 |     0.19 |
| NER                 |   48 |     0.19 |
| text mining         |   38 |     0.15 |
| LDA                 |   37 |     0.14 |
-->

::::
:::: column

![Wordcloud der relativen Häufigkeiten von "Werkzeugen" in ADHO Konferenz-Abstracts, 2014--18](https://furesh.github.io/slides/assets/images/wordcloud/wordcloud-rel-100_tools-in-1036-dh-conferences-2014-2018-w_100.svg){#fig:wordcloud-adho-2}

::::
:::

## Forschungsprozess

![](https://furesh.github.io/slides/assets/images/operationalisierung/research-process_generic.jpg)

[Diese Prozesse sind alle von rechts nach links zu lesen. Die Forschungsfrage bestimmt Methode und benötigte Datengrundlage]

::: notes

- **WICHTIG**: von rechts nach links lesen
    1. was brauche ich?
    2. was benötige ich dafür?
    3. was habe ich?

:::

## Wir groß sind die Blackboxes?
### Unsere Erwartungen und Wünsche

![](https://furesh.github.io/slides/assets/images/operationalisierung/datafication-vs-analysis_expected.jpg)

::: notes

-  dieser Abschnitt dient der ersten Entzauberung
-  Aufwand für Datenerfassung

:::

## Wir groß sind die Blackboxes?
### Die (bittere) Realität

![](https://furesh.github.io/slides/assets/images/operationalisierung/datafication-vs-analysis_real.jpg)


## Datenerfassung: konzeptionell
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/corpus-building_conceptual.jpg)

## Datenerfassung: Werkzeugliste
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/corpus-building_concrete.jpg)


## Datenerfassung: Web scraping
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/web-scraping_technical_set-cards.jpg)

# Schluß / Danke!
## Weitere Informationen

- [Was ist ein protoypischer *Scholarly Makerspace*?](scholarly-makerspace.html)
- [Unser Serviceportfolio](service-profil.html)
- [Wie sieht das Tüfteln aus?](operationalisierung.html)

## Literatur {#refs}