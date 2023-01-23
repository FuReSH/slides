---
title: "Sammlung von Mermaid-Diagrammen"
subtitle: ""
author:
    - Till Grallert
affiliation: Future e-Research Support in the Humanities, Humboldt-Universität zu Berlin
date: 2023-01-12 
status: draft
lang: de
bibliography: https://furesh.github.io/slides/assets/bibliography/FuReSH.csl.json
reference-section-title: "Literatur"
suppress-bibliography: false
licence: https://creativecommons.org/licenses/by/4.0/
markdown: pandoc
tags:
    - FuReSH
---

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>

Diese Datei enthält eine Sammlung von Mermaid Diagrammen für die Weiternutzung in Präsentationen, Publikationen etc.

# Mermaid
## mermaid-filter for pandoc

```bash
pandoc -t html -F mermaid-filter -o mermaid-charts.html mermaid-charts.md
```

sometimes it might be necessary to explicitly address the mermaid filter

```zsh
pandoc -t html -F ~/node_modules/mermaid-filter/index.js -o mermaid-charts.html mermaid-charts.md
pandoc -t html -F /Users/furesh/node_modules/mermaid-filter/index.js -o mermaid-charts.html mermaid-charts.md
```

# Themen
## Unser Setup

<pre class="mermaid">
--- 
title: our setup
---

flowchart BT
    repo1[(GitHub\nrepository)]
    repo2[(Zenodo)]
    source1[(Wikidata)]
    bibl1[(Zotero)]
    dir1[(TAPoR)]
    dir2[(SSH Open\nMarketplace)]
    ont1[(TaDiRAH)]
    file1[.yml]
    file2[.bib]
    file3[.json\nschema]
    files(plain-text files)

    file1 -.->|points to| source1 & ont1 & dir1 & dir2 & file2
    dir1 & dir2 -.->|points to| source1
    file3 -->|validates| file1
    bibl1 -->|exports| file2
    repo1 -->|storing\nversion control| files
    files --> file1 & file2 & file3
    repo2 -->|archiving| files

    %% do not set opacity as it will remove the text content
    classDef importance4 fill:red;
    classDef importance3 fill:orange;
    classDef importance2 fill:yellow;
    classDef importance1 fill:green;

    class file1 importance4
</pre>

<<pre class="mermaid">
---
title: "Workflow data entry"
---

flowchart LR
    user1((User))
    file1[XYZ.tool.yml]
    repo1[(GitHub\nrepository)]
    proc1(GitHub\nAction 1)
    proc2(GitHub\nAction 2)
    act1{comit}
    source1[(Wikidata)]
    bibl1[(Zotero\nGroup)]
    dir1[(TAPoR)]

    user1 -->|creates| file1
    user1 -->|edits| bibl1 & source1
    file1 --> act1 --> repo1
    act1 -->|triggers| proc1
    proc1 -->|validates| file1
    proc1 -->|triggers| proc2
    proc2 -->|queries| source1 & dir1
    proc2 -->|enriches| file1


</pre>

## ChatGPT



```{.mermaid format=svg}
---
title: Die einfache Antwort
---
flowchart RL
    comp2((OpenAI\n2015)) --> gpt[(GPT: Generative\nPre-trained\nTransformer\n2018)]

    gpt --> chatgpt{ChatGPT\n2022}

    click chatgpt "https://chat.openai.com/" _blank
```

<pre class="mermaid">
---
title: Die etwas interessantere Antwort
---

flowchart RL
    comp2((OpenAI\n2015\nnonprofit)) ==> gpt[(GPT: Generative\nPre-trained\nTransformer\n2018)]
    pers1[Elon Musk] -.-> |co-funded| comp2
    pers2[Peter Thiel] -.-> |co-funded| comp2
    comp4(("Amazon Web\nServices (AWS)")) -.-> |co-funded| comp2

    gpt ==> comp5((OpenAI\n2019\nfor profit))
    comp5 ==> gpt3[(GPT-3\n2020)]
    comp3((Microsoft)) -.-> |invested| comp5
    comp3 <-..- |exclusive use| gpt3

    gpt3 --> dalle{DALL-E\n2021}
    gpt3 ===> chatgpt{ChatGPT\n2022}
    comp4 --> |hosts| data1[("Common Crawl\ndata set\n2011-")]
    data1 --> |training\nset for| gpt

    comp6((Common Crawl\nnonprofit)) --> |provides| data1

    click chatgpt "https://chat.openai.com/" _blank
    click dalle "https://openai.com/blog/dall-e/" _blank
    click comp6 "http://commoncrawl.org/" _blank
</pre>

<pre class="mermaid">
flowchart BT
    comp2((OpenAI\n2015)) --> gpt[(GPT: Generative\nPre-trained\nTransformer\n2018)]
    gpt --> gpt3[(GPT-3\n2020)]
    gpt3 --> dalle{DALL-E\n2021}
    gpt3 ---> chatgpt{ChatGPT\n2022}
    pers1[Elon Musk] -.-> |co-funded| comp2
    pers2[Peter Thiel] -.-> |co-funded| comp2
    comp4(("Amazon Web\nServices (AWS)")) -.-> |co-funded| comp2
    comp3((Microsoft)) -.-> |invested| comp2

    click chatgpt "https://chat.openai.com/" _blank
    click dalle "https://openai.com/blog/dall-e/" _blank
</pre>