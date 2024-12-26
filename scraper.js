const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Fonction de délai aléatoire
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fonction de scraping pour récupérer et sauvegarder les items
async function scrapePatchNote(url, outputFile) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    try {
        console.log(`Démarrage du scrape pour ${url}...`);
        // Délai aléatoire entre 1 et 5 secondes
        const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        console.log(`Délai aléatoire de ${randomDelay}ms appliqué avant la récupération.`);
        await delay(randomDelay);

        // Récupérer le contenu HTML de la page
        const { data: html } = await axios.get(url, { headers });
        const $ = cheerio.load(html);

        // Sélectionner la balise script avec l'ID "__NEXT_DATA__"
        const scriptContent = $('#__NEXT_DATA__').html();

        if (!scriptContent) {
            console.error('La balise script avec l\'ID "__NEXT_DATA__" est introuvable.');
            return;
        }

        // Convertir en objet JSON
        const jsonData = JSON.parse(scriptContent);

        // Extraire les blades
        const blades = jsonData.props?.pageProps?.page?.blades;

        if (!blades) {
            console.error('La propriété "props.pageProps.page.blades" est introuvable.');
            return;
        }

        // Filtrer et récupérer uniquement les objets de type "articleCardGrid"
        const articleCardItems = blades
            .filter(blade => blade.type === 'articleCardGrid') // Garder uniquement les objets de type "articleCardGrid"
            .map(blade => blade.items) // Extraire les items
            .flat(); // Applatir si plusieurs arrays "items" existent

        if (!articleCardItems.length) {
            console.error('Aucun item trouvé dans les "articleCardGrid".');
            return;
        }

        // Créer le dossier "data" si il n'existe pas
        const dataDir = path.join(__dirname, 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        // Sauvegarder les items dans un fichier JSON dans le dossier "data"
        const outputPath = path.join(dataDir, outputFile);

        // Sauvegarder les items dans un fichier JSON
        fs.writeFileSync(outputPath, JSON.stringify(articleCardItems, null, 2), 'utf8');
        console.log(`Les items pour ${url} ont été sauvegardés dans ${outputFile}`);
    } catch (error) {
        console.error('Une erreur est survenue lors du scraping :', error.message);
    }
}

// URL et fichiers de sortie pour chaque version (fr, en)
const urlAllNewsFr = 'https://www.leagueoflegends.com/fr-fr/news/';
const urlAllNewsEn = 'https://www.leagueoflegends.com/en-gb/news/';
const urlPatchNoteFr = 'https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/';
const urlPatchNoteEn = 'https://www.leagueoflegends.com/en-gb/news/tags/patch-notes/';
const urlGameUpdatesFr = 'https://www.leagueoflegends.com/fr-fr/news/game-updates/';
const urlGameUpdatesEn = 'https://www.leagueoflegends.com/en-gb/news/game-updates/';
const urlEsportsFr = 'https://www.leagueoflegends.com/fr-fr/news/esports/';
const urlEsportsEn = 'https://www.leagueoflegends.com/en-gb/news/esports/';
const urlDevFr = 'https://www.leagueoflegends.com/fr-fr/news/dev/';
const urlDevEn = 'https://www.leagueoflegends.com/en-gb/news/dev/';
const urlLoreFr = 'https://www.leagueoflegends.com/fr-fr/news/lore/';
const urlLoreEn = 'https://www.leagueoflegends.com/en-gb/news/lore/';
const urlMediaFr = 'https://www.leagueoflegends.com/fr-fr/news/media/';
const urlMediaEn = 'https://www.leagueoflegends.com/en-gb/news/media/';

// Lancer les scrapes pour chaque URL
async function executeScrapes() {
    console.log('Démarrage des scrapes...');
    await scrapePatchNote(urlAllNewsFr, 'allnews-fr.json');
    await scrapePatchNote(urlAllNewsEn, 'allnews-en.json');
    await scrapePatchNote(urlPatchNoteFr, 'patchnote-fr.json');
    await scrapePatchNote(urlPatchNoteEn, 'patchnote-en.json');
    await scrapePatchNote(urlGameUpdatesFr, 'gameupdates-fr.json');
    await scrapePatchNote(urlGameUpdatesEn, 'gameupdates-en.json');
    await scrapePatchNote(urlEsportsFr, 'esports-fr.json');
    await scrapePatchNote(urlEsportsEn, 'esports-en.json');
    await scrapePatchNote(urlDevFr, 'dev-fr.json');
    await scrapePatchNote(urlDevEn, 'dev-en.json');
    await scrapePatchNote(urlLoreFr, 'lore-fr.json');
    await scrapePatchNote(urlLoreEn, 'lore-en.json');
    await scrapePatchNote(urlMediaFr, 'media-fr.json');
    await scrapePatchNote(urlMediaEn, 'media-en.json');
    console.log('Tous les scrapes sont terminés.');
}

// Exécution
executeScrapes();
