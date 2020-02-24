function main() {
const v1 = Symbol.species;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v1] = v1;
}
%NeverOptimizeFunction(main);
main();
