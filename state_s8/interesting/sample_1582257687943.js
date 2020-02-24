function main() {
let v3 = 0;
let v6 = 0;
const v9 = (1337).__proto__;
// v9 = .unknown
const v10 = Symbol(v9);
// v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
