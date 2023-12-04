
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Assalomu alaykum 🖐\n\nNamangan Toshkent yo'nalishi bo'yicha taxi 🚖 qidiryapsizmi? \n\nAdminga murojat qilish: \n\n👉 @Baxodir2222 \n\n📞Admin Telefon nomer \n\n👉 +998 88 650 22 22 \n\n👉 +998946002020");
    bot.sendMessage(chatId, "Taxi chaqirish 🚕 uchun quyidagi guruhga qo'shiling !!! \n\n👇👇👇👇👇👇👇👇👇👇👇👇👇   \n\nhttps://t.me/namangan_toshkent_taxis");

  });