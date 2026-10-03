const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '../..');
const vcm = path.join(root, '.vibecodingmachine');
const config = JSON.parse(
  fs.readFileSync(path.join(vcm, 'config.json'), 'utf8')
);
const launchPort = new URL(config.launch.url).port;

// Runs launch.sh with a fake `npm` on PATH that prints the env the dev
// server would see, instead of starting react-scripts.
function runLaunchSh(env = {}) {
  const bin = fs.mkdtempSync(path.join(os.tmpdir(), 'fake-npm-'));
  fs.writeFileSync(
    path.join(bin, 'npm'),
    '#!/bin/sh\necho "args=$* PORT=$PORT BROWSER=$BROWSER"\n',
    { mode: 0o755 }
  );
  // Start from an env with PORT unset, as when VCM runs the script.
  const { PORT, ...base } = process.env;
  return execFileSync('bash', [path.join(vcm, 'scripts/launch.sh')], {
    env: { ...base, ...env, PATH: `${bin}:${process.env.PATH}` },
    encoding: 'utf8',
  });
}

describe('VCM launch configuration', () => {
  it('polls the port the React dev server listens on (3000)', () => {
    expect(launchPort).toBe('3000');
  });

  it('launch.sh starts the dev server on the port VCM polls', () => {
    const out = runLaunchSh();
    expect(out).toContain('args=start');
    expect(out).toContain(`PORT=${launchPort} `);
  });

  it('launch.sh ignores a stray PORT env var that would disagree with launch.url', () => {
    expect(runLaunchSh({ PORT: '8000' })).toContain(`PORT=${launchPort} `);
  });

  it('launch.sh does not open a browser window', () => {
    expect(runLaunchSh()).toContain('BROWSER=none');
  });

  it('launch.ps1 derives and exports PORT from launch.url too', () => {
    const ps1 = fs.readFileSync(path.join(vcm, 'scripts/launch.ps1'), 'utf8');
    expect(ps1).toMatch(/config\.json/);
    expect(ps1).toMatch(/\$env:PORT\s*=\s*\$Port/);
    expect(ps1).toMatch(/\$env:BROWSER\s*=\s*'none'/);
  });
});
