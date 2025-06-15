
module.exports = {
  command: ['/sticker'],
  description: 'Convierte imagen en sticker',
  async handler(m, { sock }) {
    if (!m.message.imageMessage) {
      return sock.sendMessage(m.key.remoteJid, { text: 'Envía una imagen con /sticker' });
    }
    const buffer = await sock.downloadMediaMessage(m);
    await sock.sendMessage(m.key.remoteJid, { sticker: buffer }, { quoted: m });
  }
};
