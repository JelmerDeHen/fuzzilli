function main() {
const v24 = {deleteProperty:gc,preventExtensions:gc,call:gc,construct:gc,has:gc,getPrototypeOf:gc,isExtensible:gc,get:gc,set:gc,apply:gc};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getPrototypeOf", "isExtensible", "apply", "call", "construct", "set", "get", "deleteProperty", "preventExtensions"])
const v26 = new Proxy(Uint16Array,v24);
// v26 = .unknown
let v29 = 0;
const v39 = 1337 == 13.37;
// v39 = .boolean
}
%NeverOptimizeFunction(main);
main();
