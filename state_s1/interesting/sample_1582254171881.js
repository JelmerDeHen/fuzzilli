function main() {
const v6 = {get:gc,set:Number};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v8 = Object.defineProperty(Number,4294967296,v6);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
