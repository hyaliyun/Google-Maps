<div align="center">
  <h1 align="center">
    Google-Maps
    <br />
    <br />
    <a href="https://docusaurus.io">
      <img src="https://docusaurus.io/img/slash-introducing.svg" alt="Docusaurus">
    </a>
  </h1>
</div>


# Building a Google Maps Component with React

## Table of Contents

1. [Load Google-based Components](#Load-google-based-components)
2. [Add props to the Map component](#Add-props-to-map-components)
3. [Add state to the Map component](#Add-state-to-map-components)
4. [Use the current location of the browser](#Use the current location of the browser)
5. [Drag the map using `addListener`](#Drag the map using -addlistener-)
6. [Add markers to the map](#Add markers to the map)
7. [Create a MarkerComponent](#Create-markercomponents)
8. [Add a marker info window](#Add a marker info window)
9. [Conclusion](#Conclusion)

## Load Google-based Components

Before integrating Google Maps into your React application, you need to get an API key from Google. You can register and get a key on Google Cloud Platform.

### Step 1: Get an API key

Go to Google Cloud Platform and follow the instructions to get an API key.

### Step 2: Create GoogleApiComponent

We will create a `GoogleApiComponent` to handle loading and accessing the Google Maps API. To simplify this process, we can use a third-party library (such as `react-google-maps` or wrap a component ourselves).

#### Sample code:

Here is a basic `ScriptCache.js` implementation for asynchronously loading Google Maps API scripts.

```javascript // ScriptCache.js class ScriptCache { constructor() { this.cache = {}; } // Load script asynchronously loadScript(src, onLoad) { if (this.cache[src]) { if (onLoad) onLoad(); return; } this.cache[src] = true; const script = document.createElement('script'); script.src = src; script.async = true; script.onload = onLoad; script.onerror = () => console.error(`Script load error for script ${src}`); document.body.appendChild(script); } } const scriptCache = new ScriptCache(); export default scriptCache; ``#### Used in React components:``javascript // GoogleMapLoader.js import React, { useState, useEffect } from 'react';
import scriptCache from './ScriptCache';

const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;

function GoogleMapLoader({ children, ...props }) {
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
scriptCache.loadScript(GOOGLE_MAPS_URL, () => {
setIsLoaded(true);
});
}, []);

if (!isLoaded) return `<div>`Loading...`</div>`;

return `<div>`{children}`</div>`;
}

export default GoogleMapLoader;

```

## Add props to the Map component

In your `Map` component, you can pass props Pass parameters such as center position, zoom level, etc.

```javascript // MapComponent.js import React, { useRef, useEffect } from 'react'; import GoogleMapLoader from './GoogleMapLoader'; function MapComponent({ center, zoom, children }) { const mapRef = useRef(null); useEffect(() => { if (mapRef.current && window.google) { const map = new window.google.maps.Map(mapRef.current , { center: new window.google.maps.LatLng(center.lat, center.lng), zoom: zoom, }); // You can add more map-related logic here } }, [center, zoom]); return ( <GoogleMapLoader> <div ref={mapRef} style={{ height: '400px', width: '100%' }} /> {children} </GoogleMapLoader> );
}

export default MapComponent;
```

## Next Steps

The next steps include adding state to the Map component, using the browser's current location, adding map event listeners, adding markers, and creating a custom MarkerComponent.

### Note

Due to space limitations, this only shows how to load the Google Maps API and create a basic Map component. A full implementation will include more features and details.

You can continue to develop advanced features such as search functionality, custom styles for map markers, and info windows based on your specific needs.

### Conclusion

Through the above steps, you have learned how to integrate the Google Maps API in a React application and created a basic map component. As your project needs grow, you can continue to extend and customize this component to meet more complex needs.

<p align="center">
  <a href="https://twitter.com/docusaurus"><img src="https://img.shields.io/twitter/follow/docusaurus.svg?style=social" align="right" alt="Twitter Follow" /></a>
  <a href="#backers" alt="sponsors on Open Collective"><img src="https://opencollective.com/Docusaurus/backers/badge.svg" /></a>
  <a href="#sponsors" alt="Sponsors on Open Collective"><img src="https://opencollective.com/Docusaurus/sponsors/badge.svg" /></a>
  <a href="https://www.npmjs.com/package/@docusaurus/core"><img src="https://img.shields.io/npm/v/@docusaurus/core.svg?style=flat" alt="npm version"></a>
  <a href="https://github.com/facebook/docusaurus/actions/workflows/tests.yml"><img src="https://github.com/facebook/docusaurus/actions/workflows/tests.yml/badge.svg" alt="GitHub Actions status"></a>
  <a href="CONTRIBUTING.md#pull-requests"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="https://discord.gg/docusaurus"><img src="https://img.shields.io/discord/102860784329052160.svg" align="right" alt="Discord Chat" /></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
  <a href="https://argos-ci.com" target="_blank" rel="noreferrer noopener" aria-label="Covered by Argos"><img src="https://argos-ci.com/badge.svg" alt="Covered by Argos" width="133" height="20" /></a>
  <a href="https://gitpod.io/#https://github.com/facebook/docusaurus"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"/></a>
  <a href="https://app.netlify.com/sites/docusaurus-2/deploys"><img src="https://api.netlify.com/api/v1/badges/9e1ff559-4405-4ebe-8718-5e21c0774bc8/deploy-status" alt="Netlify Status"></a>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffacebook%2Fdocusaurus%2Ftree%2Fmain%2Fexamples%2Fclassic&project-name=my-docusaurus-site&repo-name=my-docusaurus-site"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/slorber/docusaurus-starter"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</p>

## Introduction

Docusaurus is a project for building, deploying, and maintaining open source project websites easily.

Short on time? Check out our [5-minute tutorial ⏱️](https://tutorial.docusaurus.io)!

**Tip**: use **[docusaurus.new](https://docusaurus.new)** to test Docusaurus immediately in a playground.

- **Simple to Start**

> Docusaurus is built in a way so that it can [get running](https://docusaurus.io/docs/installation) in as little time as possible. We've built Docusaurus to handle the website build process so you can focus on your project.

- **Localizable**

> Docusaurus ships with [localization support](https://docusaurus.io/docs/i18n/introduction) via CrowdIn. Empower and grow your international community by translating your documentation.

- **Customizable**

> While Docusaurus ships with the key pages and sections you need to get started, including a home page, a docs section, a [blog](https://docusaurus.io/docs/blog), and additional support pages, it is also [customizable](https://docusaurus.io/docs/creating-pages) as well to ensure you have a site that is [uniquely yours](https://docusaurus.io/docs/styling-layout).

## Installation

Use the initialization CLI to create your site:

```bash
npm init docusaurus@latest
```

[Read the docs](https://docusaurus.io/docs/installation) for any further information.

## Contributing

We've released Docusaurus because it helps us better scale and supports the many OSS projects at Facebook. We hope that other organizations can benefit from the project. We are thankful for any contributions from the community.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### Contributing guide

Read our [contributing guide](https://github.com/facebook/docusaurus/blob/main/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Docusaurus.

### Beginner-friendly bugs

To help you get your feet wet and get you familiar with our contribution process, we have a list of [beginner-friendly bugs](https://github.com/facebook/docusaurus/labels/good%20first%20issue) that might contain smaller issues to tackle first. This is a great place to get started.

## Contact

We have a few channels for contact:

- [Discord](https://discord.gg/docusaurus):
  - `#general` for those using Docusaurus.
  - `#contributors` for those wanting to contribute to the Docusaurus core.
- [@docusaurus](https://x.com/docusaurus) X (Twitter)
- [GitHub Issues](https://github.com/facebook/docusaurus/issues)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)]. `<a href="https://github.com/facebook/docusaurus/graphs/contributors"><img src="https://opencollective.com/Docusaurus/contributors.svg?width=890&button=false" />``</a>`

## Backers

Thank you to all our backers! 🙏 [Become a backer](https://opencollective.com/Docusaurus#backer)

<a href="https://opencollective.com/Docusaurus#backers" target="_blank"><img src="https://opencollective.com/Docusaurus/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [Become a sponsor](https://opencollective.com/Docusaurus#sponsor)

<a href="https://opencollective.com/Docusaurus/sponsor/0/website" target="_blank"><img src="https://opencollective.com/Docusaurus/sponsor/0/avatar.svg"></a> <a href="https://opencollective.com/Docusaurus/sponsor/1/website" target="_blank"><img src="https://opencollective.com/Docusaurus/sponsor/1/avatar.svg"></a>

## License

Docusaurus is [MIT licensed](./LICENSE).

The Docusaurus documentation (e.g., `.md` files in the `/docs` folder) is [Creative Commons licensed](./LICENSE-docs).

## Special thanks

<p>
  <a href="http://www.browserstack.com/" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./admin/img/browserstack-dark-mode-logo.svg#gh-dark-mode-only">
      <img alt="BrowserStack logo" src="./admin/img/browserstack-light-mode-logo.svg#gh-light-mode-only" height="50px" />
    </picture>
  </a>
</p>

[BrowserStack](http://www.browserstack.com/) supports us with [free access for open source](https://www.browserstack.com/open-source).

[![Rocket Validator logo](./admin/img/rocketvalidator-logo.png)](https://rocketvalidator.com/)

[Rocket Validator](https://rocketvalidator.com/) helps us find HTML markup or accessibility issues.
