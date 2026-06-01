const os = require('os')


// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);


// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);
// Get the system hostname
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// Get the system default temp dir
console.log(`Temporary Directory: ${os.tmpdir()}`); 

// Get CPU information
const cpus = os.cpus();
console.log(cpus)
console.log(`Number of CPU Cores: ${cpus.length}`);
// Display information about each CPU core
cpus.forEach((cpu, index) => {
  console.log(`\nCPU Core ${index + 1}:`);
  console.log(`- Model: ${cpu.model}`);
  console.log(`- Speed: ${cpu.speed} MHz`);
  console.log('- Times (ms):', {     user: cpu.times.user,
    nice: cpu.times.nice,
    sys: cpu.times.sys,
    idle: cpu.times.idle,
    irq: cpu.times.irq
  });
}); 

console.log('network information here : ')
console.log(os.networkInterfaces())


console.log(`how many time the computer start :`, os.uptime())