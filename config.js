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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9f06da856ddc336124b94.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923477013895" // Developer Contact
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_19_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZZm1HbzV1QjY2N2JGRjB5RE1CbHdlQ2FINlRIa0FmRXVCclFBek04eG9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxMUI5eWpUT1F4U1NtTG1oLU5KR1BnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyY2NiN2EyLTEyY2MtNGM3MS1hOWQ1LTEwYjEyYTc0NDg4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICA0OCxcbiAgICAgIDE1OSxcbiAgICAgIDExMyxcbiAgICAgIDI0MixcbiAgICAgIDE4LFxuICAgICAgNTksXG4gICAgICAxMDUsXG4gICAgICAxNzMsXG4gICAgICAxMzgsXG4gICAgICAyMTgsXG4gICAgICAxODMsXG4gICAgICAxMzksXG4gICAgICAxNTMsXG4gICAgICAxMTcsXG4gICAgICAxNjgsXG4gICAgICAxMTksXG4gICAgICAyMjYsXG4gICAgICAxOCxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEzNixcbiAgICAgIDEzNyxcbiAgICAgIDgwLFxuICAgICAgMyxcbiAgICAgIDE1NixcbiAgICAgIDIwMixcbiAgICAgIDE0MSxcbiAgICAgIDE3NCxcbiAgICAgIDUyLFxuICAgICAgMjMxLFxuICAgICAgNjMsXG4gICAgICAxMDIsXG4gICAgICAxNjAsXG4gICAgICAyMDksXG4gICAgICAyMjgsXG4gICAgICA3OCxcbiAgICAgIDI4LFxuICAgICAgNDksXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlYzMjRHWlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2MTYwNzExNjo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFSIEtJTkdcIixcbiAgICBcImxpZFwiOiBcIjk0NDU1MjU2MzY3MTA5OjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puQzI4RUhFUHF5bkxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnJIRTlnQXdtZEtxWSs1WDUxYytoZU1qbHBNeGRqKzNDMGdkMWJQaWprQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkNGtFZDQ5dEFHd1Y2ZG5GeGtZOGI0WkwrR2w1ZXRNYjFFTzh3U1BpVnUxZERDK0xGUG92VFUxSUlUaEtXSk1rdWlsa1FFRkNCZWNXak1qL1ZUdmdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnM1NDbCtYdHJidDdPdEw0Nng1bW9Qb3ZodGJpa1RJVzRYWS9KK0dnSTFGZ2NIR3djRkRrTXZVZkRpR1BrWkF0bFA5a1BsWml1YW9ZZ0hiMWpPMkJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjE2MDcxMTY6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgwMzI3NjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
