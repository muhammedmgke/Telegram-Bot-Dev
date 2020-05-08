const Telegraf = require('telegraf')
const axios = require('axios')

BOT_TOKEN = '1243550732:AAHvhstdMrozQNau4ZMW--FSYFD-dhSTrSs'
OMDB_API_KEY = 'd66c8ff9'

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
	ctx.reply('Bot has started, Mr. Awesome !')
})


bot.on('inline_query', (ctx) => {
 	query = ctx.inlineQuery.query
 	url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
 	//console.log(url)
	if(query.length>0) {
		axios.get(url)
 		.then((res) => {
 			data=res.data
 			searchArr = data.Search
 			//console.log(searchArr.length)

 			if(searchArr) {

				result = searchArr.map((elem,index) => {
					return {
						type:'photo',
						id: index,
						photo_url: elem.Poster,
						thumb_url: elem.Poster,
						caption: `Title: ${elem.Title}\nYear: ${elem.Year}\n IMDB URL: https://www.imdb.com/title/${elem.imdbID}`
					}

				})


			ctx.answerInlineQuery(result) 	
 			}
 			
		

 		})

	}
 	

 })



// bot.on('inline_query', async (ctx) => {
// 	//console.log(ctx.inlineQuery.query)
// 	query = ctx.inlineQuery.query
// 	url=`https://dev.to/api/articles?tag=${query}`
// 	//axios.get(url)
// 	// .then((res)=> {
// 	// 	resArr = res.data
// 	// 	console.log(res.resArr.length)
// 	// })

// 	console.log(url)
// 	res = await axios.get(url)

// 		resArr = res.data
// 		console.log(resArr.length)

// 	result = resArr.map((elem,index) => {
// 		return {
// 			type: 'article',
// 			id: String(index),
// 				title: elem.title,
// 				description: elem.description,
// 				input_message_content: {
// 					message_text: `${elem.title}\n${elem.description}\n${elem.url}`
// 				},
// 				url:elem.url

// 			}
// 		})

// 	ctx.answerInlineQuery(result)

// })

bot.launch()