This is a repo to reproduce an issue within Next.js for proxying requests from a different origin with trailing slashes.

There are two apps
- main-app
- secondary-app

To reproduce:
```
cd main-app
yarn
yarn dev
```

Go to [http://localhost:3001](http://localhost:3001) and test all 5 buttons - they should all work and return results

Then (keep main-app running):
```
cd secondary-app
yarn
yarn dev
```

Go to [http://localhost:3004](http://localhost:3004) and test all 5 buttons - the 3 without a trailing slash will work, the two with a trailing slash will return a CORS error.

This is because Next.js removes trailing slashes with a 308 redirect. The problem is you can't set headers on the 308 redirect because middleware doesn't run, the next.config.js headers are ignored and it never reaches the API routes. 

If a developer is using the rewrite as a proxy where they don't control the endpoints because it's from a third party and that third party is using trailing slashes (which is common for Django APIs) then the developer can't proxy the data through Next.js. 