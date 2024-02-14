console.log("Starting the Milady Bot...");

const TelegramBot = require('node-telegram-bot-api');

// Замените 'ваш_токен' на токен вашего бота, который вы получили от BotFather
const token = '6677152999:AAF7ZU2y_lm_4ClutI9xHnk3fvt5UTp31RI';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Клавиатура с двумя кнопками
    const keyboard = {
        reply_markup: {
            keyboard: [
                [{ text: 'Вступить в клуб' }],
                [{ text: 'Оплатить клуб' }],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    };

    bot.sendMessage(chatId, '* Для раскрытия меню, нажмите на "квадратную пуговицу"', keyboard);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
        case 'Вступить в клуб':
            // Замените 'ссылка_на_сайт_вступления' на вашу фактическую ссылку
            bot.sendMessage(chatId, 'Заполните пожалуйста анкету по ссылке для вступления в клуб: [https://urly.fi/3qjE]');
            break;

        case 'Оплатить клуб':
            // Замените 'ссылка_на_сайт_оплаты' на вашу фактическую ссылку
            bot.sendMessage(chatId, 'Переходите по ссылке для оплаты клуба: [https://urly.fi/3oCh]');
            break;

        default:
            bot.sendMessage(chatId, 'Выберите один из вариантов в меню.');
            break;
    }
});