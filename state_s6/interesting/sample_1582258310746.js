function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = {set:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v9 = Object.defineProperty(this,"b",v7);
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
