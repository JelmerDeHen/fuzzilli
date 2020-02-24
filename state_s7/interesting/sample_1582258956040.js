function main() {
const v2 = (1337).__proto__;
// v2 = .unknown
const v3 = Symbol(v2);
// v3 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
