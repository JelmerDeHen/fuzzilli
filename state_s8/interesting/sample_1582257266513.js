function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
for (let v8 = 0; v8 < 100; v8++) {
}
const v9 = {construct:Boolean,apply:Boolean,ownKeys:Boolean,has:Boolean,isExtensible:Boolean,deleteProperty:Boolean,defineProperty:Boolean,call:Boolean,get:Boolean,preventExtensions:Boolean};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "ownKeys", "construct", "apply", "get", "preventExtensions", "has", "call", "defineProperty"])
const v11 = new Proxy(Boolean,v9);
// v11 = .unknown
v11[100] = 8;
}
%NeverOptimizeFunction(main);
main();
