const Telegraf = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1270746295:AAFNJo6WGNoiqNPfJIjlUuuzAPOwnLouxuc')

bot.start((ctx) => {
	ctx.reply('The Bot has started')
})

// bot.command('covid',(ctx)=> {
// 	//ctx.reply("Covid-19 stats incoming ")  //ctx.telegra,.sendMessage is same as cyx.reply
// 	ctx.telegram.sendMessage(ctx.chat.id,'<b>Covid-19</b> stats <i>incoming</i> !!',{parse_mode:"HTML"})
// })

bot.command('covid',(ctx)=> {
	//ctx.reply("Covid-19 stats incoming ")
	ctx.telegram.sendMessage(ctx.chat.id,'Covid-19 stats incoming !!', 
		{
			reply_markup: {
				inline_keyboard:[
					//[{text: "click me", url: "www.google.com"},{text: "click me", url: "www.facebook.com"}],
					//[{text: "Click me", url: "www.youtube.com"}]
					[{text: "Delhi", callback_data: "DL"},{text: "Rajasthan", callback_data: "RJ"}],
					[{text: "Uttar Pradesh", callback_data: "UP"}]
				]
			}
		})
})

bot.action('DL',(ctx) => {
	ctx.deleteMessage() //deletes the message which is calling it

	stateCode=ctx.match

	getData(stateCode).then((result) => {

		ctx.telegram.sendMessage(ctx.chat.id,result, 
		{
			reply_markup: {
				inline_keyboard:[
					[{text: "Go back to menu", callback_data: "go-back"}]
				]
			}
		})

	})

})

bot.action('RJ',(ctx) => {
	ctx.deleteMessage() 
	stateCode=ctx.match

	getData(stateCode).then((result) => {

		ctx.telegram.sendMessage(ctx.chat.id,result, 
		{
			reply_markup: {
				inline_keyboard:[
					[{text: "Go back to menu", callback_data: "go-back"}]
				]
			}
		})

	})
})

bot.action('UP',(ctx) => {
	ctx.deleteMessage()
	stateCode=ctx.match

	getData(stateCode).then((result) => {

		ctx.telegram.sendMessage(ctx.chat.id,result, 
		{
			reply_markup: {
				inline_keyboard:[
					[{text: "Go back to menu", callback_data: "go-back"}]
				]
			}
		})

	})
})

bot.action('go-back',(ctx)=> {
	ctx.deleteMessage()
	ctx.telegram.sendMessage(ctx.chat.id,'Covid-19 stats incoming !!', 
		{
			reply_markup: {
				inline_keyboard:[
					[{text: "Delhi", callback_data: "DL"},{text: "Rajasthan", callback_data: "RJ"}],
					[{text: "Uttar Pradesh", callback_data: "UP"}]
				]
			}
		})

})

async function getData(stateCode) {
	url='https://api.covid19india.org/data.json'
	let res = await axios.get(url)
	stateDataArray = res.data.statewise
		stateData = stateDataArray.filter((elem) => {return elem.statecode == stateCode})
		cases = stateData[0]
		//console.log(cases.confirmed)

		// we use back ticks (`) to show the data as it is , we the same formatting and same structure
		results = `Cases in ${cases.state} :  
	Confirmed Cases : ${cases.confirmed}
	Active Cases : ${cases.active}
	Recoverd Cases : ${cases.recovered}
	Deaths : ${cases.deaths}
		`

		console.log(results)
		return results
}

bot.launch()