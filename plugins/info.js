
module.exports = {
  command: ['/info'],
  description: 'Muestra info del bot',
  async handler(m, { sock }) {
    const text = '*🤖 JavaBot-MD*
Estado: Activo
Versión: 1.0.0';
    await sock.sendMessage(m.key.remoteJid, { text });
  }
};
