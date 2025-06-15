
const fetch = require('../lib/fetcher');

module.exports = {
  command: ['/play'],
  description: 'Busca una canción en YouTube',
  async handler(m, { sock, args }) {
    const query = args.join(" ");
    const res = await fetch(`https://api.zahwazein.xyz/downloader/ytmp3?url=${encodeURIComponent(query)}&apikey=tu_api`);
    const json = await res.json();

    await sock.sendMessage(m.key.remoteJid, {
      audio: { url: json.result.audio_url },
      mimetype: 'audio/mp4'
    }, { quoted: m });
  }
};
