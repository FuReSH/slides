---
title: "Tool Registry"
subtitle: "Zielvorstellung, Grobstruktur und Vorgehen"
author:
    - Sophie Eckenstaler
    - Till Grallert
    - Claus-Michael Schlesinger
    - Samantha Tirtohusodo
institute: 
    - "Humboldt-Universität zu Berlin, Universitätsbibliothek, Grimm-Zentrum"
    - "DFG-Projekt \"Future e-Research Support in the Humanities\" (2022--25)"
homepage: https://makerspace.hypotheses.org/
url: 
status: published
lang: de
bibliography: https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json 
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
tags:
    - FuReSH
    - tool registry
    - slides
---

---------

**Idee**

(bekannt) Erstellung einer offenen Wikidata-basierten Tool Registry im Rahmen des Aufbaus eines **prototypischen** Scholarly Makerspace.

# Zielstellung

## Was wir wollen

- Tools kategorisiert (nach TaDiRAH) sammeln und auffindbar machen
    - dient in erster Linie als Arbeitsgrundlage für den Makerspace im Kontext von Beratungen
- im Sinne von *Tool-Landschaft* bzw. *Tool-Bandbreite*: Welche Tools existieren überhaupt zu einem bestimmten Verfahren?
- Tools minimal formal beschreiben sowie aggregieren
 
## Was ist daran neu?

- Idee ist nicht neu → SSH Open Marketplace, Tapor, University of Toronto, etc. machen es bereits
- **Neu ist der Ansatz** : Tool Registy, die sich auf allen Ebenen als offen versteht:
    - Bereitstellung (Zugang), 
    - Bearbeitung, 
    - Nachnutzung sowie Interoperabilität
    - = **Open Data**

## Werkzeugbegriff

- Software, mit der bestimmte Verfahren praktisch umgesetzt werden und die in der geistes- und kulturwissenschaftlichen Forschung zum Einsatz kommen (z.B. 3D-Modelling, Topic Modelling, Stilometrie, Netzwerkanalyse, Digital Publishing)
- Die Verfahren beziehen sich auf alle Verfahren im Forschungsprozess, also von Datenbeschaffung und -aufbereitung über die Analyse und Interpretation bis hin zur Präsentation und Veröffentlichung
- Beispiel für solche Software kann sein:
    - Open Refine
    - Gephi
    - Voyant Tools
    - Passim
    - Wordpress
    - etc.

## Ziel

Ziel ist ein allgemeingültiges minimales Datenmodell in Wikidata mit ersten exemplarisch verzeichneten Tools.

## Prototypisch, weil...

- übertragbar und anwendbar in anderen Makerspace-Kontexten (oder gänzlich anderen Projektkontexten wie FID)
    - offen und skalierbar:
        - Zugangsperspektive: jede/r kann Tools editieren und hinzufügen
        - Datenmodellperspektive: Das Modell kann in später erweitert werden (z.B. in einer zweiten Projektphase dahingehend, Pfadabhängigkeiten zu modellieren)
    - modular: 
        - multiple projektspezifische Wikidata-Projekte können angelegt werden
        - multiple projektspezifische Webanwendungen können auf Wikidata aufsetzen


# Grobstruktur

## in Wikidata
    
- Anlegen und redaktionelle Betreuung eines WikiProjects
    - [WikiProject DH Tool Registry](https://www.wikidata.org/wiki/Wikidata:WikiProject_DH_Tool_Registry)
    - dient zur Dokumentation des Datenmodells, als Hilfestellung und Diskussionsforum sowie zum Monitoring von Tools, die im Scholary Makerspace in Beratungskontexten verwendet werden
- Aufnahme eines kleinen exemplarischen Datasets an Tools

## Webanwendung (auf Wikidata aufsitzend)

- Verbesserung der Daten-Zugänglichkeit (Portalcharakter)
- Repräsentationscharakter für den Scholarly Makerspace (Corporate Design, Hintergrundinformationen zum Projekt, etc.)
    - ähnlich zu Archivkolonialführer: https://archivfuehrer-kolonialzeit.de/
- Recherche von Tools
- (ggf. kontrolliertes Hinzufügen von Tools über json-Schema)
    - **hier kommt das GitHub-Repo ins Spiel (darüber haben wir noch nicht gesprochen und können wir auch erstmal noch weglassen)**

# Vorgehen

- Anspruch eines allgemeingültigen minimalen Datenmodells erfordert ein iteratives Vorgehen mit Datenmodellanpassungen

## minimales Datenmodell (1. Version)

![](https://furesh.github.io/slides/assets/images/tool-registry_wikidata-datamodel.jpg)
