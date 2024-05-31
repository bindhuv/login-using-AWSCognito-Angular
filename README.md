# Login using AWS Cognito in Angular

## Overview
This project demonstrates how to integrate AWS Cognito authentication into an Angular application. It covers user registration and login functionalities using AWS Cognito services.

## Features
- User Registration
- User Login

## Technologies Used
- Angular
- AWS Cognito
- TypeScript
- HTML/CSS

## Prerequisites
Before running this project, ensure you have the following installed:
- Node.js
- Angular CLI
- AWS Account with Cognito configured

## Getting Started

### AWS Cognito Setup
1. **Create a Cognito User Pool:**
   - Sign in to the [AWS Management Console](https://aws.amazon.com/console/).
   - Open the Amazon Cognito console.
   - Choose "Manage User Pools" and then "Create a User Pool".
   - Follow the steps to configure your user pool. Make note of the User Pool ID and App Client ID.

2. **Configure App Client:**
   - In the Cognito User Pool, go to "App clients" and create a new app client if you don't have one.
   - Ensure you enable the "Enable sign-in API for server-based authentication" option.

### Clone the Repository
```bash
git clone https://github.com/your-username/login-using-AWSCognito-Angular.git
cd login-using-AWSCognito-Angular

```
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Thanks to the AWS and Angular communities for their excellent documentation and support
