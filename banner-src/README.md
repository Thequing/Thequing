# Banner source

`banner.png` at the repo root is rendered from `banner.html` — it is not hand-drawn, so
edit the HTML and re-render rather than touching the PNG.

The design tokens (`--cabinet`, `--phosphor`, `--dim`, `--coin`) and the fonts are the
same ones the [portfolio](https://thequing.github.io/Portif-lio-Lucas-Antonino/) uses, so
the two stay visually continuous. Change a colour in one place, change it in both.

## Re-rendering

```
npm i puppeteer-core
node render.mjs banner.html ../banner.png 1280 400
```

`render.mjs` points at `C:/Program Files/Google/Chrome/Application/chrome.exe`; edit
`executablePath` on another machine. Output is 2× (2560×800).

## Fonts

Jersey 20, Atkinson Hyperlegible and JetBrains Mono, all SIL OFL — see `OFL.txt`.
