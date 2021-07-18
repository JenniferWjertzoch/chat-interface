## Chat Interface for Doodle

Build a simple chat interface in React, which is able to send and display messages from all senders.

Solution by [Jennifer Wjertzoch](mailto:wjertzochjennifer@gmail.com)

## Proposed Solution

- Breaking the UI into components
    * MessageList
    * MessageReceived
    * MessageSent

- Creating the root component App.js
    * Create a basic setup for rendering messages (title, MessageList, input field, send button)
    * Fetching MessagesReceived from given API
    * Handling user input (listening for user inputs with the onChange event listener, to
      trigger the handleChange method and setting the value of the input field using state)
    * Sending messages (store the value of the input field in the state button onClick
      and clearing the input field afterwards)

- Create MessageList component
    * This component will receive MessagesReceived and MessagesSent

- Create MessageReceived component
    * This component will handle messages from the given API

- Create MessageSent component
    * This will handle the user input being rendered in the input field via its state

- Add styling by using styled components

- Implement testing (cypress and react testing library)

## Libraries / Tools Used

- React.js
- Moment.js
- Styled-components
- Cypress
- React Testing Library

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`


### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:run`





