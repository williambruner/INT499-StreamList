# StreamList | INT499 Week 1

React + Vite starter for the individual EZTechMovie StreamList application.

## Run it
1. Open this folder in VS Code and open a terminal.
2. Run `npm install` (requires internet access).
3. Run `npm run dev` and open the local URL printed by Vite.
4. Press **F12** in Chrome/Edge and open the **Console** tab.
5. Enter a movie/show title and click **Add title**. Verify that `StreamList user input: ...` appears in the console.
6. Click **Movies**, **Cart**, **About**, and **StreamList** to verify routing works without full reloads.
7. To check a production build, run `npm run build`.

## Why these pages are blank
Per the official INT499 guide, Movies and Cart are reserved for Week 4 and About for Week 5. Their routes exist now, but their content is intentionally empty.

## Component structure
- `App.jsx` navigation and routes
- `components/NavBar.jsx` persistent responsive menu
- `components/StreamForm.jsx` controlled input and `onAddTitle` callback prop
- `pages/StreamList.jsx` main page and console logging handler
- `pages/Placeholder.jsx` blank future pages

## GitHub / video
Push this folder to a GitHub repository. Never upload `node_modules`; `.gitignore` excludes it. The assignment also requires you to record a 2–5 minute ScreenPal demo yourself and provide its link. This zip is not itself a video or a GitHub upload.

## Next steps
Week 2 will add on-page listing, editing, deleting, completion, and more user events. Week 3 will add local persistence/APIs. Do not represent those as Week 1 features.
