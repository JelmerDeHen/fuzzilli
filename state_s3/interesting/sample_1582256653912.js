function main() {
let v1 = -65537;
function v2(v3,v4) {
    const v11 = {length:"N0Xx92zvHQ"};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v12 = {constructor:"N0Xx92zvHQ",length:13.37,__proto__:v11,toString:Number,a:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["constructor", "a", "length", "__proto__"], withMethods: ["toString"])
    const v19 = "object".constructor;
    // v19 = .function()
    const v20 = {apply:v19,deleteProperty:gc,preventExtensions:Object,ownKeys:v19,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "set", "has", "construct", "preventExtensions", "apply", "setPrototypeOf", "defineProperty", "isExtensible", "getOwnPropertyDescriptor", "deleteProperty"])
    const v22 = new Proxy(v12,v20);
    // v22 = .unknown
    const v23 = v1 && v1;
    // v23 = .boolean
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
}
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v2();
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
