
# ðŸ¤– JavaBot-MD
Un bot de WhatsApp multi-dispositivo creado con [Baileys](https://github.com/WhiskeySockets/Baileys), modular, ligero y fÃ¡cil de configurar.

---

## ðŸ“¦ Requisitos

### En Android (Termux):
- Termux actualizado
- Node.js: `pkg install nodejs -y`
- Git: `pkg install git -y`
- ffmpeg: `pkg install ffmpeg -y`

### En PC:
- Node.js (v18+): [https://nodejs.org](https://nodejs.org)
- Git (opcional)
- ffmpeg instalado en el sistema

---

## ðŸš€ InstalaciÃ³n

### 1. Clonar o descargar el proyecto
```bash
git clone https://github.com/tu_usuario/java-bot-md.git
cd java-bot-md
```
O descomprime el archivo `.zip` que descargaste aquÃ­ y entra a la carpeta.

---

### 2. Instalar dependencias
```bash
npm install
```

---

### 3. Configurar

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

TambiÃ©n puedes agregar tu API key en el archivo `.env`:
```
API_KEY=tu_api_key_aqui
OWNER_NUMBER=593XXXXXXXXX
```

---

## âœ… Iniciar el bot

```bash
npm start
```

Escanea el cÃ³digo QR que aparece con tu WhatsApp y listo.

---

## ðŸ“‚ Estructura de Carpetas

```
java-bot-md/
â”‚
â”œâ”€â”€ index.js                â† Archivo principal
â”œâ”€â”€ config.js               â† ConfiguraciÃ³n del bot
â”œâ”€â”€ package.json            â† Dependencias y scripts
â”œâ”€â”€ .env                    â† Claves secretas/API
â”‚
â”œâ”€â”€ session/                â† Datos de sesiÃ³n
â”œâ”€â”€ plugins/                â† Comandos (menu, sticker, play, etc.)
â”œâ”€â”€ lib/                    â† LibrerÃ­as de conexiÃ³n y utilidades
â”œâ”€â”€ media/                  â† Audios, imÃ¡genes
â””â”€â”€ database/               â† Usuarios, grupos y estadÃ­sticas
```

---

## ðŸ› ï¸ Comandos disponibles

- `/menu` â€“ Muestra menÃº
- `/sticker` â€“ Convierte imagen a sticker
- `/play [nombre]` â€“ Reproduce mÃºsica de YouTube
- `/add`, `/kick` â€“ Admin grupo (solo admins)
- `/info` â€“ Info del bot
- `/owner` â€“ Info del creador

---

## ðŸ‘‘ CrÃ©ditos

- Hecho con [Baileys](https://github.com/WhiskeySockets/Baileys)
- Desarrollado por [TuNombre]
