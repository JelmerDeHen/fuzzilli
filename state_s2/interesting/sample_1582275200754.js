function main() {
const v2 = {constructor:Object};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
const v4 = new Proxy(RegExp,v2);
// v4 = .unknown
const v6 = new v4(parseInt);
// v6 = .object()
}
%NeverOptimizeFunction(main);
main();
