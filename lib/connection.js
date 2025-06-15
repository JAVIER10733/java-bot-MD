
const { makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");
const { sessionFile } = require("../config");

const { state, saveState } = useSingleFileAuthState(sessionFile);

async function connectToWhatsApp() {
  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: true,
  });

  sock.ev.on("creds.update", saveState);
  return sock;
}

module.exports = { connectToWhatsApp };
