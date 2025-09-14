# Beskrivning

Du får i denna uppgift bygga en nyhetssida med React. Följande krav finns:
* Artiklar skall visas på valfritt ställe
* Artiklar skall hämtas från DummyJSON API:et
* Som användare (inget inlogg) skall du kunna skapa nya artiklar på valfritt sätt och dessa sparas till local storage och visas också på valfritt ställe
* Man skall kunna radera egen-skapade artiklar men inte API-artiklar
* Toast meddelanden skall visas vid skapande och radering av artiklar (en toast är en slags temporär notifikation som visas på sidan, sök på internet för mer information)

En artikel består minst av en titel, ett textinnehåll och reaktioner (likes & dislikes). Likes och dislikes behöver endast kunna uppdateras för VG, vilket görs på den separata sidan (läs nedanför).

För VG behöver du också:
- Lägga till en ny sida som man skickas till om man trycker på en artikel, som visar all information om artikeln inklusive likes och dislikes som kan uppdateras
- Använda en valfri projektstruktur (namngivning på filer och mappar)
- Använda ett valfritt komponentbibliotek (ej css-bibliotek som Tailwind) 
- Använda react-router
- Använda global states med valfritt bibliotek (e.g. Zustand)

Inlämning

Resultatet lämnas in på Omniway med en git-länk. Se till att bjuda in läraren om repositoriet är privat.


*****************************************************************

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
