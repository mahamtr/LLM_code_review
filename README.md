# LLM Code Review

This repository demonstrates the use of a pipeline to perform automated code reviews using GPT-4. The pipeline is designed to pull the diff changes from a branch, apply prompt engineering, and request the LLM to review the changes. The results of the review are then posted in the pull request (PR).

## Purpose

The purpose of this project is to showcase how AI can assist in the code review process by catching errors and bad practices before a human review. However, it is important to note that this process does not replace a proper code review conducted by a human. Instead, it serves as a preliminary step to improve the quality of the code before it reaches a human reviewer.

## Project Structure

- **Backend**: A lightweight .NET Web API project.
- **Frontend**: A simple Angular application.

## Branches

- **main**: Contains the initial implementation of a TODO app.
- **feature/bad-practices**: Demonstrates bad software practices to trigger the automated review process.

## How It Works

1. A pipeline is triggered when a pull request is created.
2. The pipeline pulls the diff changes from the branch.
3. Using OpenAI's API, the pipeline sends the changes to GPT-4 for review.
4. The LLM analyzes the changes and provides feedback, which is posted in the PR.

## Disclaimer

This process is not a substitute for a thorough code review by a human. It is intended to catch common errors and bad practices early in the development process.