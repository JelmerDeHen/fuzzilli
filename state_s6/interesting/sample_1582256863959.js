function main() {
function v0(v1,v2) {
    const v5 = -4294967297 << -4294967297;
    // v5 = .integer
    const v6 = v5 << v5;
    // v6 = .integer
    const v7 = {e:v6};
    // v7 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    const v17 = {length:"N0Xx92zvHQ"};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v18 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
    const v25 = "object".constructor;
    // v25 = .function()
    const v26 = {apply:v25,deleteProperty:gc,preventExtensions:Object,ownKeys:v25,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "setPrototypeOf", "deleteProperty", "defineProperty", "construct", "getOwnPropertyDescriptor", "preventExtensions", "ownKeys", "set", "has", "apply"])
    const v28 = new Proxy(v18,v26);
    // v28 = .unknown
}
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v0();
    // v33 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
