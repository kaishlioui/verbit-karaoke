# Verbit Karaoke App

This app reprents my submition for the Verbit Technical Assignment of creating an app that plays a video with accompanying words/ transcription, while highlighting the current spoken word.

## Instalation Steps

Clone the project repository onto your computer using Git

```bash
git clone https://github.com/kaishlioui/verbit-karaoke.git

```

Go to the project folder

```bash
cd verbit-karaoke

```

Install the Npm packages and then run the local server

```bash
# Npm
npm install
npm run dev

```

## Library Choices

| Choice                                                 |                       Reason                        |
| ------------------------------------------------------ | :-------------------------------------------------: |
| [Vite](https://github.com/vitejs/vite)                 |            Fast Development Environment             |
| [Axios](https://github.com/axios/axios)                |             For creating an API client              |
| [Tanstack useQuery](https://github.com/TanStack/query) | Auto-Managed Queries with Auto Caching & Refetching |

### Technical Challenges

1. The big size of the array of paragraphs & words in each transcript.
2. Scroll to the current paragraph and highlight the current word from video.
3. Having a smooth transition between words because of the short duration between words some words were completely skipped.
4. Conflict between the random API and the caching of useQuery.

### Solutions

1. The use of Array.reduce to achieve the minimum time complexity of O(n) and collect all the words of the transcript in combination with useMemo to minimize recalculations.
2. Thanks to useRef, get access to the video params and the currentTime of playand compare that with the time of paragraph and use useRef to scroll the paragraph into view.
3. Use a delay value to add to the duration of the words and transition in css between words.
4. UseQuery caches the result of random API if no paramaters change but random API returns different values each time so it required invalidation of cache and conditional refetching.

### Future Steps

- Add Error Handling.
- Add Testing.
- Improve on UI/UX for example when Random API returns the same transcript currrently selected.
