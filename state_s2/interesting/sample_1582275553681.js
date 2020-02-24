function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = {defineProperty:eval,isExtensible:eval,deleteProperty:eval};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "isExtensible", "defineProperty"])
const v8 = new Proxy(eval,v6);
// v8 = .unknown
const v10 = Symbol.split;
// v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v8[v10] = v8;
}
%NeverOptimizeFunction(main);
main();
