
module.exports = {
  command: ['/menu'],
  description: 'Muestra el menú del bot',
  async handler(m, { sock }) {
    const msg = `
*📜 Menú del Bot*
- /menu
- /sticker (responde a imagen)
- /play [nombre canción]
- /info
- /owner
- /add [número]
- /kick [número]
    `;
    await sock.sendMessage(m.key.remoteJid, { text: msg });
  }
};
