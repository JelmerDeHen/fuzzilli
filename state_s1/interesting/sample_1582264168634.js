function main() {
let v4 = "+scpKANtCK";
const v5 = v4.__proto__;
// v5 = .object()
const v7 = Symbol.iterator;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v5[v7] = "+scpKANtCK";
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
}
%NeverOptimizeFunction(main);
main();
