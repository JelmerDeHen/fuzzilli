function main() {
const v2 = {call:Object};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v4 = new Proxy(Array,v2);
// v4 = .unknown
let v5 = v4;
delete v5[1337];
}
%NeverOptimizeFunction(main);
main();
