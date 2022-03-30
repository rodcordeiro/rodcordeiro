#!/usr/bin/env node

"use strict";
import QRCode from "qrcode";
import chalk from "chalk";

const qr = QRCode.toString(
  "https://rodcordeiro.github.io/shares/files/rodrigo_cordeiro.vcf",
  { type: "terminal", small: true, scale: 1 },
  function (err, url) {
    return url;
  }
);
console.log({
  name: "Rodrigo de Mendonça Cordeiro",
  nickname: "RodCordeiro",
  contact: {
    website: "https://rodcordeiro.com.br",
    email: "rodrigomendoncca@gmail.com",
    discord: "RodCordeiro#2122",
    telegram: "@RodCordeiro",
  },
  socialMedia: {
    github: "https://github.com/rodcordeiro",
    linkedin: "https://www.linkedin.com/in/rodrigomcordeiro/",
  },
});

console.log(chalk.bgBlackBright("\n\n->"),chalk.cyanBright("Download my contact card:\n"));
console.log(qr);
