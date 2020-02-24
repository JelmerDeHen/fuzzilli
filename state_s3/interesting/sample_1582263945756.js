function main() {
let v1 = "+scpKANtCK";
const v2 = v1.__proto__;
// v2 = .object()
const v4 = Symbol.iterator;
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v2[v4] = "+scpKANtCK";
}
%NeverOptimizeFunction(main);
main();
