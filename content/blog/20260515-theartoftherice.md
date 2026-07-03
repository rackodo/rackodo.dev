---
title: The Art of the Linux Rice
description: Hyprland and Waybar and Gruvbox oh my!
date: "2026-05-15"
---

I have a bad habit of impulsively diving headfirst into a fun personal project instead of doing my very important schoolwork. But I have a very good defence - my fun personal project feeds the brain's desire for dopamine. That being said, my diploma course ends in 4 weeks and I am extremely behind. Send help! :D

So what have I been doing instead of my important diploma assignments? I've been working on my rice for my Arch-Hyprland laptop.

[![Nice Gruvbox Rice](/images/20260515-hyprland.png)](/images/20260515-hyprland.png)

## How did we get here?

I'm an avid visitor of the [r/unixporn](https://reddit.com/r/unixporn) subreddit. It's this wonderful showcase of passionate Linux users taking the time to harness the full potential of window managers, bar software and custom-written software to turn their computer into a visual masterpiece. I've spent a long time marveling at other people's setups; part of why I decided to get into Linux again was just so I could try my hand at making something myself. So, a few weeks ago, I decided to bite the bullet and give it my best go.

In my first draft of this blog post, I included a step by step breakdown of each section of my dotfiles for this rice. But it wasn't very fun to read, and while writing I had a much better idea for what I wanted to talk about. If you're interested in seeing actual dotfiles, they're available on my [GitHub](https://github.com/rackodo/dotfiles). Instead, I wanna talk about the way I went about putting together my ricing; my sources of inspiration, my learning journey... and the change in perspective I experienced while working on it.

I started my rice the same I started any of my projects - with a vision. I knew how I wanted the windows to look, I knew the colour palette I wanted to utilise (Gruvbox, in this case), and I knew random specific details like what display manager I was going to use. But that's all I had prepared, as I wiped my EndeavourOS install off my laptop and replaced it with a barebones Arch Linux install. It started off relatively simple; installing Hyprland, Waybar and Kitty to create the base of my rice, with Firefox as a web browser and Thunar as my file manager.

I started by configuring Hyprland. At the time, the Hyprland team had just released version 0.55, which made the switch from their deprecated hyprlang language to a Lua-based system.
