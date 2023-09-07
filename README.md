# 👋 Hello there and welcome to maexhome! 🏚

This is my personal Home Assistant configuration trying to make my home a bit smarter by automating certain repeating stuff.

Nothing is yet documented really, I really should do this at a certain point. This repository exists mostly for my own amusement - like all Home Assistant Instances this is a work in progress, but maybe you find something useful here :)

## Table of content

- [Supervisor add-ons](#supervisor-add-ons)
- [Devices](#devices)
- [Custom Integrations](#hacs)

## Devices

✍️📄🆘

## Supervisor add-ons

I run a [Supervised install](https://www.home-assistant.io/getting-started/) with the following add-ons:
- [chrony](a0d7b954) 2.6.0
- [Cloudflared](9074a9fa) 4.2.6
- [ESPHome](5c53de3b) 2023.8.3
- [File editor](core) 5.6.0
- [Grafana](a0d7b954) 9.0.3
- [Grafana Loki](c1f54215) 2.8.3-2
- [Grafana Loki](local) 2.8.3-2
- [Grafana Loki](c1f54215) 3.0.2
- [Grafana Promtail](c1f54215) 3.0.2
- [healthchecks](c1f54215) 3.0.1
- [MariaDB](core) 2.6.1
- [Mosquitto broker](core) 6.3.1
- [Rclone](c1f54215) 3.0.12
- [Samba share](core) 10.0.2
- [Studio Code Server](a0d7b954) 5.10.1
- [syslog-ng](c1f54215) 5.0.2
- [Terminal & SSH](core) 9.7.1
- [Traccar](a0d7b954) 0.20.0
- [Traefik](c1f54215) 4.1.6
- [UnPoller](c1f54215) 3.0.6
- [Uptime Kuma](a0d7b954) 0.8.0
- [Vaultwarden (Bitwarden)](a0d7b954) 0.19.4
- [Victoria Metrics](c1f54215) 1.9.13-2
- [Zigbee2MQTT](45df7312) 1.33.0-1

## HACS

In addition to the pre-installed integrations and lovelace cards, HACS is used to managed and install additional
functionality.

### Integrations
Name  | Installed Version | Documentation
----  | ----------------- | -------------
Deutsche Bahn | 2.0.4 | https://github.com/FaserF/ha-deutschebahn
Generate Readme | 0.5.0 | https://github.com/custom-components/readme
HACS | 1.32.1 | https://github.com/hacs/integration
Libratone Zipp | 3.0.5 | https://github.com/Chouffy/home_assistant_libratone_zipp
Powercalc | v1.9.3 | https://github.com/bramstroker/homeassistant-powercalc
Presence Simulation | v3.1 | https://github.com/slashback100/presence_simulation
Watchman | v0.6.1 | https://github.com/dummylabs/thewatchman

### Lovelace
Name  | Installed Version | Documentation
----- | ----------------- | -------------
Auto Entities | 1.12.1 | https://github.com/thomasloven/lovelace-auto-entities
Bar Card | 3.2.0 | https://github.com/custom-cards/bar-card
Button Card | v4.1.1 | https://github.com/custom-cards/button-card
Decluttering Card | v1.0.0 | https://github.com/custom-cards/decluttering-card
Fold Entity Row | 2.2.0 | https://github.com/thomasloven/lovelace-fold-entity-row
Kiosk Mode | v3.1.0 | https://github.com/NemesisRE/kiosk-mode
Mini Graph Card | v0.11.0 | https://github.com/kalkih/mini-graph-card
Mini Media Player | v1.16.5 | https://github.com/kalkih/mini-media-player
Multiple Entity Row | v4.5.0 | https://github.com/benct/lovelace-multiple-entity-row
Simple Weather Card | v0.8.5 | https://github.com/kalkih/simple-weather-card
Slider Entity Row | 17.3.0 | https://github.com/thomasloven/lovelace-slider-entity-row
Template Entity Row | 1.3.2 | https://github.com/thomasloven/lovelace-template-entity-row
Vertical Stack In Card | v0.4.4 | https://github.com/ofekashery/vertical-stack-in-card

### Themes
Name  | Installed Version | Documentation
----- | ----------------- | -------------

