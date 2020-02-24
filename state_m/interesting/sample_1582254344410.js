function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
Array[-268435456] = 2815038421;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v22 = {valueOf:Array,set:Array};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf", "set"])
const v24 = Object.defineProperty(Array,1259439873,v22);
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
