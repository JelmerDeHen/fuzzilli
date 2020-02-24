function main() {
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
let v22 = 0;
const v23 = 13.37 - 1;
// v23 = .primitive
const v24 = v22 + 1;
// v24 = .primitive
v22 = v24;
const v31 = Symbol.species;
// v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v31] = 13.37;
}
%NeverOptimizeFunction(main);
main();
