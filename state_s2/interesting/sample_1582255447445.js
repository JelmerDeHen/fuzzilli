function main() {
const v4 = Symbol.for(Symbol);
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
