function main() {
const v2 = {call:Object};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v4 = new Proxy(Array,v2);
// v4 = .unknown
const v6 = parseInt(v4);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
