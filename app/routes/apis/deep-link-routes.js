const express = require('express');
const router = express.Router();
const deepLink = require('node-deeplink');
const app = express();

router.get('/get-deep-link', (deepLink({
        fallback: 'https://tel.red',
        android_package_name: 'com.telred.clearkeep',
        ios_store_link: 'https://apps.apple.com/us/app/clearkeep-secure-chat-voip/id1474076360?mt=8'
    }))
);

module.exports = router;
