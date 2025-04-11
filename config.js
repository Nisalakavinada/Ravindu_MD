const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAVINDU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FFS2ZwcFNwVkJhUFhzR2t0YUVaMFQ0ZkRleGlZZ0FxckJjUG5oYUdGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjlJdk5TR05IejZyeVhXL2YyOEIySVJXYVZxWU1VNG9iYkNTL3FlbUYyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRlZ1Rk9XR1lkczNzc0wwR0pDQWZEZFVJREFIbGJFNVFwYmZ4TS9vVldzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKVXNDUHliZWlCbm1WS3gzczdJUUtQN01JbEtya1F2amgwWDd5d2NJeDFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JaGZnYitNVUZsYmt2eVhTSnFJU0xxUkJTQWtoN09HQWJTcHlIVExPbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpuYzlyUmJ4MzdadDdSQWovekEzanQ0SkMrQ29idVhKK1JMdlJrcHZKRkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEUwSjdhWXVyclF1dnpuOXZrZE94SE1VMEFEVVJ3d1pieGRteERrb05HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXhDWG9Zc3JFZXg3MUxNeldIUHRnVFdxYjc5MVltRlRLWFdFbU55VUlGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5nNzNTeXFBUHZrMWpLbTBOMGlmUXhzVjh6RHFOaUVFSmo0OThFWm41aDVvWWhZQVRDVzNpSU02RGxqa1p2U2hiN1EzNUhHdm9CRmRreUN6T2Z2WENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IkhkMVp4VTY2bWxDRnpoYmF5UWdOTHhHYUdXRXFZVTVZRDE2V2ZHMFJ5WjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtWN3NoZ19BUWZxRWI2N2hVTm03T3ciLCJwaG9uZUlkIjoiMWEwY2QyZjAtNTc5YS00YzE0LTljMjItNWM3ZGFlNTJkNjhmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPZnhpam5ySHFGTHpjM1RPWGdITUF4MVVqZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjdRN3A1cGl5Y2s1RGtLT3NNeE1MaHFqanc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkpISjlCNjYiLCJtZSI6eyJpZCI6Ijk0NzY3ODQ5MDIzOjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVua25vd24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04vcThwd0dFSUgxNGI4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldyYXk3bStSeFJvNXlQcGNWTUhzb21vTmhqSm5BL3V0T2ova2pSWFFEU1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjMzNFFIY0sydlpXR2xKSDFPa2NvRFBPL0swUXRvZ0F5MWtIYUNJN0JQV0JRZGNFZEQxelpTSlBOd2NCL0pPY05RV3VsZjBOMjdCR043Rlg5VXl0dUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJR01DdGx3UWpreTdsL3B3V3hnWlM1bjRQa0xHZks3cHAwU0JXVU05b0g3UklVU1liKys2WjZHTkxxOU9OeFMxbXljMm5aOHJqNGthOVNFRFEvU1ZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY3ODQ5MDIzOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZxMnN1NXZrY1VhT2NqNlhGVEI3S0pxRFlZeVp3UDdyVG8vNUkwVjBBMGsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQzMzc1NTF9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW 𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD 😎😎*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕄𝕣   𝕋   𝕠   𝕙   𝕚   𝕕",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761180276",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ʀᴀᴠɪɴᴅᴜ_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/d0H07LTd/IMG-20250407-WA0035.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94761180276",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
