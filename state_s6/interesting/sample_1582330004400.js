function main() {
const v2 = Array.__proto__;
// v2 = .unknown
const v4 = Symbol.toPrimitive;
// v4 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v2[v4] = null;
const v5 = Symbol(v2);
// v5 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
