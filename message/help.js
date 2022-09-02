const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`  ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

 Hitung Mundur Idul Adha
 ${mundur}

●═════𖡹 ༺༻ 𖡹═════●
 *STATISTICS*
 𒍮 Upload : ${upload}
 𒍮 Downloads : ${download}

*BOT INFO*
 𒍮 Creator : ${ownerName}
 𒍮 Bot Name : ${botName}
 𒍮 Time : ${jam}
 𒍮 Date : ${tanggal}
 𒍮 Runtime :
 ${runtime(process.uptime())}

 *USER INFO*
 𒍮 Name : ${pushname !== undefined ? pushname : 'Kak'}
 𒍮 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 𒍮 Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 𒍮 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 𒍮 Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
●═════𖡹 ༺༻ 𖡹═════● 
 *MAIN MENU*
 𒍮 ${prefix}menu
 𒍮 ${prefix}infobot
 𒍮 ${prefix}donate
 𒍮 ${prefix}dashboard
 𒍮 ${prefix}owner
 𒍮 ${prefix}grouphinata
 𒍮 ${prefix}cekdrive
 𒍮 ${prefix}cekbandwidth
 𒍮 ${prefix}cekpremium
 𒍮 ${prefix}sewabot
 𒍮 ${prefix}listpremium
 𒍮 ${prefix}listsewa
 𒍮 ${prefix}speed
 𒍮 ${prefix}script
 𒍮 ${prefix}runtime
 𒍮 ${prefix}listbahasa

●═════𖡹 ༺༻ 𖡹═════●
 *CONVERTER/TOOLS*
 𒍮 ${prefix}sticker
 𒍮 ${prefix}stickerwm
 𒍮 ${prefix}smeme
 𒍮 ${prefix}toimg
 𒍮 ${prefix}tovideo
 𒍮 ${prefix}tomp3
 𒍮 ${prefix}ttp
 𒍮 ${prefix}attp
 𒍮 ${prefix}emojimix
 𒍮 ${prefix}nulis
 𒍮 ${prefix}spamcall
 𒍮 ${prefix}say
 𒍮 ${prefix}translate

●═════𖡹 ༺༻ 𖡹═════●
 *ANONYMOUS CHAT*
 𒍮 ${prefix}anonymous
 𒍮 ${prefix}start
 𒍮 ${prefix}next
 𒍮 ${prefix}stop
 𒍮 ${prefix}sendprofile

●═════𖡹 ༺༻ 𖡹═════●
 *STORE MENU*
 𒍮 ${prefix}list
 𒍮 ${prefix}addlist
 𒍮 ${prefix}dellist
 𒍮 ${prefix}updatelist
 𒍮 ${prefix}jeda
 𒍮 ${prefix}tambah
 𒍮 ${prefix}kurang
 𒍮 ${prefix}kali
 𒍮 ${prefix}bagi
 𒍮 proses <reply chat>
 𒍮 done <reply chat>
 𒍮 ${prefix}setproses
 𒍮 ${prefix}changeproses
 𒍮 ${prefix}delsetproses
 𒍮 ${prefix}setdone
 𒍮 ${prefix}changedone
 𒍮 ${prefix}delsetdone

●═════𖡹 ༺༻ 𖡹═════●
 *DOWNLOAD MENU*
 𒍮 ${prefix}play
 𒍮 ${prefix}ytmp3
 𒍮 ${prefix}ytmp4
 𒍮 ${prefix}getmusic
 𒍮 ${prefix}getvideo
 𒍮 ${prefix}instagram
 𒍮 ${prefix}igstory
 𒍮 ${prefix}tiktok
 𒍮 ${prefix}facebook
 𒍮 ${prefix}mediafire
 𒍮 ${prefix}telesticker
 𒍮 ${prefix}pinterestdl

●═════𖡹 ༺༻ 𖡹═════●
 *GROUP MENU*
 𒍮 ${prefix}afk
 𒍮 ${prefix}welcome
 𒍮 ${prefix}left
 𒍮 ${prefix}setwelcome
 𒍮 ${prefix}changewelcome
 𒍮 ${prefix}delsetwelcome
 𒍮 ${prefix}setleft
 𒍮 ${prefix}changeleft
 𒍮 ${prefix}delsetleft
 𒍮 ${prefix}linkgc
 𒍮 ${prefix}setppgc
 𒍮 ${prefix}setnamegc
 𒍮 ${prefix}setdesc
 𒍮 ${prefix}antilink
 𒍮 ${prefix}antiwame
 𒍮 ${prefix}open
 𒍮 ${prefix}close
 𒍮 ${prefix}setopen
 𒍮 ${prefix}changeopen
 𒍮 ${prefix}delsetopen
 𒍮 ${prefix}setclose
 𒍮 ${prefix}changeclose
 𒍮 ${prefix}delsetclose
 𒍮 ${prefix}add
 𒍮 ${prefix}kick
 𒍮 ${prefix}promote
 𒍮 ${prefix}demote
 𒍮 ${prefix}revoke
 𒍮 ${prefix}checksewa

●═════𖡹 ༺༻ 𖡹═════●
 *GAME MENU*
 𒍮 ${prefix}tictactoe
 𒍮 ${prefix}delttt
 𒍮 ${prefix}tebakgambar
 𒍮 ${prefix}kuis
 𒍮 ${prefix}tebaklagu
 𒍮 ${prefix}nyerah
 𒍮 ${prefix}casino
 𒍮 ${prefix}delcasino
 𒍮 ${prefix}akinator
 𒍮 ${prefix}cancelakinator

●═════𖡹 ༺༻ 𖡹═════●
 *KERANG MENU*
 𒍮 ${prefix}apakah
 𒍮 ${prefix}bisakah
 𒍮 ${prefix}kapankah
 𒍮 ${prefix}bagaimanakah
 𒍮 ${prefix}rate
 𒍮 ${prefix}gantengcek
 𒍮 ${prefix}cantikcek
 𒍮 ${prefix}sangecek
 𒍮 ${prefix}gaycek
 𒍮 ${prefix}lesbicek
 𒍮 ${prefix}cekbapak

●═════𖡹 ༺༻ 𖡹═════●
 *SEARCH MENU*
 𒍮 ${prefix}lirik
 𒍮 ${prefix}grupwa
 𒍮 ${prefix}pinterest
 𒍮 ${prefix}ytsearch
 𒍮 ${prefix}whatmusic
 𒍮 ${prefix}igstalk
 𒍮 ${prefix}searchbyimage

●═════𖡹 ༺༻ 𖡹═════●
 *RANDOM MENU*
 𒍮 ${prefix}quotes
 𒍮 ${prefix}cecan
 𒍮 ${prefix}cogan
 𒍮 ${prefix}waifu
 𒍮 ${prefix}meme
 𒍮 ${prefix}darkjoke
 𒍮 ${prefix}couple

●═════𖡹 ༺༻ 𖡹═════●
 *ASUPAN MENU*
 𒍮 ${prefix}asupan
 𒍮 ${prefix}bocil
 𒍮 ${prefix}geayubi
 𒍮 ${prefix}hijaber
 𒍮 ${prefix}rikagusriani
 𒍮 ${prefix}santuy
 𒍮 ${prefix}ukhty
 
●═════𖡹 ༺༻ 𖡹═════●
 *TEXTPRO MENU*
 𒍮 ${prefix}pencil
 𒍮 ${prefix}glitch
 𒍮 ${prefix}glitch2
 𒍮 ${prefix}glitchtiktok
 𒍮 ${prefix}pornhub
 𒍮 ${prefix}blackpink
 𒍮 ${prefix}berry
 𒍮 ${prefix}neon
 𒍮 ${prefix}3d-neon-light
 𒍮 ${prefix}3d-christmas
 𒍮 ${prefix}3d-boxtext
 𒍮 ${prefix}3d-orange-juice
 𒍮 ${prefix}logo-bear
 𒍮 ${prefix}logo-ninja
 𒍮 ${prefix}thunder
 𒍮 ${prefix}video-game-classic
 𒍮 ${prefix}marvel-studios
 𒍮 ${prefix}green-horror
 𒍮 ${prefix}magma
 𒍮 ${prefix}chocolate-cake
 𒍮 ${prefix}strawberry

●═════𖡹 ༺༻ 𖡹═════●
 *PHOTOOXY MENU*
 𒍮 ${prefix}flaming
 𒍮 ${prefix}shadow-sky
 𒍮 ${prefix}metallic
 𒍮 ${prefix}logo-naruto
 𒍮 ${prefix}logo-pubg
 𒍮 ${prefix}under-grass
 𒍮 ${prefix}harry-potter
 𒍮 ${prefix}flower-typography
 𒍮 ${prefix}picture-of-love
 𒍮 ${prefix}coffee-cup
 𒍮 ${prefix}butterfly
 𒍮 ${prefix}night-sky
 𒍮 ${prefix}carved-wood
 𒍮 ${prefix}illuminated-metallic
 𒍮 ${prefix}sweet-candy

●═════𖡹 ༺༻ 𖡹═════●
 *PAYMENT & BANK*
 𒍮 ${prefix}balance
 𒍮 ${prefix}buylimit
 𒍮 ${prefix}buyglimit
 𒍮 ${prefix}transfer
 𒍮 ${prefix}limit
 𒍮 ${prefix}balance

●═════𖡹 ༺༻ 𖡹═════●
 *BAILEYS*
 𒍮 ${prefix}fitnah
 𒍮 ${prefix}getquoted
 𒍮 ${prefix}tagall
 𒍮 ${prefix}hidetag
 𒍮 ${prefix}fakehidetag
 𒍮 ${prefix}react
 𒍮 ${prefix}setcmd
 𒍮 ${prefix}delcmd

●═════𖡹 ༺༻ 𖡹═════●
 *OWNER MENU*
 𒍮 > evalcode
 𒍮 x evalcode-2
 𒍮 $ executor
 𒍮 ${prefix}exif
 𒍮 ${prefix}join
 𒍮 ${prefix}left
 𒍮 ${prefix}self
 𒍮 ${prefix}public
 𒍮 ${prefix}setprefix
 𒍮 ${prefix}setppbot
 𒍮 ${prefix}broadcast
 𒍮 ${prefix}bcsewa
 𒍮 ${prefix}addpremium
 𒍮 ${prefix}delpremium
 𒍮 ${prefix}addsewa
 𒍮 ${prefix}delsewa`
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 082239202895 (Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Assalamualaikum!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}
