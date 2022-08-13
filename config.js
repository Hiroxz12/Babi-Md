let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('.6285732267014')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['6285732267014', 'Creator/Owner', true],
['6285732267014', 'TioXd ⁴⁰⁴-ﾉ [BOT MD]', true]
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.WM = '© Hiroxz'
global.linkgc = 'https://chat.whatsapp.com/JEDQfzMGZan4HA98wtxsNL'
global.linkig = 'https://www.instagram.com/prm2.0'
global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@TioXd'

global.wait = '_*Mohon Tunggu ...*_'
global.eror = '_*Server Sedang Gangguan..*_'

//========Url Template Buttons==========//
global.dtu = 'Follow'
global.urlnya = "https://www.instagram.com/prm2.0"

//============= callButtons ============//
global.dtc = 'Call Owner'
global.phn = '+62 822-2179-2667'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/f786a416a69d928350b62.png', 'https://telegra.ph/file/f786a416a69d928350b62.png',
  'https://telegra.ph/file/f786a416a69d928350b62.png', 'https://telegra.ph/file/f786a416a69d928350b62.png',
  'https://telegra.ph/file/f786a416a69d928350b62.png', 'https://telegra.ph/file/f786a416a69d928350b62.png',
  'https://telegra.ph/file/f786a416a69d928350b62.png', 'https://telegra.ph/file/f786a416a69d928350b62.png',
  'https://telegra.ph/file/f786a416a69d928350b62.png', 'https://telegra.ph/file/f786a416a69d928350b62.png'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "Sedikit lagi, semangat ya :')"

global.multiplier = 69 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
