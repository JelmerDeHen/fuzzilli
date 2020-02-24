function main() {
const v2 = Symbol.for(Symbol);
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
