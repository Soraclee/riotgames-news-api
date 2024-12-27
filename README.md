# League of Legends News

A free API returning League of Legends news.

<sub>**The information is updated automatically every day at 00:00.**</sub>

## API Endpoints (LOL)

All News :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/allNewsEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/allNewsEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/allNewsFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/allNewsFr.json)

Dev News :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/devEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/devEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/devFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/devFr.json)

Esports News :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/esportsEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/esports-en.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/esportsFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/esportsFr.json)

Game Updates :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/gameUpdatesEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/gameUpdatesEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/gameUpdatesFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/gameUpdatesFr.json)

Lore :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/loreEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/loreEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/loreFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/loreFr.json)

Media :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/mediaEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/mediaEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/mediaFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/mediaFr.json)

Patch Notes :

> English : [https://soraclee.github.io/riotgames-news-api/data/lol/patchNoteEn.json](https://soraclee.github.io/riotgames-news-api/data/lol/patchNoteEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/lol/patchNoteFr.json](https://soraclee.github.io/riotgames-news-api/data/lol/patchNoteFr.json)

## API Endpoints (VALORANT)

All News :

> English : [https://soraclee.github.io/riotgames-news-api/data/valorant/allNewsEn.json](https://soraclee.github.io/riotgames-news-api/data/valorant/allNewsEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/valorant/allNewsFr.json](https://soraclee.github.io/riotgames-news-api/data/valorant/allNewsFr.json)

Patch Notes :

> English : [https://soraclee.github.io/riotgames-news-api/data/valorant/patchNoteEn.json](https://soraclee.github.io/riotgames-news-api/data/valorant/patchNoteEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/valorant/patchNoteFr.json](https://soraclee.github.io/riotgames-news-api/data/valorant/patchNoteFr.json)

Dev News :

> English : [https://soraclee.github.io/riotgames-news-api/data/valorant/devEn.json](https://soraclee.github.io/riotgames-news-api/data/valorant/devEn.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/valorant/devFr.json](https://soraclee.github.io/riotgames-news-api/data/valorant/devFr.json)

Esports News :

> English : [https://soraclee.github.io/riotgames-news-api/data/valorant/esportsEn.json](https://soraclee.github.io/riotgames-news-api/data/valorant/esports-en.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/valorant/esportsFr.json](https://soraclee.github.io/riotgames-news-api/data/valorant/esportsFr.json)

Community News :

> English : [https://soraclee.github.io/riotgames-news-api/data/valorant/communityEn.json](https://soraclee.github.io/riotgames-news-api/data/valorant/community-en.json)

> Français : [https://soraclee.github.io/riotgames-news-api/data/valorant/communityFr.json](https://soraclee.github.io/riotgames-news-api/data/valorant/community-fr.json)

## Example Response

```json
[
    {
        "title": "TFT Macao Open Finals Ceremony",
        "publishedAt": "2024-12-17T05:00:00.000Z",
        "action": {
            "type": "youtube_video",
            "payload": {
                "youtubeId": "WTXErU9aYz0",
                "url": "https://www.youtube.com/watch?v=WTXErU9aYz0"
            }
        },
        "product": {
            "title": "League of Legends (en-gb)",
            "machineName": "league_of_legends",
            "id": "product.league_of_legends.en-gb",
            "media": {
                "provider": "sanity",
                "type": "image",
                "dimensions": {
                    "height": 24,
                    "width": 24,
                    "aspectRatio": 1
                },
                "url": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/content_organization_live/b9cd574bddb9469fdf95f753ddf0c6b13501a247-24x24.svg",
                "colors": {
                    "primary": "#c89b3c",
                    "secondary": "#1f1f1f",
                    "label": "#1f1f1f"
                },
                "mimeType": "image/svg+xml"
            }
        },
        "media": {
            "provider": "sanity",
            "type": "image",
            "dimensions": {
                "height": 1080,
                "width": 1920,
                "aspectRatio": 1.7777777777777777
            },
            "url": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0b0ec597be654aa0f2f02a5af6b028cf0ea867f5-1920x1080.jpg",
            "colors": {
                "primary": "#29254A",
                "secondary": "#F3DCF9",
                "label": "#0A0820"
            },
            "mimeType": "image/jpeg"
        },
        "description": {
            "type": "html",
            "body": "Watch Now"
        },
        "category": {
            "title": "Esports",
            "description": "The world stage for professional League of Legends.",
            "machineName": "esports"
        },
        "analytics": {
            "contentId": "0514347d-750d-4af0-ad51-71f91d890e4f.en-gb",
            "contentLocale": "en-gb",
            "rev": "Qw0TwPQaQ8aBM3BST8L7Lh",
            "publishDate": "2024-12-17T05:00:00.000Z"
        }
    },
    ...
```