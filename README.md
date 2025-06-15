
<h1 align="center">🤖 JavaBot-MD</h1>

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr6yPjuRueTqK4DQZDOMlKybWtmuIgWNZ9w&s" width="400" alt="Bot WhatsApp" />
</p>

<p align="center">
  Bot de WhatsApp Multi-Dispositivo usando <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.<br>
  Modular ⚙️ | Rápido ⚡ | Personalizable 🎨 | Listo para usar 🟢
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/github/license/tu_usuario/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/stars/JAVIER10733/java-bot-md?style=flat-square" /></a>
  <a href="#"><img src="https://img.shields.io/github/forks/tu_usuario/java-bot-md?style=flat-square" /></a>
</p>

---

## 📦 Requisitos

### 💻 En PC
- Node.js v18 o superior
- ffmpeg instalado
- Git (opcional)

### 📱 En Termux
```bash
pkg update && pkg upgrade -y
pkg install nodejs git ffmpeg -y
```

---

## 🚀 Instalación

### 🔁 Clona el repositorio
```bash
git clone https://github.com/tu_usuario/java-bot-md.git
cd java-bot-md
```

### 📁 O descarga el ZIP
[📦 Descargar ZIP](https://github.com/tu_usuario/java-bot-md/archive/refs/heads/main.zip)

---

### 📥 Instala las dependencias
```bash
npm install
```

---

### ⚙️ Configuración

Edita el archivo `config.js`:
```js
module.exports = {
  owner: ['593XXXXXXXXX'], // Tu número con código de país
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

### ▶️ Ejecuta el bot
```bash
npm start
```

Escanea el código QR que aparece en la consola.

---

## 📂 Estructura del Proyecto

```bash
java-bot-md/
├── index.js           # Archivo principal
├── config.js          # Configuración del bot
├── .env               # Claves API y secreto
├── package.json       # Dependencias y scripts
│
├── /session           # Archivos de sesión de WhatsApp
├── /plugins           # Comandos del bot
│   ├── menu.js
│   ├── sticker.js
│   ├── play.js
│   ├── group.js
│   ├── info.js
│   └── owner.js
│
├── /lib               # Librerías de conexión
│   ├── baileys.js
│   └── utils.js
│
├── /media             # Imágenes, audios, stickers
└── /database          # Datos de usuarios y grupos
```

---

## 🧩 Comandos Disponibles

| Comando        | Descripción                          |
|----------------|--------------------------------------|
| `/menu`        | Muestra el menú principal            |
| `/sticker`     | Convierte imagen/video a sticker     |
| `/play <query>`| Descarga música de YouTube           |
| `/add`         | Agrega miembro al grupo (admin)      |
| `/kick`        | Elimina miembro del grupo (admin)    |
| `/info`        | Información del bot                  |
| `/owner`       | Información del creador              |

---

## 🖼️ Vista previa

<p align="center">
  <img src="https://i.ibb.co/YZBjHy3/demo-menu.png" width="300" alt="Menú del bot" />
  <img src="https://i.ibb.co/KjF2J6K/demo-chat.png" width="300" alt="Chat con el bot" />
</p>

---

## 👤 Créditos

- 📚 Basado en [Baileys](https://github.com/WhiskeySockets/Baileys)
- 🧠 Idea original y edición: [TuNombre](https://github.com/tu_usuario)
- 💙 Agradecimientos a toda la comunidad de desarrollo

---

## 📄 Licencia

Este proyecto está licenciado bajo MIT. Consulta el archivo [`LICENSE`](./LICENSE) para más detalles.
