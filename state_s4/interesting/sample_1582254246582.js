function main() {
const v2 = {valueOf:Array,set:Array};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "valueOf"])
const v4 = Object.defineProperty(Array,1259439873,v2);
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
