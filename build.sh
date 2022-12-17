#!/usr/bin/env bash

nativefier 'https://web.threema.ch' \
  --background-color '#11181d' \
  --icon 'icon.png' --counter --bounce \
  --min-width 440 --min-height 484 \
  --title-bar-style 'hiddenInset' \
  --inject 'inject.js' \
  --darwin-dark-mode-support \
  --single-instance \
