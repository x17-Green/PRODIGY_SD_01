# Temperature Conversion Application

## Overview

This project is a web application that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin using the MERN (MongoDB, Express, React, Node.js) stack. The application features a user-friendly interface for inputting temperatures, selecting conversion types, and displaying the results.

## Author

- **Name**: Okoyen Ebisine Precious
- **Email**: [x17.ebi@icloud.com](mailto:x17.ebi@icloud.com "x17.ebi@icloud.com")
- **GitHub**: [GitHub Profile](https://github.com/x17-Green "Marksman Green")

## Table of Contents

- [Temperature Conversion Application](#temperature-conversion-application)
  - [Overview](#overview)
  - [Author](#author)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Temperature Conversion](#temperature-conversion)
    - [Optional: Conversion History](#optional-conversion-history)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Technologies

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- ***Database**: MongoDB (optional for storing conversion history)
- **Deployment**: Vercel/Netlify (frontend), Heroku/Render (backend)

## Features

- Responsive user interface for temperature conversion.
- Input fields for temperature values and selection of temperature scales.
- Dynamic display of converted temperatures.
- Error handling for invalid inputs.
- *Optional: Store user conversion history in MongoDB.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/x17-Green/PRODIGY_SD_01.git
   cd PRODIGY_SD_01
   ```

2. **Set Up the Backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Set Up the Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Run Both Servers**:
   - From the root of the project, run:
     ```bash
     npm start
     ```
   - This command uses `concurrently` to start both the backend and frontend servers simultaneously.

5. **Ensure MongoDB is Running** (if using MongoDB for conversion history).

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a temperature value in the input field.
3. Select the temperature scale (Celsius, Fahrenheit, Kelvin) from the dropdown menu.
4. Click the "Convert" button to see the converted temperatures displayed dynamically.

## API Endpoints

### Temperature Conversion

- **POST** `/convert`
  - **Request Body**:
    ```json
    {
      "temperature": <number>,
      "scale": "<Celsius | Fahrenheit | Kelvin>"
    }
    ```
  - **Response**:
    ```json
    {
      "celsius": <converted_celsius>,
      "fahrenheit": <converted_fahrenheit>,
      "kelvin": <converted_kelvin>
    }
    ```

### Optional: Conversion History

- **GET** `/history` (if implemented)
  - Retrieves the user's conversion history.

## Testing

- Ensure that all functionalities work as expected by testing the application thoroughly.
- Validate user inputs and handle errors appropriately.

## Deployment

- Deploy the frontend application on platforms like Vercel or Netlify.
- Deploy the backend server on Heroku or Render.
- Ensure that the frontend communicates with the backend API correctly.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
