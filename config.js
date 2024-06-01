const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://arbabbilal38:<password>@cluster0.hkbjpdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjeXV0QnpJbnRBVC91K1M2ZVdSUEw3c2kyR1pjdmgxaVV1clgwckNKbjVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMWnF0Yy1oRFJTNi1HR2l4Ti1vVU5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllNDAyZTFhLWFmOGEtNDkyNC04YWZlLTA2OGViZDlkYWE3M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxMDYsXG4gICAgICAxMjYsXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDI1NSxcbiAgICAgIDIwMixcbiAgICAgIDEwMCxcbiAgICAgIDIxOSxcbiAgICAgIDE3NixcbiAgICAgIDIyMCxcbiAgICAgIDIwOCxcbiAgICAgIDIyNyxcbiAgICAgIDEzNSxcbiAgICAgIDIxOCxcbiAgICAgIDE3LFxuICAgICAgNTUsXG4gICAgICAyMzgsXG4gICAgICAyMTUsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAxMTUsXG4gICAgICAxODIsXG4gICAgICAxMDYsXG4gICAgICAxMTAsXG4gICAgICAzLFxuICAgICAgMTU0LFxuICAgICAgMTc1LFxuICAgICAgMjM2LFxuICAgICAgMTQzLFxuICAgICAgMjI5LFxuICAgICAgMjE0LFxuICAgICAgMjUsXG4gICAgICAxNjQsXG4gICAgICAxMjAsXG4gICAgICAxOTksXG4gICAgICAyMTMsXG4gICAgICAxNzYsXG4gICAgICAxMTIsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUpTUDE4UVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2MTYwNzExNjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFSIEtJTkdcIixcbiAgICBcImxpZFwiOiBcIjk0NDU1MjU2MzY3MTA5OjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMQzI4RUhFS21uNjdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnJIRTlnQXdtZEtxWSs1WDUxYytoZU1qbHBNeGRqKzNDMGdkMWJQaWprQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrM3VQWlpaeUZGeURiVCtKcGM0MkIrN0NvaXJFUzNTODNsRjcxTmVvWFpDSXpXRkdRUEF3Uk1ncWRqUGFuYWg0V3ZzZlVIQlJLMWltYVVBZGoreWJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCZ0Q5aXkxbGh0Y1lkZGdaV2lBRDV1Q2Y2c2VWYUVLNFJnQ1FJQkVXcXQ1L3lsTGJ3QlZPQnA2andhbjZkMTlwbWVxSTBlb0VrUTd1Tk5mYldFemtDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjE2MDcxMTY6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyMjg0NjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Arbab Tech",
  packname: process.env.PACK_NAME || "AR KING",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Arbab Tech",


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
