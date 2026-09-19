<img src="https://raw.githubusercontent.com/Thequing/Thequing/main/banner.png" alt="Lucas Antonino — Gameplay &amp; Systems Programmer. 1 shipped on Steam, 1 in production, 1 demo at BGS 2026." width="100%">

I build the systems players actually touch — combat, movement, dialogue, UI — and the
simulation underneath them. Unity and Unreal Engine 5, in C#, C++ and Blueprints.

**Open to gameplay and systems programming roles.** I'll be at **Brasil Game Show 2026**
with a playable demo — [portfolio](https://thequing.github.io/Portif-lio-Lucas-Antonino/)
· [CV](https://drive.google.com/file/d/1FfMGEfl98RtVbwcl-iNgrTfCKKT5UiSN/view?usp=sharing)
· [LinkedIn](https://www.linkedin.com/in/lucas-antonino-7401b7201/)

---

## Stage select

| | Project | What I own | Stack |
|---|---|---|---|
| **Cleared** | **[Steam Veins](https://store.steampowered.com/app/3201780/Steam_Veins/)** — 2D action roguelike, Kimu Studios, Early Access since Aug 2025 | Enemy combat: damage response, invulnerability frames, knockback, health-threshold phase changes, FMOD hit audio | Unity · C# · FMOD |
| **Now playing** | **MidNight Memories** — PSX-style first-person horror. Chapter One is the 10–12 min demo on my BGS 2026 booth | Code lead on a two-person team. Investigation Mode, fog-gated arenas, Nightmare AI, the Obsidian Wraith boss, **103 unit tests** on the logic core | Unity · C# |
| **In progress** | **[Framed Drift](https://github.com/Thequing/Framed-Drift)** — idle drift RPG. You don't drive; you build the car, pick the risk, and watch it run | Solo. A race simulator with **zero engine references** — 10,000 races in 0.06 s, **135 tests**, offline/live parity at 0.06 % | Unity 6 · C# |
| **In progress** | **Hell's Kitchen** — tower defense where the map grows as you clear it: 4×4 rooms, a boss every third | Gameplay systems on the team's GDD. Four damage types vs. per-enemy armour, four-tier towers, a headless harness that plays all 16 rooms | Unity 6 · C# |
| **Cleared** | **[KuroNeko](https://github.com/Thequing/KuroNeko)** — visual novel driven by a script language I wrote | Solo. Ten-command narrative parser with no Unity dependency, plus a load-time diagnostic pass that rejects broken scripts | Unity · C# |
| **Coming soon** | **[Dino Girls](https://store.steampowered.com/app/3495120/Dino_Girls/)** — idle resort-builder, Kimu Studios | Gameplay programmer: systems, mechanics, and the technical calls that come with them | Unity · C# |

*MidNight Memories and Hell's Kitchen are team projects in private repos. Footage of
both, and of everything above, is on the [portfolio](https://thequing.github.io/Portif-lio-Lucas-Antonino/).*

---

## Systems worth reading

**A race simulator that doesn't know Unity exists** — *[Framed Drift](https://github.com/Thequing/Framed-Drift)*
The simulation lives in its own assembly with no `UnityEngine` reference, so it resolves
10,000 races in 0.06 s and its 135 tests run under `dotnet` without opening the editor.
Offline progress calls the *same* scorer as live play, which makes parity structural
rather than something I test for — measured at 0.06 % anyway. Content is commented JSON:
11 tracks, 57 parts, 12 affixes, 5 rivals, each rival a readable and counterable build.

**A script language that validates itself** — *[KuroNeko](https://github.com/Thequing/KuroNeko)*
Ten commands cover scenes, characters, audio, flags, conditionals, jumps and menus, with
inline parameters anywhere in a line. A diagnostic pass walks the whole script at load and
reports unknown commands, duplicate labels, dead jumps and empty menus — so a writer finds
the mistake instead of the player. The parser has no engine dependency; a thin layer above
it handles scenes, UI and save slots.

**Enemy combat that has shipped** — *[Steam Veins](https://store.steampowered.com/app/3201780/Steam_Veins/)*
Invulnerability gating, knockback and collision handling, phase transitions on health
thresholds, and FMOD events with randomised pitch so a hundred melee hits don't sound like
one. In Early Access on Steam since August 2025.

---

## Equipped

**Engines** Unity · Unity 6 · Unreal Engine 5
**Languages** C# · C++ · Blueprints · Python
**Gameplay** combat state machines · damage & knockback · enemy AI · narrative parsers · procedural generation · save systems
**Practice** deterministic simulation · NUnit / `dotnet test` · headless smoke harnesses · FMOD · URP · Git

Outside games I write backend Python — a [webhook relay](https://github.com/Thequing/webhook-relay)
with jittered retries, HMAC signing and a replayable dead-letter queue, and a
[clinic scheduling API](https://github.com/Thequing/clinic-scheduler-api) on FastAPI and
async SQLAlchemy. Same instinct as the game work: make the core testable without the thing
it runs inside.

---

## Education

Bachelor's in Information Technology — **UFRN** · Game Design — **Udemy** · Database Administration — **IFRS**

---

<details>
<summary><b>Português</b></summary>

<br>

Construo os sistemas que o jogador realmente toca — combate, movimentação, diálogo, UI — e
a simulação por baixo deles. Unity e Unreal Engine 5, em C#, C++ e Blueprints.

**Aberto a vagas de programação de gameplay e sistemas.** Estarei na **Brasil Game Show 2026**
com uma demo jogável — [portfólio](https://thequing.github.io/Portif-lio-Lucas-Antonino/)
· [currículo](https://drive.google.com/file/d/1FfMGEfl98RtVbwcl-iNgrTfCKKT5UiSN/view?usp=sharing)
· [LinkedIn](https://www.linkedin.com/in/lucas-antonino-7401b7201/)

| | Projeto | O que é meu | Stack |
|---|---|---|---|
| **Concluída** | **[Steam Veins](https://store.steampowered.com/app/3201780/Steam_Veins/)** — roguelike de ação 2D, Kimu Studios, Acesso Antecipado desde ago 2025 | Combate dos inimigos: resposta a dano, frames de invulnerabilidade, knockback, mudança de fase por limiar de vida, áudio FMOD | Unity · C# · FMOD |
| **Jogando agora** | **MidNight Memories** — horror em primeira pessoa estilo PSX. O Capítulo Um é a demo de 10–12 min do meu estande na BGS 2026 | Lidero o código numa dupla. Modo Investigação, arenas seladas por névoa, IA dos Pesadelos, o chefe Obsidian Wraith e **103 testes unitários** no núcleo de lógica | Unity · C# |
| **Em andamento** | **[Framed Drift](https://github.com/Thequing/Framed-Drift)** — RPG incremental de drift. Você não pilota: monta o carro, escolhe o risco e assiste | Solo. Simulador de corrida com **zero referências à engine** — 10.000 corridas em 0,06 s, **135 testes**, paridade offline/ao vivo de 0,06 % | Unity 6 · C# |
| **Em andamento** | **Hell's Kitchen** — tower defense em que o mapa cresce conforme você limpa: 4×4 salas, um chefe a cada três | Sistemas de gameplay sobre a GDD do time. Quatro tipos de dano contra armadura por inimigo, torres de quatro níveis e um harness headless que joga as 16 salas | Unity 6 · C# |
| **Concluída** | **[KuroNeko](https://github.com/Thequing/KuroNeko)** — visual novel movida por uma linguagem de script que escrevi | Solo. Parser narrativo de dez comandos sem dependência do Unity, mais um passo de diagnóstico que recusa scripts quebrados | Unity · C# |
| **Em breve** | **[Dino Girls](https://store.steampowered.com/app/3495120/Dino_Girls/)** — resort-builder incremental, Kimu Studios | Programador de gameplay: sistemas, mecânicas e as decisões técnicas que vêm junto | Unity · C# |

*MidNight Memories e Hell's Kitchen são projetos de time em repositórios privados. Há
vídeo dos dois, e de todos os outros, no [portfólio](https://thequing.github.io/Portif-lio-Lucas-Antonino/).*

**Formação:** Bacharelado em Tecnologia da Informação — UFRN · Game Design — Udemy ·
Administração de Banco de Dados — IFRS

</details>
