function main() {
function v0(v1,v2) {
    const v10 = {length:"N0Xx92zvHQ"};
    // v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
    // v11 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__"], withMethods: ["toString"])
    const v18 = "object".constructor;
    // v18 = .function()
    const v20 = {apply:v18,deleteProperty:gc,preventExtensions:Object,ownKeys:v18,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "isExtensible", "has", "defineProperty", "apply", "construct", "getOwnPropertyDescriptor", "ownKeys", "set", "preventExtensions", "setPrototypeOf"])
    const v22 = new Proxy(v11,v20);
    // v22 = .unknown
    const v23 = 100 == 100;
    // v23 = .boolean
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
    const v28 = 0 != v23;
    // v28 = .boolean
}
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v0();
    // v33 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
