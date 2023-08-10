# URL to QR Code Generator

This is a JavaScript program that generates a QR code image based on a provided URL using the `qr-image` library. It uses the `inquirer` library to prompt the user for input.

## Features

- Generates a QR code image from a URL.
- Prompts the user to enter the URL.
- Saves the QR code image as "qr-img.png".

## How to Use

1. Make sure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone this repository or copy the code into a file.

3. Open your terminal and navigate to the project directory.

4. Install the required dependencies by running:

   ```sh
   npm install inquirer qr-image fs
   ```

5. Run the script by executing:

   ```sh
   node index.js
   ```

6. Follow the prompts to enter the URL.

7. Once the URL is provided, the script will generate a QR code image named "qr-img.png" in the same directory.
