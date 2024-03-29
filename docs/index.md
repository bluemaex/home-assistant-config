# 👋 Hello there and welcome to maexhome! 🏚

This website contains reference documentation to my Home Assistant installation. This repo (should) contain all important documentation about how I set up my smart home. Hopefully it can be also useful reference to you - if not then hopefully for me, so I can remember things :D

Issues, questions and pull requests are welcome!

## History

📝

## Hardware

🆘

## Software

❓

### Supervisor add-ons

I run a [Supervised install](https://www.home-assistant.io/getting-started/) with the following add-ons:

- [Cloudflared](9074a9fa) 2.0.7
- [MariaDB](core) 2.5.1
- [Mosquitto broker](core) 6.1.2
- [Rclone](c1f54215) 3.0.10
- [Studio Code Server](a0d7b954) 5.2.1
- [Traefik](c1f54215) 4.1.4
- [Zigbee2MQTT](45df7312) 1.27.0-1

### HACS

In addition to the pre-installed integrations and lovelace cards, HACS is used to managed and install additional
functionality.

#### Integrations

| Name                            | Installed Version | Documentation                                            |
| ------------------------------- | ----------------- | -------------------------------------------------------- |
| Apple Tv Beta                   | v3.0.1            | https://github.com/postlund/hass-atv-beta                |
| Bvg (Berlin Public Transport)   | v0.3.1            | https://github.com/ryanbateman/bvg-sensor                |
| Generate Readme                 | 0.5.0             | https://github.com/custom-components/readme              |
| HACS                            | 1.26.2            | https://github.com/hacs/integration                      |
| Jellyfin                        | v1.1.1            | https://github.com/koying/jellyfin_ha                    |
| Libratone Zipp                  | 3.0.5             | https://github.com/Chouffy/home_assistant_libratone_zipp |
| Passive Ble Monitor Integration | 9.1.1             | https://github.com/custom-components/ble_monitor         |
| Presence Simulation             | v2.2              | https://github.com/slashback100/presence_simulation      |
| Watchman                        | v0.6.0            | https://github.com/dummylabs/thewatchman                 |

#### Lovelace

| Name                   | Installed Version | Documentation                                               |
| ---------------------- | ----------------- | ----------------------------------------------------------- |
| Auto Entities          | 1.11.0            | https://github.com/thomasloven/lovelace-auto-entities       |
| Bar Card               | 3.2.0             | https://github.com/custom-cards/bar-card                    |
| Button Card            | v3.4.2            | https://github.com/custom-cards/button-card                 |
| Decluttering Card      | 0.6.3             | https://github.com/custom-cards/decluttering-card           |
| Fold Entity Row        | 2.2.0             | https://github.com/thomasloven/lovelace-fold-entity-row     |
| Mini Graph Card        | v0.11.0           | https://github.com/kalkih/mini-graph-card                   |
| Mini Media Player      | v1.16.4           | https://github.com/kalkih/mini-media-player                 |
| Multiple Entity Row    | v4.4.1            | https://github.com/benct/lovelace-multiple-entity-row       |
| Simple Weather Card    | v0.8.3            | https://github.com/kalkih/simple-weather-card               |
| Slider Entity Row      | 17.2.1            | https://github.com/thomasloven/lovelace-slider-entity-row   |
| Template Entity Row    | 1.3.0             | https://github.com/thomasloven/lovelace-template-entity-row |
| Vertical Stack In Card | v0.4.2            | https://github.com/ofekashery/vertical-stack-in-card        |

#### Themes

| Name                                | Installed Version | Documentation                                     |
| ----------------------------------- | ----------------- | ------------------------------------------------- |
| Ios Themes Dark Mode And Light Mode | v2.8.0            | https://github.com/basnijholt/lovelace-ios-themes |
