const { execSync } = require('child_process');

describe('Lint', () => {
  it('should have no lint errors', () => {
    expect(() => {
      execSync('npm run lint', { stdio: 'pipe' });
    }).not.toThrow();
  });
});