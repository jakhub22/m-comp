# npm publish --registry http://localhost:4873/

#!/bin/bash

# Increment the version number in package.json
npm version patch

# Run the build command
npm run build

# Publish the package to an HTTP registry
npm publish --registry http://localhost:4873/
