function main() {
const v9 = Symbol.species;
// v9 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v10 = v9[v9];
// v10 = .unknown
const v18 = "object".constructor;
// v18 = .function()
const v25 = 0 >= v18;
// v25 = .boolean
}
%NeverOptimizeFunction(main);
main();
