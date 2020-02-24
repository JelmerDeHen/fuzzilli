function main() {
let v2 = 1337;
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v22 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "set", "construct", "apply", "getOwnPropertyDescriptor", "isExtensible", "has", "deleteProperty", "setPrototypeOf", "ownKeys", "preventExtensions"])
    const v24 = new Proxy(v13,v22);
    // v24 = .unknown
    const v25 = "toStringTag".slice(v2,100);
    // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
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
