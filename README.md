### SRP6 "no-crypto"

This repository contains SRP6 Client implementation, based on & 100% compatible to famous Mozilla's [`node-srp`](https://github.com/mozilla/node-srp), but without dependencies to NodeJS Crypto.

External dependencies are: `jsbn` and `hash.js`.


### Why?

Since this library doesn't use NodeJS Crypto it has way smaller footprint, which is pretty important for browser environments.


### ToDo

1. At this moment only SRP Client is implemented. Eventually I'll add SRP Server as well.
2. I have a private SRP Server implementation written in Golang, compatible with `node-srp` and this library. Would be nice to publish it here as well.
3. It's possible to get smaller footprint by pulling subclassing certain BigInteger functionality. SRP uses relatively small subset of BigInteger math.

### Questions?

Drop a line to [raver119@gmail.com]()