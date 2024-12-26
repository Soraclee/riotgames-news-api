const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapePage() {
    const url = 'https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/'; // Remplace avec l'URL cible

    try {
        // Récupérer le contenu HTML
        const { data: html } = await axios.get(url);
        const $ = cheerio.load(html);

        // Sélectionner le script avec l'ID "__NEXT_DATA__"
        const scriptContent = $('#__NEXT_DATA__').html();

        if (!scriptContent) {
            console.error('La balise script avec l\'ID "__NEXT_DATA__" est introuvable.');
            return;
        }

        // Convertir en objet JSON
        const jsonData = JSON.parse(scriptContent);

        // Extraire uniquement la partie souhaitée
        const blades = jsonData.props?.pageProps?.page?.blades;

        if (!blades) {
            console.error('La propriété "props.pageProps.page.blades" est introuvable.');
            return;
        }

        // Filtrer pour ne récupérer que les objets où type = "articleCardGrid"
        const articleCardItems = blades
            .filter(blade => blade.type === 'articleCardGrid') // Garder uniquement les objets de type "articleCardGrid"
            .map(blade => blade.items) // Extraire uniquement la propriété "items"
            .flat(); // Applatir si plusieurs arrays "items" existent

        if (!articleCardItems.length) {
            console.error('Aucun item trouvé dans les "articleCardGrid".');
            return;
        }

        // Sauvegarder dans un fichier data.json
        fs.writeFileSync('data.json', JSON.stringify(articleCardItems, null, 2), 'utf8');
        console.log('Les items des "articleCardGrid" ont été sauvegardés dans data.json');
    } catch (error) {
        console.error('Une erreur est survenue lors du scraping :', error.message);
    }
}

scrapePage();
