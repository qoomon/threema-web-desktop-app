#!/usr/bin/env bash

nativefier 'https://web.threema.ch' \
  --icon 'icon.png' --counter --bounce \
  --min-width 440 --min-height 484 \
  --darwin-dark-mode-support \
  --zoom 0.9 \
  --inject 'app.css' \
  --single-instance \
  # --disable-dev-tools
