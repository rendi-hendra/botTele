const { Telegraf } = require("telegraf");
const jadwalSekarang = require("./jadwal");
const moment = require("moment");
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const jamLocal = moment()
jamLocal.locale('id')

const bot = new Telegraf("5671377356:AAElahGDDjKJKswN_EEmxThMWL5tHtx3KOY");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Welcome",
    {}
  );

bot.hears("Jam", ctx => {
 bot.telegram.sendMessage(ctx.chat.id, jamLocal.format("LT"));
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

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Bot Run");
  bot.launch();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

