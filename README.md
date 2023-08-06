# code-executer

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Functionality

The Code Executer feature enables you to execute the code and receive the output as a comment below. It allows you to quickly test and validate the code you have written by executing it and observing the results in the form of comments.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t code-executer .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> code-executer
```
## How to use 

- Allow all the permissions to the application which it requires.
- Whenever you open a new issue with the code in it.
- The application will automatically execute the code.
- The next comment will be the output of the code which you have given in the issue body.
- Below is the working demo of the application


## Contributing

If you have suggestions for how code-executer could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Akhil
