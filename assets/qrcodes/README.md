---
title: "QR Codes"
subtitle: "Read me"
author:
    - Sophie Eckenstaler 
    - Till Grallert
affiliation: Future e-Research Support in the Humanities, Humboldt-Universität zu Berlin
date: 2022-06-08 
status: draft
lang: de
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
tags:
    - FuReSH
---

Dieser Ordner enthält generierte QR Codes. Diese können einfache Textstrings enthalten, wie z.B. URLs von Web-Ressourcen, oder detaillierte und strukturierte Daten. Es gibt verschiedenste Webservices, die es ermöglichen QR Codes mit dem Terminal zu erzeugen, solange das `curl` Kommando verfügbar ist.

# Code
## simple

```bash
$ curl qrcode.show -d INPUT -H "Accept: image/jpeg" --output FILENAME.jpg 
```

`INPUT` muss in diesem Beispiel durch eine/n String/URL ersetzt werden.

`FILENAME` sollte mit den Dateinamen in anderen Ordnern korrespondieren.

## detailliert

```bash
$ curl qrcode.show -d @path/to/input.txt -H "Accept: image/jpeg" --output FILENAME.jpg 
```

`@`: Pfad zu einer Textdatei

# Anwendungsbeispiel
## Setkarten

Unsere physischen Setkarten sollen einen QR Code enthalten, der eine kanonische URL enthält.
Die kanonische URL erlaubt dann

1. dass Nutzer:innen z.B. zu einer Webseite kommen, auf der detailliertere Informationen zum gewählten Werkzeug zu finden sind;
2. dass eine physische Toolchain aus mehreren Setkarten digital nachmodelliert werden kann.