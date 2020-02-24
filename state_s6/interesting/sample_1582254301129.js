function main() {
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v15 = 0;
while (v15 < 7) {
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
}
for (const v17 in "object") {
}
let v20 = 0;
while (v20 < 9) {
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
}
let v24 = 0;
do {
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
} while (v24 < 9);
let v27 = 0;
for (let v31 = 0; v31 < 9; v31++) {
}
for (const v32 of "iterator") {
    const v34 = Symbol.split;
    // v34 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Symbol[v34] = v34;
}
}
%NeverOptimizeFunction(main);
main();
