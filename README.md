# League of Legends News

A free API returning League of Legends news.

<sub>**The information is updated automatically every day at 00:00.**</sub>

# API Endpoints

All News :

> English : [https://soraclee.github.io/statik-lol-news/data/allnews-en.json](https://soraclee.github.io/statik-lol-news/data/allnews-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/allnews-fr.json](https://soraclee.github.io/statik-lol-news/data/allnews-fr.json)

Dev News :

> English : [https://soraclee.github.io/statik-lol-news/data/dev-en.json](https://soraclee.github.io/statik-lol-news/data/dev-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/dev-fr.json](https://soraclee.github.io/statik-lol-news/data/dev-fr.json)

Esports News :

> English : [https://soraclee.github.io/statik-lol-news/data/esportsnews-en.json](https://soraclee.github.io/statik-lol-news/data/esports-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/esportsnews-fr.json](https://soraclee.github.io/statik-lol-news/data/esports-fr.json)

Game Updates :

> English : [https://soraclee.github.io/statik-lol-news/data/gameupdates-en.json](https://soraclee.github.io/statik-lol-news/data/gameupdates-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/gameupdates-fr.json](https://soraclee.github.io/statik-lol-news/data/gameupdates-fr.json)

Lore :

> English : [https://soraclee.github.io/statik-lol-news/data/lore-en.json](https://soraclee.github.io/statik-lol-news/data/lore-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/lore-fr.json](https://soraclee.github.io/statik-lol-news/data/lore-fr.json)

Media :

> English : [https://soraclee.github.io/statik-lol-news/data/media-en.json](https://soraclee.github.io/statik-lol-news/data/media-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/media-fr.json](https://soraclee.github.io/statik-lol-news/data/media-fr.json)

Patch Notes :

> English : [https://soraclee.github.io/statik-lol-news/data/patchnote-en.json](https://soraclee.github.io/statik-lol-news/data/patchnote-en.json)

> Français : [https://soraclee.github.io/statik-lol-news/data/patchnote-fr.json](https://soraclee.github.io/statik-lol-news/data/patchnote-fr.json)

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