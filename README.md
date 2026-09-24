# Munhwao Mastery

Learn the Munhwao standard of Korean, the official standard of the Democratic People's Republic of Korea. Every word, sentence and lesson in this app uses the authentic Northern spellings, pronunciation and vocabulary. South Korean words appear only in the comparison reference, clearly labelled, so you never learn the wrong form.

The app runs fully in the browser with no account and no backend. It works offline once installed, and everything you own (progress, decks, notes) stays on your device inside your browser storage.

## What is inside

- A course of 140 lessons in 20 tiers, from the alphabet to literature.
- A landing page, a graded reading library with tap to translate, news, culture notes and a listening lab with dictation and shadowing.
- Speaking tools: pronunciation scoring, speech recognition, practice lines and a conversation partner powered by a large offline knowledge base.
- Reference tools: dictionary, North vs South comparison, frequency bands, example sentences, grammar encyclopedia, lesson search, flashcards, deck generator, SRS, Anki export, stroke order, handwriting canvas and an OCR scanner.
- Study tools: roadmap from A1 to C2, study plan, achievements, analytics and printable certificates.
- Data tools: export and import your backup, and push or pull it to your own sync server.
- Community and classroom modes that run locally on your device.

## Run it

There is no hosting needed at all. The app runs from these pages:

    https://xpdevs.github.io/Learn-Munhwao/

You can open that address on any device and use the whole course right away. If you prefer to run your own copy, any simple static server works. From the app folder run:

    python -m http.server 8000

Then open http://127.0.0.1:8000 in a browser. A plain double click on index.html also works for learning, but two things need a real web origin:

- Speech recognition needs http or https, plus Chrome or Edge.
- The install prompt and the service worker need http or https, so hosting the folder over a server is required for PWA install.

### Privacy

Everything about you stays on your device. Progress, notes, bookmarks and conversations live in your browser storage, and the app never phones home. The partner and the writing coach answer from a large offline knowledge base inside the app, so there is no model and no service to send your words to. The only optional network uses are the browser speech recognition when you tap the microphone and the scanner engine download on the first use of OCR, and neither of those sends your personal data anywhere.

## Install as an app

- Desktop and Android (Chrome): open the running site, use the install icon in the address bar, or use the Install button on the landing page.
- iOS: open the site in Safari, press the share button, then choose Add to Home Screen.
- Windows: open the site in Edge or Chrome and use Install app from the browser menu.

Once installed the app is available offline through the service worker. Progress is kept in your browser storage and travels with that browser only. Use Export to make a file backup, or Cloud sync to keep a copy on your own server.

## Offline audio

The course uses three sound layers in order:

1. A native mp3 when a matching file exists in the audio manifest.
2. The browser text to speech voice, set to the Korean language voice, with the Munhwao filter applied first.
3. Files you drop into the media folder, which the Media page lists and plays.

To add your own recorded voices, put mp3 files in the audio folder and add one line to audio/manifest.js mapping the Hangul text to the file name, or simply place audio and video files in the media folder and press Play on the Media page.

## Cloud sync

The Cloud sync tool pushes and pulls your backup against any address that stores a JSON body. A tiny reference server works like this:

```js
const http = require("http");
let store = {};
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.end();
  if (req.method === "POST") {
    let body = "";
    req.on("data", c => { body += c; });
    req.on("end", () => { store.data = body; res.end("ok"); });
    return;
  }
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(store));
}).listen(8000);
```

Set the Sync tool address to your server URL, press Push to upload and Pull to download.

## Partner, coach and the offline knowledge base

The speaking partner and the writing coach are not a connection to any model. They answer from a large offline knowledge base in data/ai.js, a plain list of patterns and replies with a real matching score. The more entries it has, the smarter the partner feels, and you can add as many as you like. Each entry holds keyword phrases in Hangul and English, the Munhwao reply, a translation and a topic tag.

The partner reads the partner knowledge and the facts list. The coach reads the coaching list and the facts list, while the Munhwao spelling rules always run on top. Nothing you type or say is sent anywhere, with or without an internet connection.

## Extend the data

All course content lives in plain files under the data folder. Edit any of them and refresh the page to see the change.

- data/vocab.js: the core course vocabulary, keyed by short ids.
- data/dict.js: dictionary extras, comparison pairs, frequency bands, example sentences and the grammar encyclopedia.
- data/library.js: the graded texts, the news items, the culture notes, the stroke examples and the media manifest.
- data/ai.js: the offline knowledge base for the partner and the coach.
- data/lessons.js: the 140 lessons in 20 tiers.
- data/grammar.js, data/hangeul.js, data/placement.js: rules, the alphabet and the placement test.

New dictionary words are marked as extra. A native speaker can later verify each entry in its note field and promote it into the course vocabulary.

## Verify the build

The data in this app is verified with a headless browser harness that loads the app, renders every page and opens every feature. To reproduce the checks:

1. Serve the folder, for example with python -m http.server 8000.
2. Open a Chrome install from a command line on the served site and inspect the page for errors, or keep the small _harness.html check page in the root and load it to print the pass list for data sizes, page renders and feature openings.

The current build passes all checks: the dictionary, the library, the news, the culture, the media list, the frequency bands, the example sentences, the grammar encyclopedia, the speaking lines, the stroke examples, every page and every tool feature.

## A note on the standard

Munhwao keeps initial r and n sounds, keeps the r sound in 랭면 and 려행, uses 륙 for the number six alone, uses 유월 in speech for June in both standards, and names the letters 기윽, 디읃 and 시읗. The course teaches these. Numbers use the Northern readings: 랭, 륙, 칠, 령 for zero.