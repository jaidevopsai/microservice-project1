const { execSync } = require('node:child_process');

describe('Lint', () => {
  it('should have no lint errors', () => {
    try {
      execSync('npm run lint', { stdio: 'pipe' });
    } catch (error) {
      // Output lint errors for easier debugging
      console.error(error.stdout ? error.stdout.toString() : error.message);
      throw error;
    }
  });
});
