function main() {
const v4 = {set:Boolean};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v5 = {set:Boolean};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
v4.__proto__ = v5;
const v7 = Object.defineProperty(this,1723028408,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
