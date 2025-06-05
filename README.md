# MeMojo

MeMojo is an experimental mood companion that showcases a simple React front-end and Node.js backend. The app demonstrates how you might connect to GPT-4o to generate comforting messages based on your mood.

This repository contains two folders:

- **frontend/** – A React app generated with [Vite](https://vitejs.dev/).
- **server/** – A minimal Express API server with a `/api/mood` endpoint.

## Getting Started

Install dependencies for both the front-end and server:

```bash
cd frontend
npm install
cd ../server
npm install
```

Create a `.env` file in `server/` with your OpenAI API key:

```
OPENAI_API_KEY=YOUR_KEY_HERE
```

### Running the app

Start the API server:

```bash
cd server
npm start
```

In a separate terminal, start the front-end:

```bash
cd frontend
npm run dev
```

The React app will run on `http://localhost:5173` and proxy requests to the API server.

## License

MIT
