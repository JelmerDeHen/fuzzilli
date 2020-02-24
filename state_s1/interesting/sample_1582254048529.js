function main() {
const v3 = {set:Number};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v9 = Symbol.isConcatSpreadable;
// v9 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v3[v9] = 13.37;
}
%NeverOptimizeFunction(main);
main();
