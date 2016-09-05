# Dartboard
A library to add a dartboard to a web app. The board is built with D3 and fires events when a bed is clicked.

![demo](http://gitlab.com/bmcallis/dartboard/raw/56d5d54/docs/dartboard-demo.gif)

## Usage
```
<script src="https://unpkg.com/dartboard/dist/dartboard.js"></script>
```
```
var dartboard = new Dartboard('#dartboard');
dartboard.render();

document.querySelector('#dartboard').addEventListener('throw', function(d) {
    console.log(d.detail);
});
```

[Codepen example](http://codepen.io/bmcallis/pen/amzEvG?editors=1000)
