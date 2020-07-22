# AmericanPie

Timeless Masterpiece.

This is an NPM Package designed to take a timestamp and to return a useable string which details how long ago the date was compared to the current time. 

One second ago
...
Three minutes ago
...
Five days ago
...
Seven months ago
...
One year ago
...
A long, long time ago

## Usage
This works only with the npm package <a href="https://www.npmjs.com/package/date-and-time">date-and-time</a>.

In the terminal:
```
npm install americanpie
```

In package.json
```
{
  "dependencies": {
    "XXX": "^1.0.0" //Include this line within the dependencies section
  }
}
```
And finally the file:

```
\\ index.js
var americanpie = require('americanpie');

var output = americanpie.howlongago(timestamp);
console.log(output);
```


## MIT License

Copyright 2020 Sam Landman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
