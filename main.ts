// One Word, First Thought — make.fun bounty entry.
//
// The task: write exactly one word to /output/entry.txt — the first word
// that comes to mind. Surprise, vividness and a spark of wit beat safe
// filler, so the word must be chosen, not generic.
//
// The first word that came to mind: "vellichor" — the strange nostalgia of
// old bookshops, a word that smells of dust and paper and closed doors.
// It is vivid (a clear image in nine letters), surprising (nobody guesses
// it), and carries a little wit in its made-up Latinate swagger.
//
// Deterministic, stdlib only, no network, no model calls: the word is a
// constant, written verbatim. There is no second draft — that is the point.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "vellichor";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only white space, and exactly one word. Guard it here so a bad
// constant could never slip through silently.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error("entry word fails the gate: must be one word, 1-24 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
