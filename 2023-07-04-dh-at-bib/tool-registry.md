---
title: "Tool Registry"
subtitle: "Bedarf, Anforderungen, Zielvorstellung und Vorgehen"
author:
    - Sophie Eckenstaler
institute: 
    - "Humboldt-Universität zu Berlin, Universitätsbibliothek, Grimm-Zentrum"
    - "DFG-Projekt \"Future e-Research Support in the Humanities\" (2022--25)"
homepage: https://makerspace.hypotheses.org/
event: Netzwerktreffen DH@Bib
date: 
url: https://furesh.github.io/slides/2023-07-04-dh-at-bib
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
    - tool registry
    - slides
nocite: |
    @BorekEtAl2016TaDiRAHCaseStudy; @BorekEtAl2021InformationOrganizationAccess; @Zhao2022SystematicReviewWikidata; @FischerEtAl2023Preface
---

## Bedarf

Wir benötigen einen Survey über die digitale Tool-Landschaft in der geistes- und kulturwissenschaftenlichen Forschung. Sie dient in erster Linie als Arbeitsgrundlage/ Wissensspeicher für den Scholarly Makerspace im Kontext von Service- und Supportangeboten.

## Werkzeugbegriff

<!-- - Software, mit der bestimmte Verfahren praktisch umgesetzt werden und die in der geistes- und kulturwissenschaftlichen Forschung zum Einsatz kommen (z.B. 3D-Modelling, Topic Modelling, Stilometrie, Netzwerkanalyse, Digital Publishing)
- Die Verfahren beziehen sich auf alle Verfahren im Forschungsprozess, also von Datenbeschaffung und -aufbereitung über die Analyse und Interpretation bis hin zur Präsentation und Veröffentlichung
- Beispiel für solche Software kann sein:
    - Open Refine
    - Gephi
    - Voyant Tools
    - Passim
    - Wordpress
    - etc. -->

::: columns
:::: column

**Software**

+ setzt **Verfahren** praktisch um
+ benötigt Hardware, weitere Software
+ interagiert mit **Formaten**
+ Bsp.: Gephi, VoyantTools, passim ...


::::
:::: column

**Verfahren** 

- sind Teil von Methoden der geistes- und kulturwissenschaftlichen Forschung
+ Bsp.: 3D-Modelling, Topic Modelling, Stilometrie, Netzwerkanalyse, Digital Publishing ...

::::
:::

![](../assets/images/taxonomy-tools_2.svg)


# Zielstellung

## Anforderungen

::: columns
:::: column

### Inhaltlich

- Tools minimal formal beschreiben sowie aggregieren
- Tools *kategorisiert* (z.B. nach [TaDiRAH](https://vocabs.dariah.eu/tadirah)) sammeln und auffindbar machen
- Tools eindeutig referenzierbar machen
- Wachsender Survey einer *Tool-Landschaft* bzw. *Tool-Bandbreite*: Welche Tools existieren überhaupt zu einem bestimmten Verfahren?

::::
:::: column

### Formal: Nachhaltige Infrastruktur

- Nutzung vorhandener Informationen zu Tools
    + ggf. aus unterschiedlichen Datenquellen
    + vorzugsweise LOD
- Unsere Daten als Beitrag zu *digital commons*
- Dokumentation einer exemplarischen, offenen Infrastruktur für die Nutzung durch andere

::::
:::

## Ziel

Erstellung einer offenen, Wikidata-basierten Tool Registry im Rahmen des Aufbaus eines Scholarly Makerspace, die durch andere nachnutzbar ist.

## Was ist daran neu?

### Bisher

Tool Registries sind Legion: 

- DiRT -> Bamboo -> [TAPoR (3.0)](https://tapor.ca/) [@GrantEtAl2020AbsorbingDiRT]
- *Social Sciences and Humanities Open Marketplace*](https://marketplace.sshopencloud.eu)

Problem: "DiRT trap" [@Dombrowski2021DirectoryParadox]

- Geschlossene Systeme
- Anspruch der Vollständigkeit
- Funding

## Unser Ansatz

Auf allen Ebenen offen

- **Open Data**
    - Bereitstellung (Zugang), 
    - Bearbeitung, 
    - Nachnutzung sowie Interoperabilität
- Infrastruktur
    + Wikidata
    + LOD Interface, APIs, SPARQL


# Vorgehen

## in Wikidata
    
- Anlegen und redaktionelle Betreuung eines WikiProjects
    - [WikiProject DH Tool Registry](https://www.wikidata.org/wiki/Wikidata:WikiProject_DH_Tool_Registry)
    - dient zur Dokumentation <!--des Datenmodells-->, als Hilfestellung und Diskussionsforum sowie zum Monitoring von Tools, die im Scholary Makerspace in Beratungskontexten verwendet werden
- Aufnahme eines kleinen exemplarischen Datasets an Tools

## Minimales Datenmodell

![Unser minimales Datenmodell, v0.1](https://furesh.github.io/slides/assets/images/tool-registry_wikidata-datamodel.jpg){#fig:data-model}

Anspruch eines allgemeingültigen minimalen Datenmodells erfordert ein iteratives Vorgehen mit Datenmodellanpassungen.

Ziel ist ein allgemeingültiges minimales Datenmodell in Wikidata mit ersten exemplarisch verzeichneten Tools.

## Webanwendung

- Verbesserung der Daten-Zugänglichkeit sowie -Aufbereitung (Portalcharakter)
- Repräsentationscharakter für den Scholarly Makerspace (Corporate Design, Hintergrundinformationen zum Projekt, etc.)
    - ähnlich zu: 
        + Archivkolonialführer: <https://archivfuehrer-kolonialzeit.de/>
        + Scholia: <https://scholia.toolforge.org>
- Recherche von Tools
- Kontrolliertes Hinzufügen von Tools über json-Schema

## Zusammenfassung

Nachhaltiges Konzept mit dem Ziel...

- übertragbar und anwendbar in anderen DH-Kontexten
    - offen und skalierbar:
        - Zugangsperspektive: jede/r kann Tools editieren und hinzufügen
        - Datenmodellperspektive: Das Modell kann später erweitert werden
    - modular: 
        - multiple projektspezifische Wikidata-Projekte können angelegt werden
        - multiple projektspezifische Anwendungen können auf Wikidata aufsetzen

## Vielen Dank!

## Literatur {ref}
