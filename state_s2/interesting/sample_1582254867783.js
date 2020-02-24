function main() {
let v3 = 0;
const v4 = RegExp[RegExp];
// v4 = .unknown
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
const v11 = Symbol.isConcatSpreadable;
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v11] = gc;
}
%NeverOptimizeFunction(main);
main();
