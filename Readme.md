# Rhymer Server

This is a server application that generates rhymes using the OpenAI API. It provides an endpoint `/rhyme` that accepts a headline and returns a generated rhyme based on that headline.

## Prerequisites

Before running the server, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
`https://github.com/shivankkunwar/rhymer-server`

2. Navigate to the project directory:

bash cd rhymer-server


3. Install the dependencies:

bash npm install


## Configuration

1. Obtain an API key from OpenAI. You can sign up for an account and generate an API key from the OpenAI website.

2. Set the `OPENAI_API_KEY` environment variable with your API key. You can do this by creating a `.env` file in the project root directory and adding the following line:

OPENAI_API_KEY=your-api-key


   Replace `your-api-key` with your actual OpenAI API key.

## Usage

To start the server, run the following command:

`npm start`


The server will start running on `http://localhost:3000`.

## API Endpoint

### `/rhyme`

- Method: POST
- URL: `http://localhost:3000/rhyme`
- Request Body: JSON object with a `headline` field containing the headline for which you want to generate a rhyme.
- Response: JSON object with a `rhyme` field containing the generated rhyme.

Example request:

` curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_OPENAI_API_KEY" -d '{"headline": "Your headline goes here"}' http://localhost:3000/rhyme
`

Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key. Additionally, replace `"Your headline goes here"` with the desired headline.

Example response:

`json { "rhyme": "Generated rhyme goes here" }`


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).