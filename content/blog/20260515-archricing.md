---
title: Arch Linux and My Ricing Experience
description: Hyprland and Waybar and Gruvbox oh my!
date: "2026-05-15"
---

I have a bad habit of impulsively diving headfirst into a fun personal project instead of doing my very important schoolwork. But I have a very good defence - my fun personal project feeds the brain's desire for dopamine. That being said, my diploma course ends in 4 weeks and I am extremely behind. Send help! :D

So what have I been doing instead of my important diploma assignments? I've been working on my rice for my Arch-Hyprland laptop.

[![Nice Gruvbox Rice](/images/20260515-hyprland.png)](/images/20260515-hyprland.png)

## How did we get here?

I'm an avid visitor of the [r/unixporn](https://reddit.com/r/unixporn) subreddit. It's this wonderful showcase of passionate Linux users taking the time to harness the full potential of window managers, bar software and custom-written software to turn their computer into a visual masterpiece. I've spent a long time marveling at other people's setups; part of why I decided to get into Linux again was just so I could try my hand at making something myself. So, a few weeks ago, I decided to bite the bullet and give it my best go.

There's a few decisions I had to make before I got started with my rice. Namely, what Linux distribution would I use, and which window manager would help me get the setup I want? I decided to go with Arch Linux (i use arch btw) and Hyprland - Arch, because I wanted a truly built-by-hand installation, and Hyprland, because it sports an expansive and in-depth level of configuration and customisation. This decision was made just hours after Hyprland dropped the 0.55 update, which transitioned the configuration system from **.conf** files to Lua libraries and functions. I didn't know this until after I started setting up my config files, so it was an unexpected drop into the deep end of learning Lua! This would end up proving useful for when I configured Neovim.

I'd like to walk you through my process for carrying out my rice as I went about it, categorised by software. If you're interested in seeing my code, you can check out my [dotfiles repo](https://github.com/rackodo/dotfiles), and you can find pictures on my [r/unixporn post](https://www.reddit.com/r/unixporn/comments/1tbmq48/hyprland_nice_gruvbox/).

## Hyprland (Window Manager)

From the get go, I wanted to pursue a modularised way of managing my configuration files for each component of the rice. For my Hyprland setup, I took the [example configuration](https://github.com/hyprwm/Hyprland/blob/main/example/hyprland.lua) from the Hyprland repo and split it into separate **.lua** files:

- **00** - Monitors
- **01** - Programs and Autostart
- **02** - Appearance
- **03** - Input and Keybindings
- **04** - Windows and Workspaces

And there's also a template.txt file that I used to make creating each file's headers easier. These modules are stored in a **land/** directory, and read by the **hyprland.lua** file that lives in **~/.config/hypr**. Having Hyprland configured like this means I can very easily make changes to a specific aspect of the setup without needing to filter through one big, disorganised config file. I know exactly where I can find a given setting, and where to put new settings later on.

Each of these files are relatively small and consist mostly of the default config. Most of my changes were related to monitor configuration, changing colours and gaps between windows, or adding new programs and keybinds, like a key combo for taking screenshots using [grim](https://sr.ht/~emersion/grim/) and [slurp](https://github.com/emersion/slurp). Otherwise, it's 90% the example config.

I use Hyprpaper to manage the wallpaper. It's just one image, a Gruvbox-ified render of Cyberpunk Girl by [Gharliera](https://www.instagram.com/gharliera/). I got this particular image from a collection of gruvbox wallpapers maintained on [Github](https://github.com/AngelJumbo/gruvbox-wallpapers/blob/main/wallpapers/minimalistic/ALLqk82.png).

## Kitty (Terminal)

Kitty sees even less customisation!

- **00** - Theme
- **01** - Font

There isn't much to say here. My kitty configuration uses the Gruvbox Dark theme, and the Jetbrains Mono Nerd Font. This choice of palette and font persists throughout my entire rice.

## Shell (zsh)

Zsh is one of the two biggest setups in my rice, next to Neovim. This setup was copied mostly from [Dreams of Autonomy's Zenful Zsh setup](https://www.youtube.com/watch?v=ud7YxC33Z3w), but adapted to my modular methodology.

- **00** - Zinit
- **01** - Plugins
- **02** - Keybinds
- **03** - Path
- **04** - History
- **05** - Completions
- **06** - Aliases
- **07** - Integrations
- **08** - Miscellaneous

**NOTE: Zinit and its Plugins**

This rice actually marks my transition from the fish shell to zsh. For a while, I used Fish because of its builtin autocompletion and autosuggestion features. These features made re-running commands a breeze and saved time starting development environments for my various web developments; I didn't need to fully write out **npm run dev**, rather I could just type **npm** and tab my way to the full command without a second thought. My reliance on this functionality caused a lot of friction in situations where I wasn't using Fish, where the tabbing muscle memory didn't apply, so I didn't bother exploring other options for a while.

Imagine my surprise when I learn that zsh _does_ have this functionality, just not built-in. In his video, Elliott (Dreams of Autonomy) showcases Zinit plugins that exactly copied the autocompleting and autosuggesting I was used to in Fish. Were it not for those two plugins, I probably wouldn't have even bothered using zsh. And now that I'm used to working with zsh, I can honestly barely notice the difference.

**END NOTE**

Alongside zsh I have three other packages installed to further increase the usefulness of my shell. [Oh My Posh](https://ohmyposh.dev) turns my prompt into an on-hand resource of information, like my current working directory, git status, and the current npm version - useful for my web development. [exa](https://github.com/ogham/exa) is an **ls** replacement that comes with colours, recognises symbolic links and git. [Zoxide](https://github.com/ajeetdsouza/zoxide) is a **cd** replacement that knows what directory I'm looking for based on my past **cd** history, so I don't have to use the full path - just the name of the folder that I want (**cd foo**, instead of **cd very/long/path/leading/to/foo**).

Each of the config files do what they say on the tin.

## Waybar (Status Bar)

My waybar setup does not follow my modular methodology, mostly because it _can't_. And I don't really need it to, I don't see myself changing it very often. My actual widgets configuration is 90% the example config, aside from shuffling around the organisation and removing the hardware monitors. My style configuration is a VERY different story!

I used [OriginCode's configuration](https://github.com/Alexays/Waybar/wiki/Examples#origincodes-configuration) as inspiration. I liked how each widget was a separate little box in the row, you could take any one widget out and it would still look like a complete collection - minimal, yet stylish and functional. With this in mind, I tried to apply a similar aesthetic to my own setup.

[![Waybar](/images/20260515-waybar.png)](/images/20260515-waybar.png)

Each element tells me what I want to know without intruding too much on my work - what workspace I'm in, my current focused window, my local IP, device details like speaker volume, screen brightness, battery charge... and of course, the current time. The tray widget doesn't exist until there's tray icons to occupy it, and they appear to the right of the window name. With this setup, I'm not easily distracted from my current task. There's no list of open apps for me to be able to switch between to check on things, there's no flashing elements pulling my attention. It's a layout designed to enhance my focus, and it's organised exactly how I want it.

Plus it looks good.

## The Experience

I realised something while writing this blog post.

Ricing isn't a project that needs to be prepared for. It's a process that involves inspiration, be it from other people's rices, or fiction, or from one's own imagination. I initially started out wanting a setup that I'd built from the ground up, using my own ideas and config files, but instead I came to lean on example configurations and the ideas of other people who've already done what I wanted to do. The entirety of my zsh configuration comes directly from Dreams of Autonomy, and my waybar is modelled after OriginCode's.
