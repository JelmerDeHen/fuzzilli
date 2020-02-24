function main() {
let v72 = 0;
const v73 = v72 + 1;
// v73 = .primitive
v72 = v73;
let v100 = 0;
const v101 = v100 + 1;
// v101 = .primitive
v100 = v101;
let v122 = 0;
let v220 = 0;
const v232 = v220 + 1;
// v232 = .primitive
v220 = v232;
for (const v259 in Object) {
    const v260 = v259 instanceof v259;
    // v260 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
