function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = Symbol.iterator;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v2[v7] = 1337;
}
%NeverOptimizeFunction(main);
main();
