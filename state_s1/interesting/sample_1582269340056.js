function main() {
const v2 = {ownKeys:Array,deleteProperty:Array,setPrototypeOf:Symbol,isExtensible:Array,set:Array,getOwnPropertyDescriptor:Array,apply:Array,has:Array,construct:Array,call:Symbol,getPrototypeOf:Symbol,defineProperty:Array,preventExtensions:Array};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "set", "defineProperty", "apply", "preventExtensions", "getPrototypeOf", "deleteProperty", "ownKeys", "has", "call", "isExtensible", "getOwnPropertyDescriptor"])
const v4 = new Proxy(Array,v2);
// v4 = .unknown
const v6 = {set:v4};
// v6 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
const v8 = Object.defineProperty(v4,5,v6);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
