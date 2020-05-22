//const Telegraf = require('Telegraf')
const { Composer } = require('micro-bot')

//const bot = new Telegraf('1117344743:AAGTL2VKDevP-C9fGfdLuHEPHSI_ZY1zfbs')
const bot = new Composer

bot.start((ctx)=>{
    ctx.reply('Bot has started')
})

bot.help((ctx)=> {
    ctx.reply('this is a help message')
})

bot.command("achint",(ctx)=> {
    ctx.reply('Mr. Achint is so Awesome!!! He made this app and even wrote this line.')
})

//bot.launch()
module.exports = bot

//murmuring-tor-86101
