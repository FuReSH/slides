---
title: "Blackboxes öffnen"
author:
    - Till Grallert
    - Sophie Eckenstaler
affiliation: Future e-Research Support in the Humanities, Humboldt-Universität zu Berlin
date: 2022-07-12 
status: draft
lang: de
bibliography: https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
reference-section-title: "Literatur"
suppress-bibliography: true
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
tags:
    - FuReSH
    - public relations
    - slides
---

# How did they build this?

--------

![](https://furesh.github.io/slides/assets/images/blackbox/blackbox_question-mark.png)

## How did they build this?

>Wir bauen einen *Scholarly Makerspace* auf und wollen eine **Liste von Werkzeugen** kuratieren, die auf der **Häufigkeit** ihrer **Benutzung in der Forschung** beruht.

![](https://furesh.github.io/slides/assets/images/operationalisierung/blackbox-operationalisierung.jpg)

# Operationalisierung

--------

![](https://furesh.github.io/slides/assets/images/blackbox/blackbox_makerspace-inside.png)

::: notes

-  dieser Abschnitt dient der ersten Entzauberung
-  Aufwand für Datenerfassung
-  Kräfteverhältnis zwischen Platformen und Wissenschaft

:::

## Forschungsprozess

>Wir bauen einen *Scholarly Makerspace* auf und wollen eine **Liste von Werkzeugen** kuratieren, die auf der **Häufigkeit** ihrer **Benutzung in der Forschung** beruht.

![](https://furesh.github.io/slides/assets/images/operationalisierung/research-process_generic.jpg)

## Wir groß sind die Blackboxes?
### Unsere Erwartungen und Wünsche

![](https://furesh.github.io/slides/assets/images/operationalisierung/datafication-vs-analysis_expected.jpg)

## Wir groß sind die Blackboxes?
### Die (bittere) Realität

![](https://furesh.github.io/slides/assets/images/operationalisierung/datafication-vs-analysis_real.jpg)

## Was haben wir um sie zu öffnen?

![](https://furesh.github.io/slides/assets/images/operationalisierung/research-process_resources.jpg)

# Corpus building
## Corpus building: user scenario
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/corpus-building_concrete.jpg)

## Corpus building: konzeptionell
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/corpus-building_conceptual.jpg)

## Corpus building: Blackboxes öffnen!

![](https://furesh.github.io/slides/assets/images/blackbox/blackbox_makerspace-inside.png)

## Corpus building: technisch
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/corpus-building_technical.jpg)

## Web scraping: technisch
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/web-scraping_technical.jpg)

## Transformation: technisch
### Eingabe ---> Verarbeitung ---> Ausgabe

![](https://furesh.github.io/slides/assets/images/operationalisierung/transformation_technical.jpg)


# Computationelle Analyse: 
## Distant Reading

::: columns-3
:::: column

### Input

::::
:::: column

### Analyse

::::
:::: column

### Ergebnisse

::::
:::

## Ergebnisse

::: columns
:::: column

### Statistiken

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

: Absolute und relative Häufigkeit von Begriffen, ADHO Konferenzen, 2014--18 {#tbl:freq-adho}

<!--
| distant reading     |   50 |     0.19 |
| RDF                 |   50 |     0.19 |
| NER                 |   48 |     0.19 |
| text mining         |   38 |     0.15 |
| LDA                 |   37 |     0.14 |
-->

::::
:::: column

### Visualisierung

![Wordcloud der relativen Häufigkeiten, ADHO Konferenzen, 2014--18](https://furesh.github.io/slides/assets/images/wordcloud/wordcloud-text-100_tools-in-1036-DH-conference-paper-abstracts-2014-2018-w_100.svg){#fig:wordcloud-adho-2}

::::
<!-- :::: column

![Digital Humanities Quarterly](https://furesh.github.io/slides/assets/images/wordcloud/wordcloud-text-100_tools-in-429-articles-from-DHQ-w_100.svg)

:::: -->
:::

<!-- # Ergebnisanalyse -->