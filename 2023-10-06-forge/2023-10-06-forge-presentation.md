---
title: "Ein weiteres Toolverzeichnis für die Digital Humanities?!"
subtitle: "Aber diesmal offen und mit Wikidata"
author:
  - Sophie Eckenstaler
  - Till Grallert
  - Claus-Michael Schlesinger
  - Samantha Tirtohusodo
institute: 
  - "Humboldt-Universität zu Berlin"
  - "Universitätsbibliothek, Grimm-Zentrum"
  - "Institut für Bibliotheks- und Informationswissenschaften"
  - "Institut für Geschichtswissenschaften"
  - "\"Future e-Research Support in the Humanities\" (DFG, 2022--25)"
  - "Methods Innovation Lab, NFDI 4Memory"
homepage: https://makerspace.hypotheses.org/
event: FORGE 2023
date: 2023-10-06
url: https://furesh.github.io/slides/2023-10-06-forge
status: published
lang: de
bibliography:
    - ../assets/bibliography/FuReSH.csl.json
#    - https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
revealjs-url: ../revealjs
#revealjs-url: https://furesh.github.io/slides/revealjs
#tags:
nocite: |
    @BorekEtAl2016TaDiRAHCaseStudy; @BorekEtAl2021InformationOrganizationAccess; @Zhao2022SystematicReviewWikidata; @FischerEtAl2023Preface; @SochatEtAl2022ResearchSoftware
---

## Überblick

# Warum ein neues Toolverzeichnis?
## Überblick über ein sich kontinuierlich wandelndes Feld

::: columns
:::: column

![Word cloud der häufigsten Werkzeuge in den Digital Humanities gemessen an der Anzahl von Abstracts für die ADHO Konferenzen](../assets/images/wordcloud/wordcloud-rel-100_tools-in-1036-dh-conferences-2014-2018-w_100.svg){#fig:wordcloud-tools}

::::
:::: column

- Toolverzeichnisse bedienen einen evidenten Bedarf
* Informationen zu Werkzeugen: 
    - Was gibt es?
    - Wofür kann es im DH Kontext eingesetzt werden?
* Informationen zum Gebrauch von Werkzeugen: 
    - Wie kann ich das Lernen?
    - Wer hat es wie und mit welchem Ergebnis bereits angewendet?

::::
:::

::: notes

- hier können wir kurz über den Kontext unserer beiden Projekte reden
- FuReSH bzw. Kompetenzwerkstatt DH
- NFDI4Memory Methodenlabor

:::

## Tool Registries sind Legion und ein eigenes Genre der DH

::: columns
:::: column

- DiRT -> Bamboo -> [TAPoR (3.0)](https://tapor.ca/)
- [Social Sciences and Humanities (SSH) Open Marketplace](https://marketplace.sshopencloud.eu)
    + DARIAH, CLARIN, CESSDA
- NFDIs
    + [fortext](https://fortext.net/tools)
    + [NFDI4culture](https://nfdi4culture.de/resources/registry.html)
    + Basisdienste ...
- [Research Software Directory](https://www.esciencecenter.nl/rsd/), Netherlands eScience Center

::::
:::: column

<!-- HIER GGF. SCREENSHOTS VON DEN WEBSITES? -->

::::
:::

::: notes

- Abkürzungen
    + Bamboo DiRT, 2011, 2012--
    + CESSDA
    + CLARIN
    + DARIAH: Digital Research Infrastructure for the Arts and Humanities, 2011
    + DiRT: Digital Research Tools, 2008--
    + TaDiRAH: developed as collaboration between DiRT and DARIAH-DE, 2013
    + TAPoR: maintained by Geoffrey Roper
:::


## Schwächen der bestehenden Tool Registries

<!-- Problem: "DiRT trap" [@Dombrowski2021DirectoryParadox] -->

>directories require ongoing upkeep, and it is unrealistic for an individual -- particularly in an alternative academic career track -- to do that work indefinitely. 

<cite>@Dombrowski2021DirectoryParadox</cite>

::: columns
:::: column

- Projektfinanzierung
- Datensilos 
    + Fokus auf Präsentationsschicht
    + Proprietäre bzw. custom Infrastrukturen
    + schlecht dokumentierte oder gar keine Schnittstellen (API's)
    + Kein Normdatensätze
- Kuratierung
    + (unbezahlte) Expert_innen und Gremien
    + praktisch kein community engagement
    + unmöglich Informationen aktuel zu halten

::::
:::: column

<!-- Screenshot von TAPoR mit dem Verweis auf Stefan Sinclairs Emailadresse -->

::::
:::



::: notes

- Sehr eingeschränkter Einsatz von APIs
    + Bsp. TAPoR hat eine nicht-dokumentierte API, auf die wir nur durch eine Analyese des  [ToolXtractor](https://github.com/lehkost/ToolXtractor)  [@BarbotEtAl2019ToolsMentioned; @BarbotEtAl2019WhichDHTools] gestoßen sind.
    + Bsp. SSH Open Marketplace hat eine dokumentierte API, aber es lassen sich nicht alle Werkzeuge abfragen, die mit einem bestimmten TaDiRAH-Konzept kategorisiert sind
- Folge: frozen in time:
    + IDs können nicht von externen für LOD benutzt werden 
    + Es können keine neuen Werkzeuge hinzugefügt werden
    + Es gibt keine dauerhafte Maintenance (Finanzierung)
        * Bsp.: TAPoR listet immer noch Stéfan Sinclairs Email für die Einreichung neuer Werkzeuge, obwohl Stéfan im August 2020 verstorben ist.
        * Die API des SSH Open Marketplace liefert `informationContributor` und `lastInfoUpdate`
:::

## Ergebnis

Im Ergebnis sind diese Toolverzeichnisse in dem Anspruch eines umfassenden, representativen und je aktuellen Abbildes der verfügbaren Möglichkeiten computationeller Forschung und digitaler Wissenschaft als gescheitert zu verstehen.

# Unser Vorschlag: ein weiteres Toolverzeichnis
## Wirklich?

![Source: <https://xkcd.com/927>](https://imgs.xkcd.com/comics/standards.png){#fig:xkcd-standards}

 <!-- Unser Ansatz: Offene Tool Registry mit Wikidata -->

## Prinzipien des *minimal computing*

::: columns
:::: column

>minimal computing connotes digital humanities work undertaken in the context of some set of constraints. This could include lack of access to hardware or software, network capacity, technical education, or even a reliable power grid.

<cite>[@RisamGil2022Introduction, §3]</cite>

![Screenshot einer [Website](https://bulthaup.com/en/b3/) für luxuriöse Küchen](../assets/images/bulthaupt.png){#fig:bulthaupt}

::::
:::: column


>this implies learning how to produce, disseminate, and preserve digital scholarship ourselves, **without the help we can’t get**, even as we fight to build the infrastructures we need at the intersection of, with, and beyond institutional libraries and schools.

<cite>[@Gil+2016, 29]</cite>

![Frankfurter Küche, Source: [WikiCommons, CCO](https://commons.wikimedia.org/wiki/File:SchutteLihotzky_FrankfurtKitchen_MIA_2004195_001.jpg)](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/SchutteLihotzky_FrankfurtKitchen_MIA_2004195_001.jpg/450px-SchutteLihotzky_FrankfurtKitchen_MIA_2004195_001.jpg){#fig:bauhaus}

::::
:::

## Ansatz

Wir müssen die Frage "was brauchen *wir*" mit "was haben *wir*" beantworten können

::: columns
:::: column

### Was brauchen *wir*?


::::
:::: column

### Wer sind *wir*?

+ 3 Personen
+ Projektfinanziert
+ Gemeinschaft von Praktitioners

### Was haben *wir*?

+ Know-how
+ Kontakte
+ Anschubfinanzierung
+ anteilige Arbeitszeit

::::
:::

## Anforderungen

::: columns
:::: column

### Inhaltlich

- Tools minimal formal beschreiben sowie aggregieren
- Tools kategorisiert (z.B. nach \[TaDiRAH\](https://vocabs.dariah.eu/tadirah)) sammeln und auffindbar machen
- Tools eindeutig referenzierbar machen
- Wachsender Survey einer *Tool-Landschaft* bzw. *Tool-Bandbreite*

::::
:::: column

  
### Formal: Nachhaltige Infrastruktur

- Nutzung vorhandener Informationen zu Tools
    - ggf. aus unterschiedlichen Datenquellen
    - vorzugsweise LOD (nach 5-Sterne-Modell von Tim Berners-Lee)
- Unsere Daten als Beitrag zu *digital commons*
- Dokumentation einer exemplarischen, offenen Infrastruktur für die Nutzung durch andere

::::
:::

# Umsetzung
## Basisdatenmodell

![Basales Datenmodell am Beispiel der Beschreibung von "Gephi"](../assets/images/data-model-v_1.png){#fig:data-model}


## Wikidata:WikiProject DH Tool Registry

- Anlegen und redaktionelle Betreuung eines WikiProjekts in Wikidata
    - [WikiProject DH Tool Registry](https://www.wikidata.org/wiki/Wikidata:WikiProject\_DH\_Tool_Registry) mit:
        - Landingpage
        - Background
        - Datamodel
        - How to use (mit Beispielqueries)
- Dient der Dokumentation <!--des Datenmodells-->, als Hilfestellung (Beispielqueries) und Diskussionsforum sowie zum Monitoring von Tools
- Aufnahme eines kleinen exemplarischen Datasets an Tools

<!-- HIER GGF. EIN VIDEO VOM WIKIPROJEKT -->

## Prototypisches Frontend

- Zugeschnitten auf Einsatz im Beratungskontext der Kompetenzwerkstatt Digital Humanities (KWDH)
- Verbesserung der Daten-Zugänglichkeit sowie -Aufbereitung (Portalcharakter)
- Stärkeren Repräsentationscharakter für die KDH (Corporate Design, Hintergrundinformationen zum Projekt, etc.)
    - Wichtig: Daten davon getrennt lassen
- ähnlich zu: 
    - Archivführer Kolonialzeit: <https://archivfuehrer-kolonialzeit.de/>
    - Scholia: <https://scholia.toolforge.org>
- Recherche von Tools
- Kontrolliertes Hinzufügen von Tools über json-Schema

<!-- HIER GGF. EIN VIDEO VOM FRONTEND -->

# Zusammenfassung
## Nachhaltiges Konzept mit dem Ziel ...

- Übertragbar und anwendbar in anderen DH-Kontexten
- Offen und skalierbar:
    - Zugangsperspektive: Jede/r kann Tools recherchieren, editieren, hinzufügen (höchste Open Data Stufe nach 5 Sterne Modell von Tim Berners-Lee).
    - Datenmodellperspektive: Das Modell kann durch die Community erweitert und angepasst werden.
        - Wichtig: Man einigt sich auf ein gemeinsames minimales Datenmodell.
- Modular:
    - Multiple projektspezifische Wikidata-Projekte können angelegt werden.
        - Datenmodell kann domänspezifischen Krititerien erweitert werden.
    - Multiple projektspezifische Anwendungen können auf Wikidata aufsetzen.
        - Unabhängig von Interfaces.

# Vielen Dank für Ihre Aufmerksamkeit!
## Literatur {ref}