function main() {
const v3 = Symbol.for("iterator");
// v3 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
}
%NeverOptimizeFunction(main);
main();
