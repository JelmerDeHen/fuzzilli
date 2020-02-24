function main() {
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
let v48 = 0;
const v50 = v48 + 1;
// v50 = .primitive
v48 = v50;
let v57 = 0;
const v58 = v57 + 1;
// v58 = .primitive
v57 = v58;
const v60 = Symbol.split;
// v60 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v67 = v60["iterator"];
// v67 = .unknown
const v68 = typeof v48;
// v68 = .string
const v70 = v68 === "symbol";
// v70 = .boolean
const v71 = Uint16Array * 4294967297;
// v71 = .number
}
%NeverOptimizeFunction(main);
main();
