
const { loadPlugins } = require("./lib/utils");
const { connectToWhatsApp } = require("./lib/connection");

async function start() {
  const sock = await connectToWhatsApp();

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    const body = m.message.conversation || m.message.extendedTextMessage?.text || "";
    const from = m.key.remoteJid;

    const plugins = loadPlugins();
    for (let plugin of plugins) {
      for (let cmd of plugin.command) {
        if (body.startsWith(cmd)) {
          await plugin.handler(m, { sock, args: body.split(" ").slice(1) });
        }
      }
    }
  });
}

start();
