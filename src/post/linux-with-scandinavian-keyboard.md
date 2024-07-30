---
title: How to use country-specific keyboards with Linux
description: How I configured Linux to behave with a Finnish keyboard layout.
date: 2020-09-01
luogo: Espoo, Finland
published: true
tags: ["linux", "autokey", "programming"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/sergi-kabrera-keyboard.jpg", "Knowledge and keyboards mean power", "700", "450" %}

I recently switched to using Linux in my desktop computer that I use in my daily work. Getting the keyboard to work correctly was probably the thing that took me the longest time to get right.

I am using an Apple keyboard with a Finnish key layout. I am using a Macbook as my mobile computer, and therefore I wanted to have a similar keyboard layout in this desktop computer. Switching between the two computers is more comfortable if things are not too different between these two computers that I use. Typing comes mostly from muscle memory, and typing speed suffers dramatically if inconsistency of keyboard layouts starts to cause muscle memory to fail when typing.

Let's get to the dirty details on how I got things going.

## KDE Settings

I am using KDE as my desktop package, and I have set it to use "Apple | Apple Aluminium (ANSI)" as the keyboard model in System Settings. I make the keyboard layout to be "Finnish (classic)".

One would expect this to be enough, and everything should "just work"s with the plain old Apple computers. But nope, with these settings I was not able to type square brackets, curly brackets, pipes, tildes etc. that one uses a lot when programming or working on the command line.

I got these "special characters" working using a tool called Autokey.

## Autokey

I am using [Autokey](https://github.com/autokey/autokey) for getting the special characters in their familiar places. Following shows all the Autokey scripts that I have in place:

```python
# at.py to send the '@' character
# Hotkey: <alt>+2
keyboard.send_keys("<backspace>@")

# backslach '\'
# Hotkey: <alt>+<shift>+7
keyboard.send_keys("<backspace>\\")

# left curly bracket '{'
# Hotkey: <alt>+<shift>+8
keyboard.send_keys("<backspace>{")

# right curly bracket '}'
# Hotkey: <alt>+<shift>+9
keyboard.send_keys("<backspace>}")

# dollar sign '$'
# Hotkey: <alt>+4
keyboard.send_keys("<backspace><shift>+4")

# pipe '|'
# Hotkey: <alt>+7
keyboard.send_keys("<backspace>|")

# left square bracket '['
# Hotkey: <alt>+8
keyboard.send_keys("<backspace>[")

# right square bracket ']'
# Hotkey: <alt>+9
keyboard.send_keys("<backspace>]")

# tilde '~'
# Hotkey: <alt>+]
keyboard.send_keys("~")
```

The scripts shown above will make my Apple keyboard with a Finnish key layout work like expected. There could be still some missing mappings that should be there, but I have not discovered them yet. I can easily add more mappings if I find out additional needs.

The mappings you will need for some other country-specific or regional layout will be different. The approach that I describe here will work for other layouts as well.

I am using `autokey-qt` which is a GUI tool that I use to enter the scripts I listed above. There is also a GTK version called `autokey-gtk` available for Gnome and other GTK based environments. One script is capable of handling only one character, and therefore you will need to have a separate script for each of them. You can record a hotkey shortcut for each of the scripts. In the screenshot below, you can see my `at.py` script, which I have mapped to hotkey `<alt>+2`.

{% image "./src/images/autokey.jpg", "Knowledge is power", "700", "450" %}

As you can see, the script sends two different keys in sequence:

1. a backspace to wipe out the character that my keyboard normally sends when I press ALT + 2.
2. the character I want to Autokey to emit when in press ALT + 2: the @ symbol.

## Make Autokey start when KDE starts

To finish the setup, we need to have Autokey starting automatically. To do so, I went to System Preferences / Autostart, and added `/usr/local/bin/autokey-qt` as a program that gets started automatically when the KDE desktop starts.
