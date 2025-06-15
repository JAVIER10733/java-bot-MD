
<h1 align="center">ðŸ¤– JavaBot-MD</h1>

<p align="center">
  <img src="https://i.ibb.co/Gcgj9dH/whatsapp-bot.gif" width="400" alt="Bot WhatsApp" />
</p>

<p align="center">
  Bot de WhatsApp Multi-Dispositivo usando <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.<br>
  Modular âš™ï¸ | RÃ¡pido âš¡ | Personalizable ðŸŽ¨ | Listo para usar ðŸŸ¢
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/github/license/tu_usuario/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/stars/tu_usuario/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/forks/tu_usuario/java-bot-md?style=flat-square" /></a>
</p>

---

## ðŸ“¦ Requisitos

### ðŸ’» En PC
- Node.js v18 o superior
- ffmpeg instalado
- Git (opcional)

### ðŸ“± En Termux
```bash
pkg update && pkg upgrade -y
pkg install nodejs git ffmpeg -y
```

---

## ðŸš€ InstalaciÃ³n

### ðŸ” Clona el repositorio
```bash
git clone https://github.com/tu_usuario/java-bot-md.git
cd java-bot-md
```

### ðŸ“ O descarga el ZIP
[ðŸ“¦ Descargar ZIP](https://github.com/tu_usuario/java-bot-md/archive/refs/heads/main.zip)

---

### ðŸ“¥ Instala las dependencias
```bash
npm install
```

---

### âš™ï¸ ConfiguraciÃ³n

Edita el archivo `config.js`:
```js
module.exports = {
  owner: ['593XXXXXXXXX'], // Tu nÃºmero con cÃ³digo de paÃ­s
  botName: 'JavaBot-MD',
  autoRead: true,
  prefix: ['/', '!', '.'],
  sessionFile: './session/whatsapp.json',
};
```

Crea un archivo `.env` con tus claves:
```
API_KEY=tu_api_key_aqui
OWNER_NUMBER=593XXXXXXXXX
```

---

### â–¶ï¸ Ejecuta el bot
```bash
npm start
```

Escanea el cÃ³digo QR que aparece en la consola.

---

## ðŸ“‚ Estructura del Proyecto

```bash
java-bot-md/
â”œâ”€â”€ index.js           # Archivo principal
â”œâ”€â”€ config.js          # ConfiguraciÃ³n del bot
â”œâ”€â”€ .env               # Claves API y secreto
â”œâ”€â”€ package.json       # Dependencias y scripts
â”‚
â”œâ”€â”€ /session           # Archivos de sesiÃ³n de WhatsApp
â”œâ”€â”€ /plugins           # Comandos del bot
â”‚   â”œâ”€â”€ menu.js
â”‚   â”œâ”€â”€ sticker.js
â”‚   â”œâ”€â”€ play.js
â”‚   â”œâ”€â”€ group.js
â”‚   â”œâ”€â”€ info.js
â”‚   â””â”€â”€ owner.js
â”‚
â”œâ”€â”€ /lib               # LibrerÃ­as de conexiÃ³n
â”‚   â”œâ”€â”€ baileys.js
â”‚   â””â”€â”€ utils.js
â”‚
â”œâ”€â”€ /media             # ImÃ¡genes, audios, stickers
â””â”€â”€ /database          # Datos de usuarios y grupos
```

---

## ðŸ§© Comandos Disponibles

| Comando        | DescripciÃ³n                          |
|----------------|--------------------------------------|
| `/menu`        | Muestra el menÃº principal            |
| `/sticker`     | Convierte imagen/video a sticker     |
| `/play <query>`| Descarga mÃºsica de YouTube           |
| `/add`         | Agrega miembro al grupo (admin)      |
| `/kick`        | Elimina miembro del grupo (admin)    |
| `/info`        | InformaciÃ³n del bot                  |
| `/owner`       | InformaciÃ³n del creador              |

---

## ðŸ–¼ï¸ Vista previa

<p align="center">
  <img src="https://i.ibb.co/YZBjHy3/demo-menu.png" width="300" alt="MenÃº del bot" />
  <img src="https://i.ibb.co/KjF2J6K/demo-chat.png" width="300" alt="Chat con el bot" />
</p>

---

## ðŸ‘¤ CrÃ©ditos

- ðŸ“š Basado en [Baileys](https://github.com/WhiskeySockets/Baileys)
- ðŸ§  Idea original y ediciÃ³n: [TuNombre](https://github.com/tu_usuario)
- ðŸ’™ Agradecimientos a toda la comunidad de desarrollo

---

## ðŸ“„ Licencia

Este proyecto estÃ¡ licenciado bajo MIT. Consulta el archivo [`LICENSE`](./LICENSE) para mÃ¡s detalles.
