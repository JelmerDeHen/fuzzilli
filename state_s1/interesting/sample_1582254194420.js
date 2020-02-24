function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
let v5 = v4;
const v7 = {setPrototypeOf:Number,get:String,construct:Number,isExtensible:Number,has:Number,getOwnPropertyDescriptor:String,preventExtensions:String};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get", "construct", "isExtensible", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
const v9 = new Proxy(v5,v7);
// v9 = .unknown
const v12 = gc(Number);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
