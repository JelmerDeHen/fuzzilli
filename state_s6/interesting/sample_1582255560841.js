function main() {
let v2 = 1337;
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v22 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "deleteProperty", "apply", "set", "setPrototypeOf", "construct", "ownKeys", "isExtensible", "defineProperty", "has", "preventExtensions"])
    const v24 = new Proxy(v13,v22);
    // v24 = .unknown
    const v26 = 100 == 13.37;
    // v26 = .boolean
    if (v24) {
    } else {
        const v27 = v2 && v2;
        // v27 = .boolean
    }
    let v30 = 0;
    do {
        const v31 = v30 + 1;
        // v31 = .primitive
        v30 = v31;
    } while (v30 < 9);
    const v32 = Number.__proto__;
    // v32 = .unknown
    const v33 = 1383906163 != v26;
    // v33 = .boolean
}
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v3();
    // v38 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
