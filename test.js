const start = process.hrtime.bigint();
const [{spawnSync: spawn}, {readdirSync: ls}] = [require("child_process"), require("fs")];

const FOLDER = "./test";
const processOptions = {
    cwd: FOLDER,
    encoding: "utf8",
    timeout: 5000
};

let files = ls(FOLDER, {withFileTypes: true}).filter(dirent=>dirent.isFile() && dirent.name!=="test.js").map(dirent=>dirent.name);

let number = files.reduce((sum, file)=>{
    let filepath = `${FOLDER}/${file}`;
    console.info(`Running ${filepath}...`);
    let exec = spawn("node", [file], processOptions);
    console.info(exec.stdout);
    if (exec.status) console.error(exec.stderr) || process.exit(1);
    return sum+exec.stdout.split("\n").length-1;
}, 0);
console.info(`All tests passed in ${Number((process.hrtime.bigint()-start)/BigInt(1e6))/1e3}s`);
console.info("Number of tests done:", number);
process.exit(0);
