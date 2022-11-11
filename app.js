const { Telegraf } = require("telegraf");
const jadwalSekarang = require("./jadwal");
const moment = require("moment");

moment.locale("id");

const bot = new Telegraf("5671377356:AAElahGDDjKJKswN_EEmxThMWL5tHtx3KOY");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Welcome",
    {}
  );

bot.hears("Jam", ctx => {
 bot.telegram.sendMessage(ctx.chat.id, moment().format("LT"));
})

  bot.hears("Jadwal", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Jadwal", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Jadwal All",
              callback_data: "Jadwal All",
            },
            {
              text: "Jadwal Now",
              callback_data: "Jadwal Now",
            },
          ],
        ],
      },
    });
  });

  bot.action("Jadwal All", (ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id, {
      source: "./jadwal.jpg",
    });
  });

  bot.action("Jadwal Now", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, jadwalSekarang());
  });
});

 console.log("Bot Run");
 bot.launch();

