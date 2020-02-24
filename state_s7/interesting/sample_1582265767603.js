function main() {
let v55 = 0;
for (const v56 in null) {
    let v59 = 0;
    let v62 = 0;
    let v66 = 0;
}
const v70 = v55 + 1;
// v70 = .primitive
v55 = v70;
let v87 = 0;
const v88 = v87 + 1;
// v88 = .primitive
v87 = v88;
}
%NeverOptimizeFunction(main);
main();
