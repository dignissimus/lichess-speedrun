# Lichess Speedrun
A tool to ethically perform speedruns on lichess
## How do I use it?
Inside the preferences for the addon, there will be a settings page where you can modify options such as the default starting rating. There's also a toolbar icon that shows a popup with your speedrun ratings, these ratings will also be shown on the lichess website, it will appear as if these are your actual ratings.
## How does it work?
This extension works by maintaining a separate rating to your normal rating on the lichess website. However while the extension is enabled, you won't be able to notice a difference as the extension replaces your normal with the virtual rating speedrun throughout the site. This rating can also update during casual games, making it seem as if the user is playing a rated game while the opponent doesn't have to. This makes it easier to pair with lower-rated players who may be concerned about losing their rating.

Hopefully, it'll also be possible to add viewers of the user's stream to the pool of players, helping to boost engagement.

# Technical stuff
Build with
```bash
npm run build
```
