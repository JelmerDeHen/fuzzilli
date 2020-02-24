function main() {
const v1 = (1337).constructor;
// v1 = .unknown
const v6 = Symbol(v1);
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
