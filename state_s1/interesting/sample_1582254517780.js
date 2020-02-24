function main() {
const v2 = {deleteProperty:gc,preventExtensions:gc,call:gc,construct:gc,has:gc,getPrototypeOf:gc,isExtensible:gc,get:gc,set:gc,apply:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "getPrototypeOf", "apply", "get", "has", "preventExtensions", "set", "deleteProperty", "isExtensible", "construct"])
const v5 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:gc};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "preventExtensions", "getPrototypeOf", "defineProperty", "construct", "apply", "call", "isExtensible", "get", "ownKeys"])
const v7 = new Proxy(gc,v5);
// v7 = .unknown
const v8 = v7.prototype;
// v8 = .unknown
const v10 = {get:Promise,set:gc};
// v10 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
const v12 = Object.defineProperty(v2,1337,v10);
// v12 = .undefined
const v13 = gc();
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
