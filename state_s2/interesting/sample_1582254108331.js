function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
try {
    const v8 = {preventExtensions:Array,deleteProperty:Array,isExtensible:gc,ownKeys:gc,defineProperty:Array,getPrototypeOf:gc,call:Array,get:gc,construct:Array};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "preventExtensions", "get", "construct", "defineProperty", "deleteProperty", "getPrototypeOf", "call"])
    const v10 = new Proxy(127,v8);
    // v10 = .unknown
} catch(v11) {
}
try {
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();
