
const fs = require("fs");
const path = require("path");

function loadPlugins() {
  const pluginFolder = path.join(__dirname, "../plugins");
  const files = fs.readdirSync(pluginFolder).filter(file => file.endsWith(".js"));
  return files.map(file => require(`../plugins/${file}`));
}

module.exports = { loadPlugins };
