
module.exports = {
  command: ['/add', '/kick'],
  description: 'Administra el grupo',
  async handler(m, { sock, args }) {
    const jid = m.key.remoteJid;
    const command = args.shift();
    const target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    if (command === '/add') {
      await sock.groupParticipantsUpdate(jid, [target], "add");
    } else if (command === '/kick') {
      await sock.groupParticipantsUpdate(jid, [target], "remove");
    }
  }
};
