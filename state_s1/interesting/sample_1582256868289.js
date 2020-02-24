function main() {
let v2 = 1337;
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v22 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "preventExtensions", "construct", "setPrototypeOf", "defineProperty", "ownKeys", "set", "has", "isExtensible", "getOwnPropertyDescriptor", "apply"])
    const v24 = new Proxy(v13,v22);
    // v24 = .unknown
    const v25 = "toStringTag".slice(v2,100);
    // v25 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    with (Number) {
        const v28 = constructor == v22;
        // v28 = .boolean
    }
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
}
for (let v35 = 0; v35 < 100; v35++) {
    const v36 = v3();
    // v36 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
