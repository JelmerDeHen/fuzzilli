function main() {
const v2 = Symbol.for(Symbol);
// v2 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
