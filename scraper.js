const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Fonction de délai aléatoire
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fonction de scraping pour récupérer et sauvegarder les items
async function scrapePatchNote(game, url, outputFile) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    try {
        console.log(`Démarrage du scrape pour ${url} (${game})...`);
        const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        console.log(`Délai aléatoire de ${randomDelay}ms appliqué avant la récupération.`);
        await delay(randomDelay);

        const { data: html } = await axios.get(url, { headers });
        const $ = cheerio.load(html);
        const scriptContent = $('#__NEXT_DATA__').html();

        if (!scriptContent) {
            console.error(`La balise script avec l'ID "__NEXT_DATA__" est introuvable pour ${url}.`);
            return;
        }

        const jsonData = JSON.parse(scriptContent);
        const blades = jsonData.props?.pageProps?.page?.blades;

        if (!blades) {
            console.error(`La propriété "props.pageProps.page.blades" est introuvable pour ${url}.`);
            return;
        }

        const articleCardItems = blades
            .filter(blade => blade.type === 'articleCardGrid')
            .map(blade => blade.items)
            .flat();

        if (!articleCardItems.length) {
            console.error(`Aucun item trouvé dans les "articleCardGrid" pour ${url}.`);
            return;
        }

        const dataDir = path.join(__dirname, 'data', game);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const outputPath = path.join(dataDir, outputFile);
        fs.writeFileSync(outputPath, JSON.stringify(articleCardItems, null, 2), 'utf8');
        console.log(`Les items pour ${url} (${game}) ont été sauvegardés dans ${outputPath}`);
    } catch (error) {
        console.error(`Une erreur est survenue lors du scraping de ${url} (${game}) :`, error.message);
    }
}

// Définition des URLs par jeu
const games = {
    lol: {
        urls: {
            allNewsFr: 'https://www.leagueoflegends.com/fr-fr/news/',
            allNewsEn: 'https://www.leagueoflegends.com/en-us/news/',
            patchNoteFr: 'https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/',
            patchNoteEn: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
            gameUpdatesFr: 'https://www.leagueoflegends.com/fr-fr/news/game-updates/',
            gameUpdatesEn: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
            esportsFr: 'https://www.leagueoflegends.com/fr-fr/news/esports/',
            esportsEn: 'https://www.leagueoflegends.com/en-us/news/esports/',
            devFr: 'https://www.leagueoflegends.com/fr-fr/news/dev/',
            devEn: 'https://www.leagueoflegends.com/en-us/news/dev/',
            loreFr: 'https://www.leagueoflegends.com/fr-fr/news/lore/',
            loreEn: 'https://www.leagueoflegends.com/en-us/news/lore/',
            mediaFr: 'https://www.leagueoflegends.com/fr-fr/news/media/',
            mediaEn: 'https://www.leagueoflegends.com/en-us/news/media/',
            communityFr: 'https://www.leagueoflegends.com/fr-fr/news/community/',
            communityEn: 'https://www.leagueoflegends.com/en-us/news/community/',
        }
    },
    valorant: {
        urls: {
            allNewsFr: 'https://playvalorant.com/fr-fr/news/',
            allNewsEn: 'https://playvalorant.com/en-us/news/',
            patchNoteFr: 'https://playvalorant.com/fr-fr/news/tags/patch-notes/',
            patchNoteEn: 'https://playvalorant.com/en-us/news/tags/patch-notes/',
            gameUpdatesFr: 'https://playvalorant.com/fr-fr/news/game-updates/',
            gameUpdatesEn: 'https://playvalorant.com/en-us/news/game-updates/',
            communityFr: 'https://playvalorant.com/fr-fr/news/community/',
            communityEn: 'https://playvalorant.com/en-us/news/community/',
            esportsFr: 'https://playvalorant.com/fr-fr/news/esports/',
            esportsEn: 'https://playvalorant.com/en-us/news/esports/',
            devFr: 'https://playvalorant.com/fr-fr/news/dev/',
            devEn: 'https://playvalorant.com/en-us/news/dev/',
        }
    },
    tft: {
        urls: {
            allNewsFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/',
            allNewsEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/',
            patchNoteFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/tags/patch-notes/',
            patchNoteEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/tags/patch-notes/',
            gameUpdatesFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/game-updates/',
            gameUpdatesEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/',
            esportsFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/esports/',
            esportsEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/',
            devFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/dev/',
            devEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/dev/',
            loreFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/lore/',
            loreEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/lore/',
            mediaFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/media/',
            mediaEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/media/',
            communityFr: 'https://teamfighttactics.leagueoflegends.com/fr-fr/news/community/',
            communityEn: 'https://teamfighttactics.leagueoflegends.com/en-us/news/community/',
        }
    },
    "2xko": {
        urls: {
            allNewsFr: 'https://2xko.riotgames.com/fr-fr/news/',
            allNewsEn: 'https://2xko.riotgames.com/en-us/news/',
        }
    },
    wildrift: {
        urls: {
            allNewsFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/',
            allNewsEn: 'https://wildrift.leagueoflegends.com/en-us/news/',
            patchNoteFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/tags/patch-notes/',
            patchNoteEn: 'https://wildrift.leagueoflegends.com/en-us/news/tags/patch-notes/',
            gameUpdatesFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/game-updates/',
            gameUpdatesEn: 'https://wildrift.leagueoflegends.com/en-us/news/game-updates/',
            esportsFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/esports/',
            esportsEn: 'https://wildrift.leagueoflegends.com/en-us/news/esports/',
            devFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/dev/',
            devEn: 'https://wildrift.leagueoflegends.com/en-us/news/dev/',
            communityFr: 'https://wildrift.leagueoflegends.com/fr-fr/news/community/',
            communityEn: 'https://wildrift.leagueoflegends.com/en-us/news/community/',
        }
    },
};


// Lancer les scrapes pour chaque jeu et URL
async function executeScrapes() {
    console.log('Démarrage des scrapes...');
    for (const [game, { urls }] of Object.entries(games)) {
        for (const [key, url] of Object.entries(urls)) {
            const outputFile = `${key}.json`; // Utiliser la clé comme nom de fichier
            await scrapePatchNote(game, url, outputFile);
        }
    }
    console.log('Tous les scrapes sont terminés.');
}

// Exécution
executeScrapes();
