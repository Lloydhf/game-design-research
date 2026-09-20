# Session data dictionary

The input is a JSON array. An empty template is provided. One row represents one consented session; use random identifiers unrelated to accounts. No real data should be placed in this public repository.

| Field | Meaning |
| --- | --- |
| session_id | Unique random string, e.g. pilot-01; never a platform identifier |
| condition | A or B |
| duration_s | Observed duration, 0–300 inclusive |
| completed | Boolean: marked target reached within the window |
| early_exit | Boolean: participant stopped before the target/time limit |
| assisted | Boolean: observer provided help in the scored window |
| technical_invalid | Boolean: exposure invalidated by a documented technical problem |
| failures | Nonnegative integer; one per reset-causing failure |
| clarity, fairness, replay | Integer 1–5 or null if not answered |
| experience | novice, some, experienced, or undisclosed |
| device | keyboard-mouse, controller, touch, or undisclosed |

A valid unfinished session below 300 seconds must be marked early_exit. completed and early_exit cannot both be true. Technical invalidation reasons and private notes are kept separately. Independent success means completed and not assisted. Store a build identifier and the allocation method in the private study log.
