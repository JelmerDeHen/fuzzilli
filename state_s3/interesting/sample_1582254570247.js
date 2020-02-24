function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = Symbol.toStringTag;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Reflect[v7] = 13.37;
}
%NeverOptimizeFunction(main);
main();
