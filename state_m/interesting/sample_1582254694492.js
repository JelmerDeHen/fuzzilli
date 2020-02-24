function main() {
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
const v14 = "object".constructor;
// v14 = .function()
for (let v18 = 0; v18 < 100; v18++) {
}
const v19 = {apply:v14,deleteProperty:gc,preventExtensions:Object,ownKeys:v14,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "getOwnPropertyDescriptor", "construct", "set", "ownKeys", "apply", "has", "deleteProperty", "isExtensible", "setPrototypeOf", "preventExtensions"])
const v21 = new Proxy(v7,v19);
// v21 = .unknown
const v23 = v21[4088076774];
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
