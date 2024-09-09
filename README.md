# IPwidgetJS
![GitHub License](https://img.shields.io/github/license/thenoobicat/ipwidgetjs)
![npm bundle size](https://img.shields.io/bundlephobia/min/ipwidgetjs)
![NPM Downloads](https://img.shields.io/npm/dw/ipwidgetjs)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hw/TheNoobiCat/IPwidgetJS)

## Installation
Import using JSDelivr CDN
```
<script src="https://cdn.jsdelivr.net/gh/thenoobicat/ipwidgetjs@latest/dist/bundle.js"></script>
```
Install as a NodeJS Module
```
npm i ipwidgetjs
```

## How to use
<b>Vanilla HTML</b>
All you need to do is create a DIV with the class `IP-WIDGET-JS`.

```html
<!-- The default width is 220px, and the default height is 80px. -->
<div class="IP-WIDGET-JS"></div>
```

<b>React, NextJS and More</b>
You need to import the `IPwidgetJS` component.
```js
import { IPwidgetJS } from "ipwidgetjs/react"
```
```html
{/* The default width is 220px, and the default height is 80px. */}
<IPwidgetJS/>
```

### 🎉 All done!
You should see a widget with IP address and information about it such as the country and the ISP.

## Customisation
You can customise the following attributes:

- Width
- Height
- Background Colour
- Information shown about the IP Address

<b>With the React Component</b> the following props are supported

```html
<IPwidgetJS showIsp={true} showLatLong={true} showCity={true} width="220px" bg="#333333" height="85px"/>
```

<b>Here's a list </b>of all the classes that you can easily customise if you wish to do so

`.ipwidgetjs-ip` The heading that contains the users IP

`.ipwidgetjs-info-isp`
The heading that contains the users ISP

`.ipwidgetjs-info-descr-city`
The heading that contains the city of the user

`.ipwidgetjs-country-flag`
The image of the users flag

`.ipwidgetjs-info-descr-final`
The Latitude and Longitude of the user