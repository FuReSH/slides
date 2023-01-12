---
title: "Sammlung von Mermaid-Diagrammen"
subtitle: ""
author:
    - Sophie Eckenstaler 
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

# Themen
## ChatGPT



<pre class="mermaid">
---
title: Die einfache Antwort
---
flowchart RL
    comp2((OpenAI\n2015)) --> gpt[(GPT: Generative\nPre-trained\nTransformer\n2018)]

    gpt --> chatgpt{ChatGPT\n2022}

    click chatgpt "https://chat.openai.com/" _blank
</pre>

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