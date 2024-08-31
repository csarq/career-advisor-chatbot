# Powering Futures AI

Welcome to the Powering Futures AI project. This repo contains the source code for a web application designed to help young individuals explore potential career paths based on their interests. The application uses AI to ask a series of questions and recommend suitable job roles.

The team behind this Powering Futures AI repo is formed of four hackathon winners who were then asked to continue development for [Powering Futures](https://www.poweringfutures.com/about-us), a social enterprise that since its launch in 2020, has worked with > 3,000 young people and has engaged with more than 150 Scottish businesses.  

Our team is comprised of:
- [Timothy Bridge](https://www.linkedin.com/in/timothybridgecode/)
- [Oscar Oneim](https://www.linkedin.com/in/oscar-oneim-7ba7242a7/)
- [Stephen Walker](https://www.linkedin.com/in/stephen-m-walker/)
- [Catherine Sarquís](www.linkedin.com/in/sarquis)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Key Files](#key-files)

## Project Overview

Powering Futures AI is a web application that guides users through a series of questions about their interests and suggests potential career paths. The application is designed to be supportive, informative, and motivational, helping users understand the significance of different industries and encouraging them to pursue careers.

## Features

- **Interactive Questionnaire**: Users answer a series of questions about their interests.
- **Career Recommendations**: Based on responses, the AI suggests suitable job roles.
- **Supportive Guidance**: Provides additional information and encouragement.
- **Alternative Routes**: Emphasises various career paths beyond traditional degrees.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/powering-futures-ai.git
    cd powering-futures-ai
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the root directory and add your Open AI API key:
    ```sh
    NEXT_PUBLIC_CHAT_API =
   ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

## Usage

To use the application, navigate to [http://localhost:3000](http://localhost:3000) in your web browser. Follow the on-screen instructions to answer the questions and receive career recommendations.

### Key Files

- **[`src/app/page.tsx`]**: Main page component.
- **[`src/app/api/askQuestions/content.ts`]**: Contains the API config content.
- **[`src/app/api/askQuestions/route.ts:`]**: API route for handling questions.
- **[`utils/sanitizeInput.ts`]**: Function for sanitising user input.


