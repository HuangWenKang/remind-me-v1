# Remind Me v1.0

This repository contains the source code of the first version of the application that we will deploy to our Kubernetes cluster. You can read more about this application and the steps that you need to follow to deploy this application in chapter three of the book. This is a simple .net Core Angular application that saves reminders in memory and loses the state on refreshing the browser.

## Getting started

Copy the source code of the application to your system and open the workspace `remind-me.code-workspace` in Visual Studio Code. The web application is present in the **web** folder in the project directory. The Angular application is present in the **/web/ClientApp/** directory.

### Prerequisites

This project uses the following tools and technologies.

1. VS Code IDE
2. Docker
3. ASP.net Core on .Net Core 2.1
4. Angular SPA on Angular 5
5. Test Frameworks: Protractor, and Jasmine on Karma test runner

### Installation

Build the project from the CLI or VS Code. The build task will restore all the nuget packages and the npm dependencies. If you are using the command line, change to the **Web** directory before executing the following commands. The following command will build the project.

```
dotnet build
```

The following command will run the project.

```
dotnet run
```

Running the project from VS Code will automatically launch the browser with the application. Otherwise, navigate to the application URL generated from the command output: https://localhost:5001. Since the application uses a user generated certificate, you can ignore the certificate error displayed by the browser.

## Running the tests

Unit tests in this project are written using the Jasmine framework running on Karma. The end to end tests are written using the Protractor framework. To execute the tests, change directory to **/web/ClientApp/** directory.

### Running the unit tests

The following command will run the unit tests in the application.

```
ng test
```

The following command will run the end to end tests.

```
ng e2e
```

## Deployment

The application is deployed as an image to DockerHub. The **Web** folder contains the DockerFile used for building the application image.

## Contributing

The contributions to this repository are limited to improving the quality of the solution without modifying its behavior. This will help us keep the solution relevant to the content in the book. If you are interested in collaborating, please raise an issue in the repository so that we can connect with you.

## Authors

- **Rahul Rai** - Creator - [rahulrai-in](https://github.com/rahulrai-in)
- **Tarun Pabbi** - Creator - [tarunp](https://github.com/tarunp)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
