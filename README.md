

<h1 align="center">🤖 JavaBot-MD</h1>
<p align="center">
  <img src="https://i.ibb.co/Gcgj9dH/whatsapp-bot.gif" width="400" alt="Bot Banner"/>
</p>
<p align="center">
  Bot de WhatsApp Multi-Dispositivo creado con Baileys. Modular, rápido, personalizable y fácil de usar.
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/github/license/tu_usuario/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/stars/tu_usuario/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/forks/tu_usuario/java-bot-md?style=flat-square" /></a>
</p>

---

## 📦 Requisitos

### 🖥️ Para PC
- Node.js v18 o superior
- ffmpeg instalado
- Git (opcional)

### 📱 Para Android (Termux)
```bash
pkg update && pkg upgrade
pkg install nodejs ffmpeg git -y


---

🚀 Instalación

🔗 Clona el proyecto

git clone https://github.com/tu_usuario/java-bot-md.git
cd java-bot-md

📁 También puedes descargarlo en ZIP

> 🔗 Descargar ZIP




---

🧩 Instala las dependencias

npm install


---

⚙️ Configuración rápida

Edita config.js:

module.exports = {
  owner: ['593XXXXXXXXX'],
  botName: 'JavaBot-MD',
  autoRead: true,
  prefix: ['/', '!', '.'],
  sessionFile: './session/whatsapp.json',
};

Edita .env:

API_KEY=tu_api_key
OWNER_NUMBER=593XXXXXXXXX


---

▶️ Ejecuta el bot

npm start

Escanea el código QR con tu WhatsApp.


---

📂 Estructura del Proyecto

java-bot-md/
├── index.js          # Principal
├── config.js         # Configuración
├── plugins/          # Comandos del bot
├── lib/              # Librerías de conexión
├── session/          # Sesión de WhatsApp
├── database/         # Datos de grupos y usuarios
├── media/            # Audios/Imágenes
└── .env              # Claves secretas


---

✨ Funcionalidades

Comando	Descripción

/menu	Muestra el menú
/sticker	Convierte imagen en sticker
/play	Descarga música de YouTube
/add / /kick	Administra el grupo
/info	Información del bot
/owner	Info del creador



---

🖼️ Vista previa

<img src="https://i.ibb.co/KjF2J6K/demo-chat.png" width="300"/>
<img src="https://i.ibb.co/YZBjHy3/demo-menu.png" width="300"/>
---

👑 Créditos

📚 Basado en Baileys

💻 Desarrollado por TuNombre



---

🌐 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
