const Telegraf = require('telegraf')
const bot = new Telegraf('1199009117:AAFclFE2ombdqSrqJ4NVZVycU6HHBO569nY')

bot.start((ctx) => {
	ctx.reply('Bot has started ! Hola People !!')
})


bot.command('agent',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendPhoto(ctx.chat.id,
		{source: "res/agent47.jpg"},
		{"reply_to_message_id":ctx.message.message_id})
})

bot.command('skull',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendPhoto(ctx.chat.id,
		{source: "res/skull.jpg"},
		{"reply_to_message_id":ctx.message.message_id})
})


bot.command('vegeta',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendAnimation(ctx.chat.id,
		{source: "res/vegeta.gif"},
		{"reply_to_message_id":ctx.message.message_id})
})

bot.command('chris',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendAnimation(ctx.chat.id,
		{source: "res/chris.gif"},
		{"reply_to_message_id":ctx.message.message_id})
})

bot.command('minion',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendAnimation(ctx.chat.id,
		'https://tenor.com/view/minions-gif-10096244',
		{"reply_to_message_id":ctx.message.message_id})
})

bot.command('chichi',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendAnimation(ctx.chat.id,
		'https://tenor.com/view/dragonball-dragonballz-chichi-milk-kaioken-gif-9565024',
		{"reply_to_message_id":ctx.message.message_id})
})

// one more way of sending an image is by using its photo id, which we get we we upload a picture
//in telegram. I cannot do not do that since , in my console, the photo array is not showing the photo id 

// bot.on('photo', (ctx)=>{
// 	console.log(ctx)
// })


bot.command('pics',(ctx)=> {
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
	ctx.telegram.sendMediaGroup(ctx.chat.id,[
	{
		type: 'photo',
		media: {
			source:'res/hole.jpg'
		}
	},
	{
		type: 'photo',
		media: {
			source:'res/soldier.jpg'
		}
	},
	{
		type: 'photo',
		media: {
			source:'res/space.jpg'
		}
	},
	{
		type: 'photo',
		media: {
			source:'res/tenor.gif'
		}
	}
	])
})

bot.command('muj', (ctx)=>{
	ctx.telegram.sendChatAction(ctx.chat.id, 'upload')
	ctx.telegram.sendLocation(ctx.chat.id, 26.8439, 75.5652)
})

bot.launch()
