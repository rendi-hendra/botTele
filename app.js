const { Telegraf } = require("telegraf");
const jadwalSekarang = require("./jadwal");

const bot = new Telegraf("5671377356:AAElahGDDjKJKswN_EEmxThMWL5tHtx3KOY");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );

  //   bot.hears("Jadwal All", (ctx) => {
  //     bot.telegram.sendPhoto(ctx.chat.id, {
  //       source: "res/jadwal.jpg",
  //     });
  //   });

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

