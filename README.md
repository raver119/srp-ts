###SRP6 "no-crypto"

This repository contains SRP6 Client implementation, based on & 100% compatible to famous Mozilla's [`node-srp`](https://github.com/mozilla/node-srp), but without dependencies to NodeJS Crypto.
Thus, it has way smaller footprint, which is pretty important for browser environments.

External dependencies are: `jsbn` and `hash.js`.