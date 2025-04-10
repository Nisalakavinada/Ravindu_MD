const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAVINDU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFRU1V6aGxVZWd5MDVIcUdtb3FmbUpYOWRDdmVieW45N1pOd3kwNmwwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJxWEx6OHhBeUdPdWdxY3dKeWMySEF0TkcvRnl6MnJCRFhpanBjYW8zST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T0orWEU5MkI2cTNtRFFnSlFNbjBCS0ZCSjJGaUxSejFSSHNNRTNzWlhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzbm5KNUd6L1VRWGtYZGFMSzBtb05aZVB6dEVnODZvV3ZpMEZEUXNNV2lNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCOGdOZjFXYnpoaGNKZWpSOWk4ZEkxL3hDN09oK1NFMHZsQ1N1dEhxME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQybXNlQUp0YVhmbndOVWhkQjltYVBQaGszZVdvaVhaRGdoa2xNSkU5eTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtXaUVoUEVZTWQxeGFaWC9GdUxMQ3RxampqM2VPRnVJck4rNHd6aTRHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkNXZXEwOWkzcWhnKzFidTk4aU8zYitMMFRML3BCNHdLMVJoM05vQUZXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzYkxQcWlDYmhFRmtJVWpUVWs2MlhvSUwrbHlydnVqbCtRSUo3Mkt1SFpuUVJXSmtBWkp6b1RjWW9XcUw5a1MyNHRsWFR6MkxtWWpnck1ibWpJdERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJremh6TjVUb0g2S2ZnTTdreXhBVStKNUhJMnIzeHFjY0lXQ202REFiLy9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJVFJ5cjJvSlFGcThQaTlWYnExNzRRIiwicGhvbmVJZCI6IjZhZTdiYmNiLWEwNDEtNGExYy1iOTIwLWRkZWYwY2NhMzRlOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZ0lweFRZTis5L203bGw3ekRZY3l3RkZVTVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia24zTU5maVN3NCtyUXZvT1daU2JQL3NhUjVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFGWEdHU0FUIiwibWUiOnsiaWQiOiI5NDc2Nzg0OTAyMzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVbmtub3duIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON3E4cHdHRU1UczNyOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXcmF5N20rUnhSbzV5UHBjVk1Ic29tb05oakpuQS91dE9qL2tqUlhRRFNRPSIsImFjY291bnRTaWduYXR1cmUiOiJhTEw4U3hsTE5tSHNMeEJtOXl5TFZZd3cyQjVZUXl3cEU2aFZZY2RrRFl1bVFzN2lqL0JFajErV1IxR0gvcDJqNnlXWjlhMmFiY295aDVCVW1lSDhDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicTJDd0ludllxWmpkeVg3UFgxQ0U2dnlMMUljWnltbElxY3NPOFI4TSs2dnEvRElONUhrNWpqZEQxaElnU2ZtcmNRbEVNaXpBUzZvc2grOUxleXdQQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Nzg0OTAyMzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWcTJzdTV2a2NVYU9jajZYRlRCN0tKcURZWXlad1A3clRvLzVJMFYwQTBrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0Mjg3MzE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9kZiJ9",
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
