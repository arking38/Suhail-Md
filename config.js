const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923061607116";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_12_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWNPNmRMZ1dQeVp4Z2oraHlBUFI1WDRRSm9HNlVwTmJldWNPdVA1Vm9Ubz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU2MtcEh0M2xTeGVhMzQ4c0dvZ0kzUVwiLFxuICBcInBob25lSWRcIjogXCJlNmQ3YmViNy1kNmM3LTRhMzYtODAxMi0zM2I2NjhjYTkzM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTAyLFxuICAgICAgMjEyLFxuICAgICAgMTY4LFxuICAgICAgMTQxLFxuICAgICAgMjQxLFxuICAgICAgMTIxLFxuICAgICAgNzgsXG4gICAgICA0NixcbiAgICAgIDE2NCxcbiAgICAgIDEwNixcbiAgICAgIDE1MCxcbiAgICAgIDE3OCxcbiAgICAgIDEyMSxcbiAgICAgIDg5LFxuICAgICAgMTM4LFxuICAgICAgMjEsXG4gICAgICA2MyxcbiAgICAgIDQwLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA0NSxcbiAgICAgIDIwMyxcbiAgICAgIDIwOSxcbiAgICAgIDcwLFxuICAgICAgMTkzLFxuICAgICAgMTY4LFxuICAgICAgNTIsXG4gICAgICAxMjMsXG4gICAgICA1LFxuICAgICAgNTEsXG4gICAgICAxODEsXG4gICAgICAyMyxcbiAgICAgIDk2LFxuICAgICAgMzIsXG4gICAgICAyMDAsXG4gICAgICAxMzUsXG4gICAgICA4NyxcbiAgICAgIDE0MCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1SjExSldUNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDYxNjA3MTE2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVJfS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTQ0NTUyNTYzNjcxMDk6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpDMjhFSEVLNjMzTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSckhFOWdBd21kS3FZKzVYNTFjK2hlTWpscE14ZGorM0MwZ2QxYlBpamtBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNVd211MDYxaTdHVWd5K1drczRwMXhIOEVWcDBseWVFTy9qU2tCckhubXVvdHo2Q01OcmVKOUZ6SllPbWsrRUd2ZVV6N2wxeFFUUzhMSUJ6Vk1YZkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBOVndhN3JBdHZkRXdMUmVJWHptcytCUjhGQnlRMlB4THk3OCt6RVYwNkJueUM4aXQ5SEF2WVFVbTQvNTdtRys1Znd1V0EzbHlnVklkc1E4dFF1MmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2MTYwNzExNjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjk4NDc1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
