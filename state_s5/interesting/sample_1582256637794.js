function main() {
let v2 = 1337;
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "length"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v21 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "set", "preventExtensions", "apply", "getOwnPropertyDescriptor", "setPrototypeOf", "defineProperty", "ownKeys", "isExtensible", "construct", "has"])
    const v23 = new Proxy(v13,v21);
    // v23 = .unknown
    if (v23) {
    } else {
        const v24 = v2 && v2;
        // v24 = .boolean
    }
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
}
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v3();
    // v33 = .unknown
}
v2 = Object;
}
%NeverOptimizeFunction(main);
main();
