const { execSync } = require('child_process');
execSync(`npm run serve`,{stdio:['inherit','inherit','inherit']})