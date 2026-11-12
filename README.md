# osu! preview

osu! preview is a browser extension that lets you preview the gameplay of a beatmap.

[Firefox Extension](https://addons.mozilla.org/en-CA/firefox/addon/osu-preview/)

[Chrome Extension](https://chrome.google.com/webstore/detail/osu-preview/higcadegkhhhjcljhpggammlhmlbdcmc?hl=en&authuser=0)

## Prerequisites

Use a supported Node.js LTS version for local development:

```shell
$ node -v
v20.x

$ npm -v
10.x
```

This project targets modern Chromium and Firefox extension APIs and is intended to be built with a current LTS runtime. Older Node/npm versions may still work for some setups, but they are not the supported baseline.

## Developing

Setup after cloning the repository:

```
npm install
```

### Chromium-based browsers

 - Run `npm run start:chrome`. This will create `build` directory inside the directory containing the extension.
 - Open up Chrome and navigate to `chrome://extensions`.
 - Enable `Developer mode`.
 - Click the `Load unpacked` button and select the previously mentioned `build` directory.
 - The extension is now ready to go!

All the changes made are compiled automatically as long as the `npm run start:chrome` script is running.

To build a production version of the package, run `npm run build:chrome`.

### Firefox

 - Run `npm run start:firefox`. This will create `build` directory inside the directory containing the extension.
 - Open up Firefox and navigate to `about:debugging`.
 - Click the `Load Temporary Add-on` button and select any file in the previously mentioned directory.
 - The extension is now ready to go!

All the changes made are compiled automatically as long as the `npm run start:firefox` script is running.

To build a production version of the package, run `npm run build:firefox`.

### Production builds

Run `npm run build:all`. Two files, `osu-preview-chrome.zip` and `osu-preview-firefox.zip`, are generated.

## License

[MIT](https://github.com/JerryZhu99/osu-preview/blob/master/LICENSE)
