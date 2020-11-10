module.exports = [
  {
    name: "application",
    type: "list",
    message: "Choose whether your app is a PC or a mobile(default:mobile)",
    choices: [
      {
        name: "PC",
        value: "pc"
      },
      {
        name: "mobile",
        value: "mobile"
      }
    ],
    default: "mobile"
  }
];
