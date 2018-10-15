import { TOKEN } from '../envConstatnts'

const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText("/Start", (msg) => {
  const chatId = msg.chat.id
  const resp = "Привет! Я бот для сбора статистики просмотра сообщений канала"
  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  console.log(msg)
})
