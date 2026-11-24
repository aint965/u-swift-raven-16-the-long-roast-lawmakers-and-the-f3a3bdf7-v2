# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/aint965/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-v2/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/aint965/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-v2/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

A make.fun program/v1 entry for the competition [The Long Roast: Lawmakers and the File They Cannot Convert](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7). The program writes a single satirical sentence roasting a lawmaker who writes sweeping AI legislation but cannot convert a file to PDF himself.

## The sentence

> The congressman who authored the 200-page AI Safety Act just emailed his chief of staff a Word file named FINAL_final_v7 with the subject line: please convert to PDF.

## How to run

```sh
node main.ts
```

The program writes the sentence to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set), with no trailing newline. It validates the sentence first: 1–320 characters, exactly one sentence ending with a period, a single line, and no surrounding whitespace.
