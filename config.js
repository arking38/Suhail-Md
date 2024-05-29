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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_49_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRqVE9Uekw0UVQrRDd3WEFTcEl3VHppdE5NZ2VBU0lrRjdSb2lxUXYzdlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVzWnlSMGpqU2pHNVNnaUJnT09zQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQ2ZDU5MWUtYmVhZC00ZGI3LTkzN2UtY2JkZjdjYzkzY2I4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE4LFxuICAgICAgNixcbiAgICAgIDEzNyxcbiAgICAgIDE0MSxcbiAgICAgIDE2OCxcbiAgICAgIDE0MixcbiAgICAgIDUxLFxuICAgICAgOTMsXG4gICAgICAyMSxcbiAgICAgIDMwLFxuICAgICAgMjI5LFxuICAgICAgMTg1LFxuICAgICAgMjQ5LFxuICAgICAgMTg0LFxuICAgICAgMTg5LFxuICAgICAgMTk2LFxuICAgICAgMTY4LFxuICAgICAgMjA3LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTk2LFxuICAgICAgNDQsXG4gICAgICAxNDYsXG4gICAgICA2NCxcbiAgICAgIDE1NyxcbiAgICAgIDE0OSxcbiAgICAgIDI0MyxcbiAgICAgIDIwLFxuICAgICAgMTU4LFxuICAgICAgOTAsXG4gICAgICA5NyxcbiAgICAgIDY4LFxuICAgICAgMTQ2LFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICA0OSxcbiAgICAgIDIyMCxcbiAgICAgIDE4OSxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNktCSjFXNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDYxNjA3MTE2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVJfS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTQ0NTUyNTYzNjcxMDk6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZDMjhFSEVMdXYycklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSckhFOWdBd21kS3FZKzVYNTFjK2hlTWpscE14ZGorM0MwZ2QxYlBpamtBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpaRGtEeFhTYVFadW5BMlpEbE9CZUlxVmpRVEdaUDE4K2RpdUhSUytnWjloWDFXNU1NN0RMbGZZQnVqVlJPTFlKNTRtVGRsMDg3L2ZPSGs1QnhQYURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQzalZzczB5bFhHMXE2TmlNZjRHQmNMQ0J6RC9PUnhxK2dYQU9HcXRxYXJsdXFId041NGVld2hqWldDQ3ZDSW1QTTIzaElsRDIyaTloV3pGS0Z6NUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2MTYwNzExNjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDYxNjA3MTE2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTUwOTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0R3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrbUN2RUF3ZFJ6Zkx6ZlppM0c5QlhnWEYzREhyQ2x1dGhicGRRVmJPOGVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTY4NjI0NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
