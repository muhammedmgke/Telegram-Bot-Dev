const Telegraf = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1025577033:AAGAesxKnLCNyDoDaA1agSp1B2Slsf0n1SU')

// bot.use((ctx) => {
// 	ctx.reply("Hello Mr. Awesome !!")
// })

bot.start((ctx) => {
	ctx.reply("The bot has Started")
	ctx.reply("Hello Mr. Awesome")
})

bot.help((ctx) => {
	ctx.reply("This bot can perform the following commands\n - /start\n - /help")
	ctx.reply(" This bot is made only as a free time hobby - No serious work")
})

bot.on("photo",(ctx) => {
	ctx.reply("Cool Photo !")
})

bot.hears("Achint",(ctx)=> {
	ctx.reply("Oh, Mr. Achint is awesome")
})

bot.command("achint",(ctx) => {
	ctx.reply("Oh, Mr. Achint is just pure awesome. He made the bot which you are talking to right now")
})

bot.command("say",(ctx) => {
	msg=ctx.message.text
	msgArray=msg.split(" ")

	console.log(msgArray)
	msgArray.shift()
	console.log(msgArray)

	newMsg = msgArray.join(" ")

	ctx.reply(newMsg)
})

bot.command("fortune",(ctx) => {
	url="http://yerkee.com/api/fortune/"

	axios.get(url)
	.then((res) => {
		console.log(res.data.fortune)
		ctx.reply(res.data.fortune)
	})
})

bot.launch()