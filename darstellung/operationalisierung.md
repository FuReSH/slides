---
title: "Der *Scholarly Makerspace* an der UB der HU Berlin stellt sich vor"
subtitle: "Wie *tüfteln* wir eigentlich?"
author:
    - Till Grallert
    - Sophie Eckenstaler
    - Samantha Tirtohusodo
institute: 
    - "Humboldt-Universität zu Berlin, Universitätsbibliothek, Grimm-Zentrum"
    - "DFG-Projekt \"Future e-Research Support in the Humanities\" (2022--25)"
homepage: https://makerspace.hypotheses.org/
# event: Eröffnung
date: 
url: https://furesh.github.io/slides/darstellung/operationalisierung.html
status: published
lang: de
bibliography:
    - ../assets/bibliography/FuReSH.csl.json
    - https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
revealjs-url: https://furesh.github.io/slides/revealjs
tags:
    - FuReSH
    - PublicRelations
    - slides
---

---------

Wir bauen im Rahmen des DFG-Projekts "Future e-Research Support in the Humanities" an der Universitätsbibliothek der Humboldt-Universität zu Berlin unter Beteiligung der Lehrstühle für *Digital History* (Inst.f. Geschichtswissenschaften) und *Information Processing and Analytics* (Inst.f. Bibliotheks- und Informationswissenschaften) einen **prototypischen *Scholarly Makerspace*** zur Förderung **digitaler** und **computationaler Werkzeugkompetenz** (*tool literacy*) in den Geistes- und Kulturwissenschaften auf (2022--25).

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


## Minimal computing

>Das Haus ist gebaut aus den Steinen, die vorhanden waren [@Brecht1967SchlechteZeiten].

Im Sinne des *minimal computing* ist das Spannungsfeld aus "was brauchen wir?" und "was haben wir?" handlungsleitend. [@Gil+2016]

- Kontextabhängig
- Hilfe zur Selbsthilfe
- Fokus auf **methodische Zugänge** mit beispielhafter Implementation

::: notes

- die minimale Lösung ist unter den Bedingungen der Wissenschaft, die einzig machbare
- muss im Einklang mit guter Wissenschaftlicher Praxis stehen
- Nutzer_innen sollen ermächtigt werden
- Lösungen müssen nach dem Verlassen des Makerspaces funktional bleiben
- *vorhanden* reicht im Sinne Heideggers nicht, Dinge müssen *zuhanden* sein

:::

## Was haben wir um sie zu öffnen?

![](https://furesh.github.io/slides/assets/images/operationalisierung/research-process_resources.jpg)

## Was ist in unserem Werkzeugkoffer?

<pre class="mermaid">
flowchart LR
    %% nodes
    software{Software}
    hardware[Hardware]
    method((Verfahren))
    theory(Theorien)
    format[Formate]
    language{{Sprachen}}
    concept(Konzepte)

    %% edges: note that the layout does not imply hierarchies
    theory -->|informiert| method
    method -->|wird umgesetzt\ndurch| software
    method & format & language & software -.->|benutzen| concept
    software -->|benötigt| hardware
    software -->|geschrieben in| language
    software -->|benötigt zur\nInteraktion| language
    software -->|liest| format
    software -->|schreibt| format

    %% classes
    classDef software fill:#ECA7F9
    classDef language fill:#F24726
    classDef concept fill:#F9C710
    classDef format fill:#8BCA4B
    classDef method fill:#00dada
    class method method
    class software software
    class concept concept
    class format format
    class language language
</pre>

::: notes

- was ist / muss **vorhanden** sein?

:::

## Inwiefern beherrschen wir ein Werkzeug?

![](https://furesh.github.io/slides/assets/images/operationalisierung/process_what-do-we-have.jpg)

::: notes

- Es reicht nicht nur, dass etwas **vorhanden** ist, es muss **zuhanden** sein
- Beispielhafter Prozess für den Einsatz von Software

:::

# Operationalisierung {data-background-image="https://furesh.github.io/slides/assets/images/blackbox/blackbox_makerspace-inside.png" data-background-size="90%"}

## Beispiel: Werzeugliste

>Wir bauen einen *Scholarly Makerspace* auf und wollen eine **Liste von Werkzeugen** kuratieren, die auf der **Häufigkeit** ihrer **Benutzung in der Forschung** beruht (Unsere eigene User Story).

::: columns
:::: column


| term                | freq  | freq.rel  |
| ------------------- | ----: | --------: |
| R                   | 259   | 1         |
| TEI                 | 155   | 0.6       |
| internet            | 134   | 0.52      |
| NLP                 | 118   | 0.46      |
| XML                 | 117   | 0.45      |
| GitHub              | 98    | 0.38      |
| API                 | 88    | 0.34      |
| OA                  | 77    | 0.3       |
| ML                  | 76    | 0.29      |
| GIS                 | 70    | 0.27      |
| topic modeling      | 67    | 0.26      |
| LOD                 | 66    | 0.25      |
| Python              | 66    | 0.25      |
| OCR                 | 64    | 0.25      |
| network analysis    | 62    | 0.24      |

: Absolute und relative Häufigkeiten von "Werkzeugen" in 1036 ADHO Konferenz-Abstracts, 2014--18 {#tbl:freq-adho}

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

## Beispiel: Werzeugliste

>Wir bauen einen *Scholarly Makerspace* auf und wollen eine **Liste von Werkzeugen** kuratieren, die auf der **Häufigkeit** ihrer **Benutzung in der Forschung** beruht (Unsere eigene User Story).

::: columns-3
:::: column

: 1036 ADHO Konferenz-Abstracts, <br/>2014--18 {#tbl:freq-adho-2}

| term             | freq   | freq.rel |
| ------------     | -----: | -----:   |
| R                | 259    | 1        |
| TEI              | 155    | 0.6      |
| Internet         | 134    | 0.52     |
| NLP              | 118    | 0.46     |
| XML              | 117    | 0.45     |
| GitHub           | 98     | 0.38     |
| API              | 88     | 0.34     |
| OA               | 77     | 0.3      |
| ML               | 76     | 0.29     |
| GIS              | 70     | 0.27     |
| Topic Modeling   | 67     | 0.26     |
| LOD              | 66     | 0.25     |
| Python           | 66     | 0.25     |
| OCR              | 64     | 0.25     |
| network analysis | 62     | 0.24     |
| distant reading  | 50     | 0.19     |
| RDF              | 50     | 0.19     |
| NER              | 48     | 0.19     |
| text mining      | 38     | 0.15     |
| LDA              | 37     | 0.14     |

::::
:::: column

: 429 Artikel in DHQ, <br/>2007--19 {#tbl:freq-dhq}

| term             | freq   | freq.rel |
| ---------------  | -----: | -----:   |
| TEI              | 138    | 1        |
| XML              | 105    | 0.76     |
| R                | 84     | 0.61     |
| OA               | 65     | 0.47     |
| distant reading  | 53     | 0.38     |
| GitHub           | 50     | 0.36     |
| API              | 47     | 0.34     |
| ML               | 44     | 0.32     |
| GIS              | 43     | 0.31     |
| NLP              | 40     | 0.29     |
| OCR              | 39     | 0.28     |
| RDF              | 36     | 0.26     |
| text mining      | 36     | 0.26     |
| Python           | 34     | 0.25     |
| Java             | 31     | 0.22     |
| network analysis | 30     | 0.22     |
| Topic Modeling   | 30     | 0.22     |
| JS               | 27     | 0.2      |
| NER              | 19     | 0.14     |
| MySQL            | 18     | 0.13     |

::::
:::: column

: 15873 DFG-Abstracts, <br/>1982--2022 {#tbl:freq-dfg}

| term            | freq   | freq.rel |
| --------------- | -----: | -----:   |
| OA              | 115    | 1        |
| R               | 83     | 0.72     |
| GIS             | 67     | 0.58     |
| XML             | 59     | 0.51     |
| TEI             | 51     | 0.44     |
| OCR             | 28     | 0.24     |
| LOD             | 18     | 0.16     |
| P5              | 17     | 0.15     |
| NLP             | 15     | 0.13     |
| FAIR            | 12     | 0.1      |
| ML              | 11     | 0.1      |
| IIIF            | 9      | 0.08     |
| Java            | 9      | 0.08     |
| METS            | 9      | 0.08     |
| WWW             | 9      | 0.08     |
| Tableau         | 8      | 0.07     |
| FuD             | 7      | 0.06     |
| MEI             | 7      | 0.06     |
| ANNIS           | 6      | 0.05     |
| API             | 6      | 0.05     |

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
- [Unser Backend](infrastruktur.html)

## Literatur {#refs}