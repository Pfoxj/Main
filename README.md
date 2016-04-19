# Decentralized Web Summit Website

This is a "static" site, meaning there is no backend (eg python, php, node).

While this might sacrifice some convenience, it means that this website can be made decentralized and served through p2p channels.

At the moment this site is hosted on NeoCities and also available through IPFS.

# License

AGPL

# Authors

Richard@archive.org
Carolyn@archive.org
Wendy@archive.org


## Info

This site is developed using the Wintersmith static site buliding tool.

Originally there was no build step, but as there became the need for more pages,
there was also a need to be easily maintainable. AngularJS was considered as a
solution to avoid a build step, but it would have shifted the burden to the
client, and made all page loads heavier and slower. Using a static site generator
allows for easy maintenance while keeping the site "static", which means it is
still compatible with the distributed web.


# How to use the code

## Building the site

### First time only
```
npm install -g wintersmith
npm install
```

### Build the site
```
make build
```

## Developing locally

### First time only
```
npm install -g wintersmith
npm install
```

### Open preview in browser

```
make serve
# open your browser to http://localhost:8080
```
