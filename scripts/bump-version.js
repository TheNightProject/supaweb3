#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Get version type from command line argument
const versionType = process.argv[2]

if (!versionType || !['major', 'minor', 'patch', 'prerelease'].includes(versionType)) {
  console.error('Usage: node bump-version.js <major|minor|patch|prerelease>')
  console.error('Example: node bump-version.js minor')
  process.exit(1)
}

// Package directories to update
const packages = [
  'packages/ui',
  'packages/nuxt',
  'packages/config'
]

// Function to bump semantic version
function bumpVersion(currentVersion, type) {
  const parts = currentVersion.split('.').map(Number)
  let [major, minor, patch] = parts

  switch (type) {
    case 'major':
      major += 1
      minor = 0
      patch = 0
      break
    case 'minor':
      minor += 1
      patch = 0
      break
    case 'patch':
      patch += 1
      break
    case 'prerelease':
      // Simple prerelease implementation
      patch += 1
      return `${major}.${minor}.${patch}-beta.0`
    default:
      throw new Error(`Unknown version type: ${type}`)
  }

  return `${major}.${minor}.${patch}`
}

// Get current version from ui package (our source of truth)
const uiPackagePath = path.join(__dirname, '..', 'packages/ui/package.json')
const uiPackage = JSON.parse(fs.readFileSync(uiPackagePath, 'utf8'))
const currentVersion = uiPackage.version
const newVersion = bumpVersion(currentVersion, versionType)

console.log(`Bumping version from ${currentVersion} to ${newVersion}`)

// Update all package.json files
packages.forEach(packageDir => {
  const packagePath = path.join(__dirname, '..', packageDir, 'package.json')

  if (!fs.existsSync(packagePath)) {
    console.warn(`Package not found: ${packagePath}`)
    return
  }

  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  pkg.version = newVersion

  // Update internal dependencies to use workspace protocol
  if (pkg.dependencies) {
    Object.keys(pkg.dependencies).forEach(dep => {
      if (dep.startsWith('@supaweb3/')) {
        pkg.dependencies[dep] = 'workspace:*'
      }
    })
  }

  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n')
  console.log(`✅ Updated ${packageDir}/package.json to ${newVersion}`)
})

console.log(`\n🎉 All packages bumped to version ${newVersion}`)
console.log(`\nNext steps:`)
console.log(`1. Review the changes: git diff`)
console.log(`2. Commit the version bump: git add . && git commit -m "chore: bump version to ${newVersion}"`)
console.log(`3. Push and trigger CI: git push`)
console.log(`4. Use GitHub Actions workflow to publish`)