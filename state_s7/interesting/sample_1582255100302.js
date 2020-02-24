function main() {
const v1 = Symbol.__proto__;
// v1 = .unknown
const v2 = Symbol(v1);
// v2 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
