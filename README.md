# Food Donation Backend

This project is a backend application for a food donation platform, built using Node.js and Express. It provides APIs for managing donors, recipients, and contact information, allowing users to sign up, log in, and interact with the system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/food-donation-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd food-donation-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

## Usage

- The server runs on `http://localhost:3000` by default.
- Use tools like Postman or cURL to interact with the API endpoints.

## API Endpoints

### Authentication
- **POST** `/api/auth/signup` - Sign up a new user (donor or recipient).
- **POST** `/api/auth/login` - Log in an existing user (donor or recipient).

### Donor Operations
- **GET** `/api/donor` - Retrieve all donors.
- **POST** `/api/donor` - Add a new donor.

### Recipient Operations
- **GET** `/api/recipient` - Retrieve all recipients.
- **POST** `/api/recipient` - Add a new recipient.

### Contact Information
- **GET** `/api/contact` - Retrieve contact information (Facebook, Instagram, Phone).

## Database Structure

- **donor.json**: Stores donor information including name, email, password, phone number, and address.
- **recipient.json**: Stores recipient information including name, email, password, phone number, and address.
- **contactInfo.json**: Stores contact information including Facebook, Instagram, and phone number.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.