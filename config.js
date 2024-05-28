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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_50_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzelVjTVRrZ3FlT29TRUgzTmhPRzBtSWZPNjJ6bHNOd1pkTDNKNTcxcEg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwY1duNXBXU1M5U1JQZEc1U2s2c1NBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiNDNlYTc1LWIxZTEtNGU0MC05ZmFjLTIzNGFiOTM0OWY5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA0MSxcbiAgICAgIDQwLFxuICAgICAgODYsXG4gICAgICAxNTksXG4gICAgICAzNCxcbiAgICAgIDk1LFxuICAgICAgMjAwLFxuICAgICAgNDUsXG4gICAgICAxMDEsXG4gICAgICAyMjYsXG4gICAgICAyOSxcbiAgICAgIDEwNCxcbiAgICAgIDAsXG4gICAgICAyMDUsXG4gICAgICAyMTYsXG4gICAgICA0LFxuICAgICAgNjgsXG4gICAgICAxMDIsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTgxLFxuICAgICAgMTQ2LFxuICAgICAgOTQsXG4gICAgICAxNDAsXG4gICAgICAxNjMsXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDYzLFxuICAgICAgOSxcbiAgICAgIDExMyxcbiAgICAgIDIwMyxcbiAgICAgIDI0MixcbiAgICAgIDI0LFxuICAgICAgMTA3LFxuICAgICAgMTY2LFxuICAgICAgMjAwLFxuICAgICAgNDksXG4gICAgICA1NSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLUVhHR1Y1TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDYxNjA3MTE2OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVJfS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTQ0NTUyNTYzNjcxMDk6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5DMjhFSEVQU3kyTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSckhFOWdBd21kS3FZKzVYNTFjK2hlTWpscE14ZGorM0MwZ2QxYlBpamtBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkc0Uk0xNjMrbU9sanlXM3ZtalExYi9OUVQwZndqOW1UT05VcGNmdi8vaVVjMnJWTlhxYk1PbTVVZ29FYUVHekd4NVFCNDBleUIxekVjYjJZVHpPTUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIncyUzQwM1ZVZGJMUW1xU1g3SE5zWDlFbVhGNHFmWmFVc0xyS2xhWU8yZ2RZNWZWelhQSWhzblNEQ1NUbHhXS2QycUh3NVRJUUpKdlF0M1dRVVpmU0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2MTYwNzExNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkxODY1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
