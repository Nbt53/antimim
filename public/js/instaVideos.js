if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const Instagram = require('instagram-node');
const client = Instagram.instagram();
client.use({ client_id: process.env.INSTA_APP_ID, client_secret: process.env.INSTA_APP_SECRET });

const mediaIds = [
    'CsYwnJetMx',
    'Cn-Eo6ZjrVH'
]


exports.fetchEmbedHtml = (mediaId) => {
    return new Promise((resolve, reject) => {
        client.media(mediaId, (err, media) => {
            if (err) {
                console.error('error');
                resolve(null);
            } else {
                resolve(media.html);
            }
        });
    });
};


module.exports.mediaIds = mediaIds
