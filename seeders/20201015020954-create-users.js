"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("123456", 6);
    const createdAt = new Date();
    const updatedAt = createdAt;

    // https://unsplash.com/photos/ZHvM3XIOHoE
    // https://unsplash.com/photos/b1Hg7QI-zcc
    // https://unsplash.com/photos/RiDxDgHg7pw

    await queryInterface.bulkInsert("users", [
      {
        username: "Yellow",
        email: "yellow@email.com",
        password: password,
        imageUrl:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80",
        createdAt,
        updatedAt,
      },
      {
        username: "daksh",
        email: "daksh@email.com",
        password: password,
        imageUrl:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80",
        createdAt,
        updatedAt,
      },
      {
        username: "Yellow Class",
        email: "yellowClass@email.com",
        password: password,
        imageUrl:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80",
        createdAt,
        updatedAt,
      },
      {
        username: "Testing 1",
        email: "testing1@email.com",
        password: password,
        imageUrl:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80",
        createdAt,
        updatedAt,
      },
      {
        username: "Testing 2",
        email: "testing2@email.com",
        password: password,
        imageUrl:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80",
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
