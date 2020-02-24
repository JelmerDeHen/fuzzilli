function main() {
const v2 = {b:Object};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["b"])
const v4 = new Number(Array,v2);
// v4 = .number
const v6 = parseInt(v4);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
