# nodejscrud
CRUD shopping list in MERN stack
-- hope to include a scraper that finds and recommends amazon links based on the items searched

To run this:
1. run 'npm init' in the command line while in the directory to install all necessary dependecies
2. also run 'npm run client-install to install all the client side dependencies
    -- the 'client-install' call was created in the top level package.json
3. add api key to config/keys_sample.js
4. either rename keys_sample.js to keys.js or go to the server.js and edit 'require(config/keys.js)' -> 'keys_sample.js'
