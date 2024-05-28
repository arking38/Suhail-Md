const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923061607116";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_48_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzMzNWR2N1JCL0dQdzZvYXJoYUFUeXU1S3BpNlIxUysyVzhHbDY4U2ZwND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN2hkRXV5b0tUVWlBa19rVFBNdFMtZ1wiLFxuICBcInBob25lSWRcIjogXCJmYjQzYmY2NC0yZDY3LTQ0NmEtYjA5ZS05MzAzOGE0YTcxNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgOSxcbiAgICAgIDI3LFxuICAgICAgMjAzLFxuICAgICAgMTA2LFxuICAgICAgMjI3LFxuICAgICAgNTgsXG4gICAgICAxNzAsXG4gICAgICAzMSxcbiAgICAgIDE4NSxcbiAgICAgIDIwLFxuICAgICAgNzksXG4gICAgICAxMjIsXG4gICAgICAxNSxcbiAgICAgIDIwOCxcbiAgICAgIDQ1LFxuICAgICAgMjMwLFxuICAgICAgMTQ1LFxuICAgICAgMjE4LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTkxLFxuICAgICAgMTYsXG4gICAgICAyMTgsXG4gICAgICA4MyxcbiAgICAgIDgsXG4gICAgICAxNTAsXG4gICAgICAxNixcbiAgICAgIDg2LFxuICAgICAgMjM1LFxuICAgICAgMTM5LFxuICAgICAgMTQ5LFxuICAgICAgNDMsXG4gICAgICA3LFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICAxNDAsXG4gICAgICAyNDksXG4gICAgICA5MCxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUDhIRkZYV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDYxNjA3MTE2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVJfS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTQ0NTUyNTYzNjcxMDk6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZDMjhFSEVQL3MxcklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSckhFOWdBd21kS3FZKzVYNTFjK2hlTWpscE14ZGorM0MwZ2QxYlBpamtBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhzOUlZR2Z5dHpSekd4b1UvQmxRem1BN2Iwb2o2NWxIU1EyV2EyTXNqazlqMzFueW1Zck51RTVTRFF2by9HaFIwaDZFVlFsMkFBYUNDeWRjcnBucUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhmbDM3Zy9uUGw0cTdXNUhNbW9xUXNxRWQzdmVwMXduZlo3ektqUFhPUkFURFY1N3ZHWFVpRVFubTJISHkxNk1ZR1JQdEJDb1ZFWWlEUUVJYXY2TWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2MTYwNzExNjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjg5MzMxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
