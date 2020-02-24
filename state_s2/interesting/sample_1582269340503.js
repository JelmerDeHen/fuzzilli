function main() {
const v2 = {ownKeys:Array,deleteProperty:Array,setPrototypeOf:Symbol,isExtensible:Array,set:Array,getOwnPropertyDescriptor:Array,apply:Array,has:Array,construct:Array,call:Symbol,getPrototypeOf:Symbol,defineProperty:Array,preventExtensions:Array};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call", "deleteProperty", "getOwnPropertyDescriptor", "preventExtensions", "ownKeys", "getPrototypeOf", "apply", "isExtensible", "set", "setPrototypeOf", "construct", "defineProperty"])
const v4 = new Proxy(Array,v2);
// v4 = .unknown
const v6 = {set:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v8 = Object.defineProperty(v4,5,v6);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
