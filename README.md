# The First Five Minutes

**How should a parkour game teach its movement?**

A literature-based game design essay and a proposed pilot study for [Kuzey's portfolio](https://github.com/Lloydhf). The practical setting is a short, standalone section inspired by [DASHER](https://github.com/Lloydhf/Dasher), with [Unity Movement Lab](https://github.com/Lloydhf/unity-movement-lab) as a possible future testbed.

**Status:** research proposal and design essay, 20 September 2026. No participant study has been run. No original empirical findings, retention gains or peer review are claimed. The A/B variants described here are not yet implemented in either game.

## Abstract

Teaching a movement mechanic is a design problem that links instructions, level geometry and player expectations. This essay asks whether presenting a short instruction at the point of use can improve first-session progress compared with presenting the same instruction before play. Prior research suggests that tutorial effects depend on game complexity and player experience; it does not establish the best tutorial for DASHER. A small randomized pilot is proposed using an identical parkour segment, fixed controls and one manipulated factor: the timing of the instruction. The primary outcome is the proportion reaching a predefined target within five minutes. Completion time, failures and perceived clarity are secondary measures. The repository supplies a protocol, a data dictionary and an offline analysis utility. It is designed to document uncertainty and guide a later level-design iteration, rather than claim a general solution from a small sample.

## Read in this order

1. [Türkçe makale: İlk Beş Dakikayı Tasarlamak](paper/ilk-bes-dakika.md)
2. [Proposed pilot protocol](study/PROTOCOL.md)
3. [Data dictionary](study/DATA-DICTIONARY.md)
4. [Offline analysis tool](analysis/summarize.cjs)
5. [Sources and how they are used](references/SOURCES.md)

## Reproduce the analysis tool

Requires Node.js 22+. No packages, credentials or network connection are needed.

```sh
node --test analysis/summarize.test.cjs
node analysis/summarize.cjs data/template.json
```

The template is deliberately empty. Synthetic rows exist only inside tests and must never be presented as participant results. Real participant-level files belong outside this repository; publish only consented, appropriately aggregated results.

## Contribution and authorship

Prepared for Kuzey (Lloydhf) with OpenAI Codex assistance for literature discovery, drafting, protocol design and the analysis utility. The topic was chosen to connect the portfolio's existing projects. Kuzey has not yet independently reviewed the essay, conducted the pilot or supplied a personal interpretation of results. This is a public working draft, not a submitted university assignment or a peer-reviewed publication.

## Other questions worth investigating later

| Question | Change to compare | Main outcome | Why later? |
| --- | --- | --- | --- |
| Do checkpoints make failure feel fairer? | One checkpoint vs. start-only reset | Voluntary retry and frustration | Changes both difficulty and lost progress |
| Does stronger jump feedback improve control clarity? | Minimal vs. audiovisual landing feedback | Timing errors and perceived control | Audio, animation and input timing must be separated |
| Do visual route cues reduce hesitation? | Same geometry with/without shape-based cues | Wrong turns and pause duration | Needs a stable route and careful event definitions |

These are proposals, not completed studies.
