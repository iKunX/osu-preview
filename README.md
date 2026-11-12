# osu! preview

Preview an osu! beatmap right from its page. Open the extension popup to see the map in action.

[Get it for Chrome](https://chrome.google.com/webstore/detail/osu-preview/higcadegkhhhjcljhpggammlhmlbdcmc?hl=en&authuser=0) · [Get it for Firefox](https://addons.mozilla.org/en-CA/firefox/addon/osu-preview/)

## Development

### You’ll need

- Node.js 20.x
- npm 10 or later

Install the dependencies:

```sh
npm install
```

### Run locally

Start the development build for your browser:

```sh
npm run start:chrome
# or
npm run start:firefox
```

Then load the generated `build` folder as an unpacked extension:

- **Chrome:** open `chrome://extensions`, enable Developer mode, then choose **Load unpacked**.
- **Firefox:** open `about:debugging#/runtime/this-firefox`, choose **Load Temporary Add-on**, and select a file from `build`.

The development build recompiles as you make changes.

### Build a release

```sh
npm run build:chrome
npm run build:firefox
```

Each command creates a browser-specific ZIP archive in the project folder.

## License

[MIT](LICENSE)
