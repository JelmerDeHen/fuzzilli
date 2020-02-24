function main() {
let v3 = 0;
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
let v17 = 0;
for (const v22 in Number) {
    const v23 = v22 in v22;
    // v23 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
