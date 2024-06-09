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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923477013895";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_32_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm4xRGVPb3lxNnNpemlTVGwva0ovVnk0RnpyZ0RPYzF4SUhKOE9uU1YxTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX1hKU0E4RUFTc0daR1JYbEFhS1BvUVwiLFxuICBcInBob25lSWRcIjogXCIyODk3ZTJjZS00MTZmLTRjNTctOTUyMC02ZWIxMDllNjQ0MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNzUsXG4gICAgICAxNTcsXG4gICAgICA0LFxuICAgICAgNzYsXG4gICAgICAxODgsXG4gICAgICAyNTUsXG4gICAgICAxMDMsXG4gICAgICA4NSxcbiAgICAgIDE5OSxcbiAgICAgIDIyMixcbiAgICAgIDc3LFxuICAgICAgMTI0LFxuICAgICAgMjQ2LFxuICAgICAgMjMsXG4gICAgICA3OSxcbiAgICAgIDU5LFxuICAgICAgOTUsXG4gICAgICAwLFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgODUsXG4gICAgICAxNTgsXG4gICAgICAxMTEsXG4gICAgICAxMzcsXG4gICAgICA0MyxcbiAgICAgIDIzMixcbiAgICAgIDIzMCxcbiAgICAgIDc1LFxuICAgICAgNDAsXG4gICAgICAyMTYsXG4gICAgICAxNjEsXG4gICAgICAxNTQsXG4gICAgICAyNTEsXG4gICAgICAyMDksXG4gICAgICAyNDAsXG4gICAgICAyMSxcbiAgICAgIDQ3LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNIWERLVzQ0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjE2MDcxMTY6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBUiBLSU5HXCIsXG4gICAgXCJsaWRcIjogXCI5NDQ1NTI1NjM2NzEwOTo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKakMyOEVIRU9tMGxiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJySEU5Z0F3bWRLcVkrNVg1MWMraGVNamxwTXhkaiszQzBnZDFiUGlqa0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVBWWjBRbGlNQnRsZExrbU0xS3RXQ3dPNUlNeUFpK2dTOGtVeTJyRGRVLy9qZnA5bGx4T2FneGgwSDIzdmRnMnF6UFFpNzVwSS9iQ2hMN3V0eGdPRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUpYc2xBb2doeGhNNmxKTnh5eGVwWjFqcWkvUGRRSGkydG1YSXhjaVBpa2hESXJreVZrd2xRaTF2eDVGOTFzSXNUOEhiWmJ2SWdQeWlneFZZK3Q0Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDYxNjA3MTE2OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTE4MzE3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
