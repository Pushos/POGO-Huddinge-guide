module.exports = {
    name: 'raid',
    description: 'Raid!',
    execute: async (msg, args) => {
      const Discord = require('discord.js');
  
    //Ovanstående kod överför b.l.a viktiga variablar från huvud filen. Denna fil är avsedd endast för commandot raid.

      // Här deklareras/skapas variablerna som sedan kommer att användas senare i koden.
      var Raidboss;
      var RaidEgg;
      var Raidiconlink;
  
      var RaidGymName = '';
      var RaidGymArea;
      var Koordinater;
  
      var RaidTime;
  
      //Nedanstående variablar innehåller kanal id för varje raid kanal. Boten använder dessa id för att kunna skicka i specifika kanaler.
      var id_123 = '669246683472723969';
      var id_centrum = '669246313237315605';
      var id_bnäs = '669246372742037556';
      var id_stuvsta = '669246429012951053';
      var id_flempan = '669246524596944959';
  
      //Här uppdateras variabelarna Raidboss & Raidiconlink, vilket innehåller info om vilken raid boss som rapporterats av användaren och en länk till den raidbossens ikon.
      //Ifall en raid skickas in med en namn på boss som inte står med i koden (i nuläget står endast alla legendarer gen 1-5 + timburr såklart ;) ) uppdaterar boten den med frågetecken ikon.
      if (args[0] === 'Articuno') {
        Raidboss = 'Articuno';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_144_00.png';
      } else if (args[0] === 'articuno') {
        Raidboss = 'Articuno';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_144_00.png';
      } else if (args[0] === 'Zapdos') {
        Raidboss = 'Zapdos';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_145_00.png';
      } else if (args[0] === 'zapdos') {
        Raidboss = 'Zapdos';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_145_00.png';
      } else if (args[0] === 'Moltres') {
        Raidboss = 'Moltres';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_146_00.png';
      } else if (args[0] === 'moltres') {
        Raidboss = 'Moltres';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_146_00.png';
      } else if (args[0] === 'Mewtwo') {
        Raidboss = 'Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_00.png';
      } else if (args[0] === 'mewtwo') {
        Raidboss = 'Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_00.png';
      } else if (args[0] === 'MewtwoA') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'M2A') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'AM2') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'AMewtwo') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'ArmoMewtwo') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'ArmoredMewtwo') {
        Raidboss = 'Armored Mewtwo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_150_01.png';
      } else if (args[0] === 'Raikou') {
        Raidboss = 'Raikou';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_243_00.png';
      } else if (args[0] === 'raikou') {
        Raidboss = 'Raikou';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_243_00.png';
      } else if (args[0] === 'Entei') {
        Raidboss = 'Entei';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_244_00.png';
      } else if (args[0] === 'entei') {
        Raidboss = 'Entei';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_244_00.png';
      } else if (args[0] === 'Suicune') {
        Raidboss = 'Suicune';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_245_00.png';
      } else if (args[0] === 'suicune') {
        Raidboss = 'Suicune';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_245_00.png';
      } else if (args[0] === 'Lugia') {
        Raidboss = 'Lugia';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_249_00.png';
      } else if (args[0] === 'lugia') {
        Raidboss = 'Lugia';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_249_00.png';
      } else if (args[0] === 'Ho-Oh') {
        Raidboss = 'Ho-Oh';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_250_00.png';
      } else if (args[0] === 'ho-oh') {
        Raidboss = 'Ho-Oh';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_250_00.png';
      } else if (args[0] === 'Regirock') {
        Raidboss = 'Regirock';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_377_00.png';
      } else if (args[0] === 'regirock') {
        Raidboss = 'Regirock';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_377_00.png';
      } else if (args[0] === 'Regice') {
        Raidboss = 'Regice';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_378_00.png';
      } else if (args[0] === 'regice') {
        Raidboss = 'Regice';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_378_00.png';
      } else if (args[0] === 'Registeel') {
        Raidboss = 'Registeel';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_379_00.png';
      } else if (args[0] === 'registeel') {
        Raidboss = 'Registeel';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_379_00.png';
      } else if (args[0] === 'Registeel') {
        Raidboss = 'Registeel';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_379_00.png';
      } else if (args[0] === 'registeel') {
        Raidboss = 'Registeel';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_379_00.png';
      } else if (args[0] === 'Latias') {
        Raidboss = 'Latias';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_380_00.png';
      } else if (args[0] === 'latias') {
        Raidboss = 'Latias';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_380_00.png';
      } else if (args[0] === 'Latios') {
        Raidboss = 'Latios';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_381_00.png';
      } else if (args[0] === 'latios') {
        Raidboss = 'Latios';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_381_00.png';
      } else if (args[0] === 'Kyogre') {
        Raidboss = 'Kyogre';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_382_00.png';
      } else if (args[0] === 'kyogre') {
        Raidboss = 'Kyogre';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_382_00.png';
      } else if (args[0] === 'Groudon') {
        Raidboss = 'Groudon';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_383_00.png';
      } else if (args[0] === 'groudon') {
        Raidboss = 'Groudon';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_383_00.png';
      } else if (args[0] === 'Rayquaza') {
        Raidboss = 'Rayquaza';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_384_00.png';
      } else if (args[0] === 'rayquaza') {
        Raidboss = 'Rayquaza';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_384_00.png';
      } else if (args[0] === 'Deoxys') {
        Raidboss = 'Deoxys';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_386_00.png';
      } else if (args[0] === 'deoxys') {
        Raidboss = 'Deoxys';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_386_00.png';
      } else if (args[0] === 'Uxie') {
        Raidboss = 'Uxie';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_480_00.png';
      } else if (args[0] === 'uxie') {
        Raidboss = 'Uxie';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_480_00.png';
      } else if (args[0] === 'Mesprit') {
        Raidboss = 'Mesprit ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_481_00.png';
      } else if (args[0] === 'mesprit') {
        Raidboss = 'Mesprit ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_481_00.png';
      } else if (args[0] === 'Azelf') {
        Raidboss = 'Azelf ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_482_00.png';
      } else if (args[0] === 'azelf  ') {
        Raidboss = 'Azelf ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_482_00.png';
      } else if (args[0] === 'Dialga') {
        Raidboss = 'Dialga ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_483_00.png';
      } else if (args[0] === 'dialga  ') {
        Raidboss = 'Dialga ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_483_00.png';
      } else if (args[0] === 'Palkia') {
        Raidboss = 'Palkia ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_484_00.png';
      } else if (args[0] === 'palkia  ') {
        Raidboss = 'Palkia ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_484_00.png';
      } else if (args[0] === 'Heatran') {
        Raidboss = 'Heatran';
        RaidEgg = 'T5';
        Raidiconlink = 'https://gamepress.gg/pokemongo/sites/pokemongo/files/styles/240w/public/2018-10/pokemon_icon_485_00.png?itok=ZXDVZUTw';
      } else if (args[0] === 'heatran') {
        Raidboss = 'Heatran';
        RaidEgg = 'T5';
        Raidiconlink = 'https://gamepress.gg/pokemongo/sites/pokemongo/files/styles/240w/public/2018-10/pokemon_icon_485_00.png?itok=ZXDVZUTw';
      } else if (args[0] === 'Regigigas') {
        Raidboss = 'Regigigas';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_486_00.png';
      } else if (args[0] === 'Regigigas ') {
        Raidboss = 'Regigigas ';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_486_00.png';
      } else if (args[0] === 'Giratina') {
        Raidboss = 'Giratina';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_487_00.png';
      } else if (args[0] === 'giratina') {
        Raidboss = 'Giratina';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_487_00.png';
      } else if (args[0] === 'Cresselia') {
        Raidboss = 'Cresselia';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_488_00.png';
      } else if (args[0] === 'cresselia') {
        Raidboss = 'Cresselia';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_488_00.png';
      } else if (args[0] === 'Phione') {
        Raidboss = 'Phione';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_489_00.png';
      } else if (args[0] === 'phione') {
        Raidboss = 'Phione';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_489_00.png';
      } else if (args[0] === 'Manaphy') {
        Raidboss = 'Manaphy';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_490_00.png';
      } else if (args[0] === 'manaphy') {
        Raidboss = 'Manaphy';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_490_00.png';
      } else if (args[0] === 'Darkrai') {
        Raidboss = 'Darkrai';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_491_00.png';
      } else if (args[0] === 'darkrai') {
        Raidboss = 'Darkrai';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_491_00.png';
      } else if (args[0] === 'Darkrai') {
        Raidboss = 'Darkrai';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_491_00.png';
      } else if (args[0] === 'darkrai') {
        Raidboss = 'Darkrai';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_491_00.png';
      } else if (args[0] === 'Shaymin') {
        Raidboss = 'Shaymin';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_492_00.png';
      } else if (args[0] === 'shaymin') {
        Raidboss = 'Shaymin';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_492_00.png';
      } else if (args[0] === 'Arceus') {
        Raidboss = 'Arceus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_493_00.png';
      } else if (args[0] === 'arceus') {
        Raidboss = 'Arceus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_493_00.png';
      } else if (args[0] === 'Victini') {
        Raidboss = 'Victini';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_494_00.png';
      } else if (args[0] === 'victini') {
        Raidboss = 'Victini';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_494_00.png';
      } else if (args[0] === 'Cobalion') {
        Raidboss = 'Cobalion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_638_00.png';
      } else if (args[0] === 'cobalion') {
        Raidboss = 'Cobalion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_638_00.png';
      } else if (args[0] === 'Terrakion') {
        Raidboss = 'Terrakion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_639_00.png';
      } else if (args[0] === 'terrakion') {
        Raidboss = 'Terrakion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_639_00.png';
      } else if (args[0] === 'Virizion') {
        Raidboss = 'Virizion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_640_00.png';
      } else if (args[0] === 'virizion') {
        Raidboss = 'Virizion';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_640_00.png';
      } else if (args[0] === 'Tornadus') {
        Raidboss = 'Tornadus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_641_00.png';
      } else if (args[0] === 'tornadus') {
        Raidboss = 'Tornadus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_641_00.png';
      } else if (args[0] === 'Thundurus') {
        Raidboss = 'Thundurus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_642_00.png';
      } else if (args[0] === 'thundurus') {
        Raidboss = 'Thundurus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_642_00.png';
      } else if (args[0] === 'Reshiram') {
        Raidboss = 'Reshiram';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_643_00.png';
      } else if (args[0] === 'reshiram') {
        Raidboss = 'Reshiram';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_643_00.png';
      } else if (args[0] === 'Zekrom') {
        Raidboss = 'Zekrom';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_644_00.png';
      } else if (args[0] === 'zekrom') {
        Raidboss = 'Zekrom';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_644_00.png';
      } else if (args[0] === 'Landorus') {
        Raidboss = 'Landorus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_645_00.png';
      } else if (args[0] === 'landorus') {
        Raidboss = 'Landorus';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_645_00.png';
      } else if (args[0] === 'Kyurem') {
        Raidboss = 'Kyurem';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_646_00.png';
      } else if (args[0] === 'kyurem') {
        Raidboss = 'Kyurem';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_646_00.png';
      } else if (args[0] === 'Keldeo') {
        Raidboss = 'Keldeo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_647_00.png';
      } else if (args[0] === 'keldeo') {
        Raidboss = 'Keldeo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_647_00.png';
      } else if (args[0] === 'Keldeo') {
        Raidboss = 'Keldeo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_647_00.png';
      } else if (args[0] === 'keldeo') {
        Raidboss = 'Keldeo';
        RaidEgg = 'T5';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_647_00.png';
      } else if (args[0] === 'T5') {
        Raidboss = 'Legendary Raid';
        RaidEgg = 'T5';
        Raidiconlink = 'https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/06/Pokemon-GO-Legendary-Egg.png';
      } else if (args[0] === 't5') {
        Raidboss = 'Legendary Raid';
        RaidEgg = 'T5';
        Raidiconlink = 'https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/06/Pokemon-GO-Legendary-Egg.png';
      } else if (args[0] === 'T4') {
        Raidboss = '4 Egg Raid';
        RaidEgg = 'T4';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Rare.png';
      } else if (args[0] === 't4') {
        Raidboss = '4 Egg Raid';
        RaidEgg = 'T4';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Rare.png';
      } else if (args[0] === 'T3') {
        Raidboss = '3 Egg Raid';
        RaidEgg = 'T3';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Rare.png';
      } else if (args[0] === 't3') {
        Raidboss = '3 Egg Raid';
        RaidEgg = 'T3';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Rare.png';
      } else if (args[0] === 'T2') {
        Raidboss = '2 Egg Raid';
        RaidEgg = 'T2';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Normal.png';
      } else if (args[0] === 't2') {
        Raidboss = '2 Egg Raid';
        RaidEgg = 'T2';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Normal.png';
      } else if (args[0] === 'T1') {
        Raidboss = '1 Egg Raid';
        RaidEgg = 'T1';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Normal.png';
      } else if (args[0] === 't1') {
        Raidboss = '1 Egg Raid';
        RaidEgg = 'T1';
        Raidiconlink = 'https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/tier-images/Raid_Boss_Egg_Normal.png';
      } else if (args[0] === 'Timburr') {
        Raidboss = 'Timburr';
        RaidEgg = 'T1';
        Raidiconlink = 'https://db.pokemongohub.net/images/ingame/normal/pokemon_icon_532_00.png';
      } else {
        Raidboss = args[0];
        Raidiconlink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_question_mark.svg/1024px-Red_question_mark.svg.png';
      };

      //Uppdaterar variabeln RaidGymName med färsk information, som innehåller raidens gymnamn.
      if (args.length >= 3) {
        for (var i = 2; i < args.length; i++) {
          RaidGymName = (i == args.length - 1) ? RaidGymName + args[i] : RaidGymName + args[i] + ' ';
        }
      }
  
      //Skapar variabeln RaidGymArea och Koordinater.. Detta håller koll på i vilket område raid gymmet tillhör, så boten kan skicka i rätt raid kanal. Med hjälp av variabeln: Koordinater, kan boten skapa en google länk med vägbeskrivning till gymmet.
      if (args[2] === 'Asmunds') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23911,17.97408'
      }
      else if (args[2] === 'asmunds') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23911,17.97408'
      }
      else if (args[2] === 'Sjödalsparkens') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23698,17.98447'
      }
      else if (args[2] === 'Sjödalsparken') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23698,17.98447'
      }
      else if (args[2] === 'Utescenen') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23698,17.98447'
      }
      else if (args[2] === 'Rådsparkens') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23994,17.98693'
      }
      else if (args[2] === 'Rådsparken') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23994,17.98693'
      }
      else if (args[2] === 'Fullersta') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.24016,17.97292'
      }
      else if (args[2] === 'Elhus') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23909,17.97096'
      }
      else if (args[2] === 'Elhuset') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23909,17.97096'
      }
      else if (args[2] === 'Rådjur') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23779,17.97002'
      }
      else if (args[2] === 'Växthus1') {
        RaidGymArea = 'Huddinge'
        Koordinater = '59.23631,17.9767'
      }
      //Eftersom det finns två gym med namnet Snäckan behöver man skriva vilket område gymmet ligger i.
      else if (args[2] === 'Snäckan') {
        if (args.length == 3) {
          msg.reply('Det finns två gym i Huddinge med namnet Snäckan. Gör en ny vanlig !raid, men skriv t.ex Snäckan Källbrink, eller Snäckan Centrum.');
          return;
        }
        if (args[3] === 'Källbrink') {
          RaidGymArea = 'Snättringe';
          Koordinater = '59.24951,17.95189';
        }
        else if (args[3] === 'Snättringe') {
          RaidGymArea = 'Snättringe';
          Koordinater = '59.24951,17.95189';
        }
        else if (args[3] === 'Huddinge') {
          RaidGymArea = 'Huddinge';
          Koordinater = '59.23691,17.97956';
        }
        else if (args[3] === 'Centrum') {
          RaidGymArea = 'Huddinge';
          Koordinater = '59.23691,17.97956';
        }
        else if (args[3] === 'Centrala') {
          RaidGymArea = 'Huddinge';
          Koordinater = '59.23691,17.97956';
        }
      }
      else if (args[2] === 'Mimi') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23475,17.98312';
      }
      else if (args[2] === 'Sälfontänen') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23615,17.98252';
      }
      else if (args[2] === 'Titta') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23468,17.98902';
      }
      else if (args[2] === 'Hörningsnäsvägens') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23354,17.99229';
      }
      else if (args[2] === 'Barrel') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23621,17.99531';
      }
      else if (args[2] === 'Uggla') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23863,17.98584';
      }
      else if (args[2] === 'Ugglan') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23863,17.98584';
      }
      else if (args[2] === 'Äppelflickan') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.23876,17.98797';
      }
      else if (args[2] === 'Kentaur') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.24142,17.99423';
      }
      else if (args[2] === 'Rådsvägens') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.24246,17.9913';
      }
      else if (args[2] === 'Stenfontän') {
        if (args.length >= 4) {
        RaidGymArea = 'flempan';
        Koordinater = '59.22089,17.93791';
        }else {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.24311,17.9962600';
        }
      }
      else if (args[2] === 'Kvarnhjulet') {
        RaidGymArea = 'Huddinge';
        Koordinater = '59.24181,17.99758';
      }
      else if (args[2] === 'Lekplats') {
        RaidGymArea = 'Snättringe';
        if (args.length == 3) {
          msg.reply('Det finns två gym i Snättringe som börjar på Lekplats. Gör en ny vanlig !raid, och specificera vilket gym du menar.');
          return;
        }
        else {
          if (args[3] == 'Allévägen') {
            Koordinater = '59.2631,17.97397';
          } else if (args[3] == 'Byggmästarvägen') {
            Koordinater = '59.25941,17.96424';
          } else {
            msg.reply('Någonting gick fel. Du kan starta en raid vid Lekplats Allévägen eller Lekplats Byggmästarvägen. Testa följ detta exempel: !raid T5 18:00 Lekplats Allévägen');
            return;
          }
        }
      }
      else if (args[2] === 'Köpmansparken') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.2537,17.98003';
      }
      else if (args[2] === 'Snättringe') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.254468,17.982059';
      }
      else if (args[2] === 'Rosendalsparkens') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.24969,17.97639';
      }
      else if (args[2] === 'Rosendalsparken') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.24969,17.97639';
      }
      else if (args[2] === 'Stockholms') {
        if (args.length == 3) {
          msg.reply('Det finns två gym i Huddinge med namnet Stockholms Gräns. Gör en ny vanlig !raid, men skriv t.ex Stockholms Gräns Snättringe, eller Stockholms Gräns Stuvsta.');
          return;
        }
        if (args[3] === 'Stuvsta') {
          RaidGymArea = 'Stuvsta';
          Koordinater = '59.25606,18.01361';
        }
        else if (args[3] === 'Snättringe') {
          RaidGymArea = 'Snättringe';
          Koordinater = '59.26237,17.98599';
        }
        else if (args[3] === 'Älvsjö') {
          RaidGymArea = 'Snättringe';
          Koordinater = '59.26237,17.98599';
        }
        else if (args[3] === 'Rågsved') {
          RaidGymArea = 'Stuvsta';
          Koordinater = '59.25606,18.01361';
        }
      }
      else if (args[2] === 'Välkommen') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.26138,17.99139';
      }
      else if (args[2] === 'Älvsjöskogen') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.26064,17.99684';
      }
      else if (args[2] === 'Kanalletorget') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.26086,17.97337';
      }
      else if (args[2] === 'Snättringekiosken') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.26086,17.97337';
      }
      else if (args[2] === 'Milstenen') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.255619,17.970449';
      }
      else if (args[3] === 'Milstenen') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.255619,17.970449';
      }
      else if (args[2] === 'Mr.Peacock') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.248386,17.98125';
      }
      else if (args[2] === 'Peacock') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.248386,17.98125';
      }
      else if (args[2] === 'Huddinge') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.25105,17.95256';
      }
      else if (args[2] === 'Utegym') {
        if (args[3] === 'Källbrink') {
        RaidGymArea = 'Snättringe';
        Koordinater = '59.247983,17.950441';
      }
    }
      else if (args[2] === 'Stuvsta') {
        RaidGymArea = 'Stuvsta';
        Koordinater = '59.25271,17.99661';
      }
      else if (args[2] === 'Kungsklippan') {
        RaidGymArea = 'Stuvsta';
        Koordinater = '59.25207,18.0008';
      }
      else if (args[4] === 'Vitvingevägen') {
        RaidGymArea = 'Myrängen';
        Koordinater = '59.24793,18.02751';
      }
      else if (args[2] === 'Vitvingevägen') {
        RaidGymArea = 'Myrängen';
        Koordinater = '59.24793,18.02751';
      }
      else if (args[4] === 'Kortvingevägen') {
        RaidGymArea = 'Myrängen';
        Koordinater = '59.247795,18.035673';
      }
      else if (args[2] === 'Kortvingevägen') {
        RaidGymArea = 'Myrängen';
        Koordinater = '59.247795,18.035673';
      }
      else if (args[3] === 'Myrängen') {
        if (args[2] == 'Fotbollsplanen') {
          RaidGymArea = 'Myrängen';
          Koordinater = '59.24391,18.02361';
        };
      }
      else if (args[2] === 'Långkärrsparken') {
        RaidGymArea = 'Myrängen';
        Koordinater = '59.23661,18.02207';
      }
      else if (args[2] === 'Mellansjövägens') {
        RaidGymArea = 'b-näs';
        Koordinater = '59.23661,18.02207';
      }
    else if (args[2] === 'Björntjänst') {
      RaidGymArea = 'b-näs';
      Koordinater = '59.23569,18.00582';
    }
    else if (args[2] === 'Båtparken') {
      RaidGymArea = 'b-näs';
      Koordinater = '59.23234,18.0013';
    }
    else if (args[2] === 'båtparken') {
      RaidGymArea = 'b-näs';
      Koordinater = '59.23234,18.0013';
    }
    else if (args[2] === 'Rikets') {
      RaidGymArea = 'b-näs';
      Koordinater = '59.22133,18.0085';
    }
    else if (args[2] === 'Riket') {
      RaidGymArea = 'b-näs'
      Koordinater = '59.22133,18.0085'
    }
    else if (args[2] === 'Orlångens') {
      RaidGymArea = 'b-näs'
      Koordinater = 'https://www.google.com/maps/d/viewer?hl=sv&mid=1f6ocG9d6H37G13Gisdg5txFNelVOdvHe&ll=59.22436192253678%2C18.018811304522842&z=14'
    }
    else if (args[2] === 'Orlången') {
      RaidGymArea = 'b-näs'
      Koordinater = 'https://www.google.com/maps/d/viewer?hl=sv&mid=1f6ocG9d6H37G13Gisdg5txFNelVOdvHe&ll=59.22436192253678%2C18.018811304522842&z=14'
    }
    else if (args[2] === 'Holken') {
      RaidGymArea = 'b-näs'
      Koordinater = 'https://www.google.com/maps/d/viewer?hl=sv&mid=1f6ocG9d6H37G13Gisdg5txFNelVOdvHe&ll=59.22436192253678%2C18.018811304522842&z=14'
    }
    else if (args[2] === 'Balingsholms') {
      RaidGymArea = 'b-näs'
      Koordinater = '59.22607,18.02832'
    }
    else if (args[2] === 'Spindelparken') {
      RaidGymArea = 'b-näs'
      Koordinater = '59.22847,17.98401'
    }
    else if (args[2] === 'Snigeln') {
      RaidGymArea = 'flempan'
      Koordinater = '59.23727,17.95278'
    }
    else if (args[2] === 'Skrivsugen') {
      RaidGymArea = 'flempan'
      Koordinater = '59.228742,17.924785'
    }else if (args[2] === 'S:t') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22782,17.93814'
    }
    else if (args[2] === 'St') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22782,17.93814'
    }
    else if (args[2] === 'Damen') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22334,17.94096'
    }
    else if (args[2] === 'Street') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22242,17.93789'
    }
    else if (args[2] === 'Gazebo') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22067, 17.93292'
    }
    else if (args[2] === 'Mindre') {
      RaidGymArea = 'flempan'
      Koordinater = '59.21977,17.93032'
    }
    else if (args[2] === 'Drakarna') {
      RaidGymArea = 'flempan'
      Koordinater = '59.22124,17.93715'
    }
    else if (args[2] === 'Fyrfatet') {
      RaidGymArea = 'flempan'
      Koordinater = '59.21866,17.94096'
    }
      //Alla gym är inte klara. Några kvar i Flempan. Måste fundera på hur jag vill göra här.
      //Finns ett annat alternativ, att be användaren att specificera gymmets område: t.ex !raid T5 18:00 Snättringe Lekplats Allévägen. Dock känns inte det lika kul då användaren behöver skriva längre meddlenaden, isf skriver jag hellre längre kod!
      //De flesta gymmen har bara ett ord i sig, det är pga av man bara ska kunna specificera minst ett ord i rätt ordning. Då känner boten oftare av ifall man skriver fel.


      //Per? Blixten Henriksson/Farsoten/Per Päron, ser du detta?
      
      //Ifall gymmets namn inte hittas i botens kod, får användaren en tagg plus detta meddelande.
      else {
        msg.reply('Gymmet hittades inte. Kontrollera att det är rättstavat och stor bokstav i början av gymnamnet (Barrel Horses och inte barrel horses). Om det är nytt kan det hända att det inte finns med i min databas.');
        msg.channel.send('OBS, de flesta gymmen i Flempan & Visättra  har inte lagts till, men kommer göras så småningom.');
        return;
      }
  
      //Ifall information saknas får användaren ett meddelande om det. T.ex om användaren glömmer bort att specificera tiden eller liknande. Ifall detta händer går inte boten vidare och inget raid meddelande skickas.
      if (args.length <= 2) {
        msg.channel.send("För att skicka en raid behöver du skriva !raid ''Typ av raid eller raid boss'' ''Tid'' ''Gymnamn''. Exempelvis: !raid T5 17:30 Asmunds Häst.");
      }
      //Om all information tas emot, skapas en embed (ett häftigt meddelande bara botar kan göra, går att designa hur man vill) över raiden. 
      if (args.length >= 3) { //kontrollerar ännu en gång att meddelandet är tillräckligt långt så all information tagits emot.
        RaidTime = args[1]; //här uppdateras variabeln RaidTime, med information om vilken tid raiden äger rum.
        const embedr = new Discord.RichEmbed(); //detta skapar variabeln embedr, en unik variabel bara för att hålla denna embed´s info, kommer användas senare när meddelandet skickas ut.
  
        embedr.setTitle('**' + Raidboss + '**');  //t.ex Heatran eller Legendary Raid. ** - stjärorna gör texten så kallad fet, så att den syns tydligare.
        embedr.setColor('#0099ff'); //Väljer färg för denna embed
        embedr.setAuthor('Ny Raid!', Raidiconlink);
        embedr.setDescription('**' + RaidGymName + '**');
        embedr.setURL('https://www.google.com/maps/dir//' + Koordinater + '/'); //Här skapas en google länk, med hjälp av variabeln Koordinater, som leder till en vägbeskrivning.
        embedr.setThumbnail(Raidiconlink); //Uppdaterar raidens foto, t.ex en länk till en ikon av Heatran.
        embedr.setTimestamp(''); //Egentligen inget att bry sig om, handlar om vilken tid meddelandet skickas.
        embedr.setFooter('Raid skapad av ' + msg.member.user.tag + ', starta en ny raid med !raid', 'https://image.flaticon.com/icons/png/512/188/188918.png');
        embedr.addField('Tid:', RaidTime);
        embedr.addField('Koordinater:', Koordinater);
  
      //I ovanstående kod använder boten alla variablar som uppdaterats med information för att skapa ett embed meddelande med informationen som behövs.
      //Ovanstående kod: ljusblå = variablar, orange text = text som används i meddelandet.

        //Om raiden är en T5 eller T4 ska den hamna i en av områdes kanalerna. Pass variabeln bestämmer om raiden ska passera och hamna i en områdeskanal annars hamnar den i kanalen för 123 raider.
        var pass = (RaidEgg == 'T5' || RaidEgg === 'T4') ? true : false;
        //id uppdateras med kanalen 123 raider´s id
        var id = id_123;
  
        //id uppdateras ifall det är en t5 eller t4, annars behålls det id som gäller för 123 raider.
        if (pass) {
          if ((RaidGymArea == 'Stuvsta' || RaidGymArea == 'Snättringe' || RaidGymArea == 'Stuvsta-Snättringe' || RaidGymArea == 'Myrängen'))
            id = id_stuvsta;
          else if (RaidGymArea == 'Huddinge')
            id = id_centrum; 
          else if (RaidGymArea == 'b-näs')
            id = id_bnäs;
            else if (RaidGymArea == 'flempan')
            id = id_flempan;
          else {
            msg.reply('Något gick fel...');
            return;
          };
        };
        


        //Här skickas ett tack meddelande.
        msg.reply("Tack! Din raid har skickats i kanalen " + msg.guild.channels.get(id).toString());
        //Embed skickas i den kanalen som id står för.
        msg.client.channels.get(id).send(embedr);
        return;

        //Tror det var allt, hoppas du förstod. ;)
      };
    }
  };
