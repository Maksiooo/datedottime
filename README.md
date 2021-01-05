<div align="center">
<img src="logo.png"  width="546" height="300" alt="daydottime">
  <p>
    <a href="https://www.npmjs.com/package/daydottime"><img src="https://img.shields.io/npm/v/daydottime.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/daydottime"><img src="https://img.shields.io/npm/dt/daydottime.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/Maksiooo/daydottime"><img src="https://img.shields.io/david/dev/Maksiooo/daydottime" alt="Dependencies" /></a>
    <a href="https://github.com/Maksiooo/daydottime/"><img src="https://img.shields.io/github/languages/top/Maksiooo/daydottime" alt="Top Language"></a>
    <a href="https://github.com/Maksiooo/daydottime/"><img src="https://img.shields.io/github/languages/count/Maksiooo/daydottime" alt="Languages"></a>
    <a href="https://github.com/Maksiooo/daydottime/"><img src="https://img.shields.io/github/languages/code-size/Maksiooo/daydottime" alt="Code Size"></a>
    <a href="https://github.com/Maksiooo/daydottime/"><img src="https://img.shields.io/github/issues/Maksiooo/daydottime" alt="Issues"></a>
    <a href="https://github.com/Maksiooo/daydottime/"><img src="https://img.shields.io/github/contributors/Maksiooo/daydottime" alt="Contributors"></a>
    </p>
   <p>
    <a href="https://nodei.co/npm/daydottime/"><img src="https://nodei.co/npm/daydottime.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
  </div>

# Documentation

<a href="http://daydottime.tk/">Click Here</a>

# DayDotTime

Package for showing date, time, etc.

# Options

- date

- time

- datetime

- day

- month

- random

- day_pl

- month_pl

- time_12

# Time

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.time);

```

# Date

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.date);

```

# Date and Time

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.datetime);
```

# Day of the week

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.day);
```

# Name of the month

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.month);
```

# Random Number

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.random);
```

# Languages & 12h time

You can have month and days in polish.

Examples:

```js
const daydottime = require('daydottime');

console.log(daydottime.month_pl); //Actual Month name in polish
```

```js
const daydottime = require('daydottime');

console.log(daydottime.day_pl);  //Actual Day name in polish
```

### Actual 12h time

Example:

```js
const daydottime = require('daydottime');

console.log(daydottime.time_12);
```
