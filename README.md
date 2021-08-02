# Lichess Speedrun
A tool to ethically perform speedruns on lichess
## How do I use it?
Inside the preferences for the addon, there will be a settings page where you can modify options such as the default starting rating. There's also a toolbar icon that shows a popup with your speedrun ratings, these ratings will also be shown on the lichess website, it will appear as if these are your actual ratings.
## How does it work?
This extension works by maintaining a separate rating to your normal rating on the lichess website. While the extension is enabled, instances of your normal rating will be repalced by your virtual speedrun rating throughout the site. This rating can also update during casual games, making it seem as if the user is playing a rated game while the opponent doesn't have to. This makes it easier to pair with lower-rated players who may be concerned about losing their rating.

Hopefully, it'll also be possible to add viewers of the user's stream to the pool of players, helping to boost engagement.

# Technical stuff
## Build instructions
Build with
```bash
npm install
npm run build
```
## Testing
### Firefox
1. In firefox, go to the [`about:debugging`](about:debugging) page by typing it into the URL bar and pressing enter
2. Go to the `This Firefox` section and click `Load Temporary Add-on`
3. Navigate to the folder containing the extension and select the `manifest.json` file
The plugin should now be loaded into the browser for testing.
### Chrome
1. In chrome, go to [`chrome://extensions`](chrome://extensions) by typing it into the URL bar and pressing enter
2. Turn on developer mode and click `Load unpacked`
3. Navigate to the folder containing the extension and select it
The plugin should now be loaded into the browser for testing.
