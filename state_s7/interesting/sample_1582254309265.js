function main() {
let v7 = 0;
const v8 = 0 * 4;
// v8 = .number
const v9 = v7 + 1;
// v9 = .primitive
v7 = v9;
for (let v13 = 0; v13 < 8; v13++) {
    const v15 = Symbol.isConcatSpreadable;
    // v15 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    Symbol[v15] = v7;
}
}
%NeverOptimizeFunction(main);
main();
