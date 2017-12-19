// Require scss
require("!style-loader!css-loader!sass-loader!./assets/styles/index.scss");

// Require images
requireAll(require.context('./assets/images/', true));

function requireAll(r) { r.keys().forEach(r); }
