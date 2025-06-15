
module.exports = {
  command: ['/owner'],
  description: 'Muestra info del creador',
  async handler(m, { sock }) {
    await sock.sendMessage(m.key.remoteJid, { text: '👑 Creador: wa.me/593XXXXXXXXX' });
  }
};
