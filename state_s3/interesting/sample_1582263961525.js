function main() {
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
for (const v15 in "boolean") {
    let v16 = v15;
    const v17 = v16 / v15;
    // v17 = .number
}
}
%NeverOptimizeFunction(main);
main();
