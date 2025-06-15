
# 🤖 JavaBot-MD
Un bot de WhatsApp multi-dispositivo creado con [Baileys](https://github.com/WhiskeySockets/Baileys), modular, ligero y fácil de configurar.

---

## 📦 Requisitos

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

## 🚀 Instalación

### 1. Clonar o descargar el proyecto
```bash
git clone https://github.com/JAVIER10733/java-bot-md.git
cd java-bot-md
```
O descomprime el archivo `.zip` que descargaste aquí y entra a la carpeta.

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
  owner: ['593XXXXXXXXX'], // Tu número con código de país
  botName: 'JavaBot-MD',
  autoRead: true,
  prefix: ['/', '!', '.'],
  sessionFile: './session/whatsapp.json',
};
```

También puedes agregar tu API key en el archivo `.env`:
```
API_KEY=tu_api_key_aqui
OWNER_NUMBER=593XXXXXXXXX
```

---

## ✅ Iniciar el bot

```bash
npm start
```

Escanea el código QR que aparece con tu WhatsApp y listo.

---

## 📂 Estructura de Carpetas

```
java-bot-md/
│
├── index.js                ← Archivo principal
├── config.js               ← Configuración del bot
├── package.json            ← Dependencias y scripts
├── .env                    ← Claves secretas/API
│
├── session/                ← Datos de sesión
├── plugins/                ← Comandos (menu, sticker, play, etc.)
├── lib/                    ← Librerías de conexión y utilidades
├── media/                  ← Audios, imágenes
└── database/               ← Usuarios, grupos y estadísticas
```

---

## 🛠️ Comandos disponibles

- `/menu` – Muestra menú
- `/sticker` – Convierte imagen a sticker
- `/play [nombre]` – Reproduce música de YouTube
- `/add`, `/kick` – Admin grupo (solo admins)
- `/info` – Info del bot
- `/owner` – Info del creador

---

## 👑 Créditos

- Hecho con [Baileys](https://github.com/WhiskeySockets/Baileys)
- Desarrollado por [TuNombre]
