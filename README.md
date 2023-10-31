# Tauri + React

This template should help get you started developing with Tauri and React in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Oppsett av utviklermiljø lokalt

### Dependencies 🛠️
for å jobbe med Tauri, trenger man å rust og cargo.
Det får man tak i her: `https://www.rust-lang.org/tools/install`.

dersom `node_modules` ikke ligger i prosjektet så kjør
```sh
npm install
```
for å få tak i disse.

Deretter kjør:
```sh
npm run tauri dev
```
frontenden kjører på port `1420` som default og kan rendres i nettleser nesten med en gang.

rust delen som bygges med cargo bruker litt lenger tid ved første bygg. Desktop appen dukker opp på skrivebordet så fort cargo er ferdig med å bygge.

Rust brukes bare som backend for appen, så dersom dette blir overkill, kan man sikkert vurdere electron. Electron har bare en tendens til å være litt mer krevende på minnebruk siden av ting 🔥