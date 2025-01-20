import chalk from "chalk";

console.log(chalk.green(`hello world!`));

import figlet from "figlet";
import { log } from "node:console";

figlet("javascript", function (err, data) {
  if (err) {
    console.log("something went wrong");
    console.log(err);
    return;
  }
  console.log(data);
});
// import ora from "ora";

// const spinner = ora("loading unicorns").start();

// setTimeout(() => {
//     spinner.color = "yellow"
//     spinner.text  = "Loading yellow"
//     spinner.color = "yellow"
//     spinner.color = "cyan"
// }, 1000);

import pokemon from "pokemon";

const all = pokemon.all("ja");
console.log(all);

const random = pokemon.random();
console.log(random);

const getName = pokemon.getName(147);
console.log(getName);

// const getId = pokemon.getId('Dratini')
// console.log(getId);
//147

import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
console.log(createRandomUser());

// import inquirer from "inquirer";

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// // console.log(prompt());

// const prompt = inquirer.createPromptModule();

// prompt(questions).then();
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

// import schedule from "node-schedule";

// const job = schedule.scheduleJob("42 * * * *", function () {
//   console.log("The answer to life, the universe, and everything!");
// });
// console.log(job);

import qr from "qr-image"; // Use the 'import' syntax

// Data to encode in the QR code
const data = "Hello world";

// Generate the QR code as an ASCII string
const qr_ascii = qr.imageSync(data, { type: "svg" });

// Output the QR code to the terminal
console.log(qr_ascii);

import inquirer from 'inquirer';
import axios from "axios";
import fs from "fs";

// Function to generate user profile data
const generateUserProfile = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    users.push(user);
  }
  return users;
};

// Function to generate company info
const generateCompanyInfo = (count) => {
  const companies = [];
  for (let i = 0; i < count; i++) {
    const company = {
      name: faker.company.companyName(),
      industry: faker.company.bsBuzz(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
    };
    companies.push(company);
  }
  return companies;
};

// Function to generate product details
const generateProductDetails = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
    };
    products.push(product);
  }
  return products;
};

// Function to generate QR code
const generateQRCode = (data) => {
  const qr_svg = qr.imageSync(data, { type: "ascii" });
  console.log(qr_svg);
};

// Function to ask user for data type and count
const askQuestions = async () => {
  const questions = [
    {
      type: "list",
      name: "dataType",
      message: "What type of data would you like to generate?",
      choices: ["User Profile", "Company Info", "Product Details"],
    },
    {
      type: "number",
      name: "count",
      message: "How many entries would you like?",
      default: 1,
    },
  ];

  const answers = await inquirer.prompt(questions);
  const { dataType, count } = answers;

  let data;
  switch (dataType) {
    case "User Profile":
      data = generateUserProfile(count);
      break;
    case "Company Info":
      data = generateCompanyInfo(count);
      break;
    case "Product Details":
      data = generateProductDetails(count);
      break;
    default:
      console.log("Invalid choice.");
      return;
  }

  // Display results
  console.log("Generated Data:");
  console.log(JSON.stringify(data));

  // Optional: Generate a QR code for the first entry (if you want to visualize data via QR code)
  if (data.length > 0) {
    console.log("\nGenerated QR Code for the first entry:");
    generateQRCode(JSON.stringify(data[0]));
  }
};

// Run the program
askQuestions();
