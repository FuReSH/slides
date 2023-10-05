---
title: "Der *Scholarly Makerspace* an der UB der HU Berlin stellt sich vor"
subtitle: "Unser Backend"
author:
    - Till Grallert
    - Sophie Eckenstaler
    - Samantha Tirtohusodo
institute: 
    - "Humboldt-Universität zu Berlin, Universitätsbibliothek, Grimm-Zentrum"
    - "DFG-Projekt \"Future e-Research Support in the Humanities\" (2022--25)"
homepage: https://makerspace.hypotheses.org/
url: 
event:
date:
status: published
lang: de
bibliography:
    - ../assets/bibliography/FuReSH.csl.json
    - https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
    - /Users/Shared/BachCloud/HUBox/FuReSH/assets/bibliography/FuReSH.csl.json
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


# Backend und Infrastruktur: Unsere Werkzeugregal-Architektur

## Ziel

Ein zentraler Pfeiler unseres Angebots ist ein kuratiertes Werkzeugregal mit digitalen Werkzeugen für die Geistes- und Kulturwissenschaften an der HU Berlin.

::: notes

+ Diese Infrastruktur dient vordergründig dem Wissensmanagement
+ Wissen wird durch Personal und Community geschaffen, aufbereitet und vermittelt
+ Wissen wird in die Gemeinschaft / Gesellschaft zurückgegeben

:::

## Ausgangspunkt

- Angebot existiert an der HU bisher nicht
- folglich auch keine entsprechenden digitalen Infrastrukturen
- Aufbau durch Makerspace

## Vorgehen

::: columns
:::: column

### Kein Tool Directory Nr. x

- Kuratierte Werkzeuglisten gibt es schon z.B. Bamboo, DiRT Directory, TAPoR 3, forText ...
- Probleme oder die "DiRT-Trap" [@GrantEtAl2020AbsorbingDiRT]
    + Inhalt: Kuratierung, Umfang, Aktualität
    + Technisch: Maintenance, Nachnutzbarkeit (in anderen Kontexten)

::::
:::: column

### Kein Großprojekt

- EU-Projekt **SSHOC-Marketplace** (European Open Science Cloud)
    + Anspruch auf Vollständigkeit
    + Abdeckung des gesamten Forschungsprozesses mit Fokus auf den Daten und Datenlebenszyklus
        - Digitale Tools sind hier eine Unterkategorie.

::::
:::

## Vorgehen

- Informationen bedarfsorientiert aggregieren und verteilen, kein neues Tool Directory ("DiRT-trap")
- Prinzipen: 
    + Minimaler und nachhaltiger Resourceneinsatz
    + Offen und modular von Anfang an
    + Gemeinschaft(lich)

<!-- - Aufwand für UX und UI minimieren
- Ausnutzung vorhandener offener Services/Infrastrukturen -->

::: notes

- wir schlucken unsere eigene Medizin und halten uns an *minimal computing*
- minimal: wir haben nur unsere Resourcen
    + Planet
    + Projekt
    + dient der auch der Transparenz
- wir bauen nichts neu, das bereits besteht
    + Re-use von Infrastrukturen 
    + Re-use von Inhalten
- offen von anfang an
- gemeinschaftlich
    + das Projekt hat einen Zweck
    + Bedarf der Gemeinschaft decken
    + Gemeinschaften bildent
    + DH funktioniert nur im Zusammenspiel von Menschen miteinander und mit Maschinen

:::

## Implementierung

::: columns
:::: narrow

![](https://furesh.github.io/slides/assets/images/operationalisierung/toolbox_architecture.jpg)

::::
:::: wide


- Funktionale Trennung zwischen unseren Datenarten
    + GitHub-Repository: Metadaten/ Werkzeugregal mit Werzeugkisten und Blackboxes
    + Wikidata: inhaltlichen Daten/ Tools
    + Zotero: bibliografische Daten (Tutorials etc.)
- Alle Datenarten sind kontextunabhängig weiter verwendbar (da funktional keine Abhängigkeiten)
- Aufbau eines Portals als zentraler Zugang zu den verteilten Daten

::::
:::

## Ein **prototypischer** Scholarly Makerspace

::: columns
:::: narrow

![](https://furesh.github.io/slides/assets/images/operationalisierung/toolbox_icons.jpg)

::::
:::: wide


- Fokus auf Übertragbarkeit und Nachnutzbarkeit
    + Nur das absolut Notwendige selber machen
    + Nutzung bestehender offener Infrastrukturen
    + Modulares System
    + Open Data und Open Science von Anfang an
    + Dokumentation, Dokumentation, Dokumentation

::::
:::

## Containerisierte Werkzeuge

Mit [Docker](https://docker.com/) und Co.

# Schluß / Danke!
## Weitere Informationen

- [Was ist ein protoypischer *Scholarly Makerspace*?](scholarly-makerspace.html)
- [Unser Serviceportfolio](service-profil.html)
- [Wie sieht das Tüfteln aus?](operationalisierung.html)
- [Unser Backend](infrastruktur.html)

## Literatur {#refs}