const fs = require('fs')

global.creator = '𝚃𝚊𝚔𝚊𝚜𝚑𝚒' 
global.apikey = ["𝚃𝚊𝚔𝚊𝚜𝚑𝚒", "𝙽𝚎𝚣𝚑𝚊-𝙱𝚘𝚝", "𝙽𝚎𝚣𝚑𝚊"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
