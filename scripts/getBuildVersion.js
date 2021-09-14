const { execSync } = require('child_process');
const project = require('../package.json');

function getCommitId() {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
  } catch (err) {
    console.warn('cannot get git commit version.', err);
  }
}

function getDate() {
  function pad(value) {
    return value.toString().padStart(2, '0');
  }

  const now = new Date();
  const y = pad(now.getUTCFullYear() % 2000);
  const m = pad(now.getMonth() + 1);
  const d = pad(now.getDate());
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${y}${m}${d}${hh}${mm}${ss}`;
}

function getBuildVersion() {
  const date = getDate();
  const commitId = getCommitId();

  let version = `${project.version}-build.${date}`;

  if (commitId) {
    version += `+sha.${commitId}`;
  }

  return version;
}

module.exports = getBuildVersion;
