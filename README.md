# Microservice Project

## Overview
This microservice project is designed to provide a scalable and maintainable service architecture. It includes a continuous integration workflow to ensure code quality and streamline deployment.

## Project Structure
```
microservice-project
├── .github
│   └── workflows
│       ├── ci.yml
│       ├── lint.yml
│       ├── test-matrix.yml
│       └── release.yml
├── src
│   └── index.js
├── tests
│   └── health.test.js
├── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/microservice-project.git
   cd microservice-project
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Microservice**
   Start the microservice by executing:
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node src/index.js
   ```

## API Endpoints

- **GET `/api/health`**  
  Returns a simple health check response:
  ```json
  { "status": "OK" }
  ```

## Testing the API

You can test the API endpoint using:

- **Browser:**  
  Visit [http://localhost:3000/api/health](http://localhost:3000/api/health)

- **curl:**  
  ```bash
  curl http://localhost:3000/api/health
  ```

- **VS Code REST Client Extension:**  
  Create a file `test.http` with:
  ```
  GET http://localhost:3000/api/health
  ```
  and click "Send Request".

## Running Tests
To run the tests, use the following command:
```bash
npm test
```
Tests are located in the `tests` directory and use [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest).

## Continuous Integration & Workflows

This project uses GitHub Actions for CI/CD. Workflows include:

- **ci.yml:** Runs tests and deploys on push to `main`.
- **lint.yml:** Runs ESLint on pull requests.
- **test-matrix.yml:** Tests across multiple Node.js versions.
- **release.yml:** Creates a GitHub release when a new tag is pushed.

You can trigger all workflows with:
```bash
git add .
git commit -m "Test all workflows"
git push origin main
git tag v1.0.0
git push origin v1.0.0
```

## Deployment
The microservice is set up to deploy automatically when changes are pushed to the main branch, provided all tests pass. The deployment process is defined in the GitHub Actions workflow located in `.github/workflows/ci.yml`.

## Ignoring Files

The `.gitignore` file ensures that files and directories such as `node_modules/`, `.env`, and build artifacts are not committed to the repository.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.