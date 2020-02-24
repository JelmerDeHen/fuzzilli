function main() {
const v1 = {setPrototypeOf:Boolean,getOwnPropertyDescriptor:Boolean,apply:Boolean,call:Boolean,get:Boolean,getPrototypeOf:Boolean,isExtensible:Boolean,ownKeys:Boolean,set:Boolean,construct:Boolean,preventExtensions:Boolean};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "set", "get", "isExtensible", "preventExtensions", "call", "getPrototypeOf", "ownKeys", "setPrototypeOf", "construct", "apply"])
const v3 = new Proxy(Boolean,v1);
// v3 = .unknown
v3[626817512] = v1;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
}
%NeverOptimizeFunction(main);
main();
