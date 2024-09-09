# Ai Problem Resolver

This template provides a minimal setup for a chat application using React and Google Generative AI, integrated with Vite for fast builds and hot module replacement (HMR).

## Features

- **Real-time Messaging**: Interact with Google Generative AI to receive responses.
- **Chat History**: View and interact with past messages.
- **Message Truncation**: Display truncated message titles if they exceed 10 characters.
- **Clear Chat**: Start a new conversation and clear the current chat.

## Technologies Used

- **React**: For building the user interface.
- **Google Generative AI**: For generating AI responses.
- **Vite**: For fast builds and development.

## Setup and Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/amliyanage/Ai-Problem-Resolver.git
    cd Ai-Problem-Resolver
    ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the dependencies:

    ```bash
    npm install
    ```

3. **Configure API Key**

   Replace the placeholder API key in `src/pages/HomePage.jsx` with your actual Google Generative AI API key:

    ```javascript
    const GEMINI_API_KEY = "your-api-key-here";
    ```

4. **Start the Development Server**

    ```bash
    npm run dev
    ```

   Navigate to `http://localhost:3000` in your browser to see the application.

## Code Overview

### `src/pages/HomePage.jsx`

This file contains the main chat interface component:

- **State Management**:
    - `sendMessage`: Stores sent messages.
    - `receivedMessage`: Stores responses from the AI.
    - `message`: Stores the current input message.
    - `history`: Stores the chat history.

- **Functions**:
    - `generateMessage(msg)`: Sends a message to Google Generative AI and updates received messages.
    - `handleSendMessage()`: Sends the current message and updates chat history.
    - `handleNewChat()`: Clears the chat and resets the input field.
    - `handleHistoryClick(msg)`: Resends a message from history when clicked.
    - `truncateTitle(title)`: Truncates long message titles with an ellipsis.

- **Rendering**:
    - Renders a chat interface with message input and display.
    - Shows chat history with clickable items for resending messages.

### `src/util/Icons.jsx`

Contains the icon components used in the application. Ensure this file includes the necessary icons.

### `src/assets/css/HomePage.css`

CSS file for styling the chat interface. Customize as needed for your design.

## Contributing

Contributions are welcome! Open an issue or submit a pull request for improvements or fixes. For major changes, please discuss them in an issue first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Google Generative AI](https://cloud.google.com/generative-ai) for AI-powered responses.
- [React](https://reactjs.org/) for the frontend framework.
- [Vite](https://vitejs.dev/) for fast builds and development.
