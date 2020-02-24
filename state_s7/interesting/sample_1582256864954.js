function main() {
let v2 = 1337;
function v3(v4,v5) {
    const v12 = {length:"N0Xx92zvHQ"};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
    const v20 = "object".constructor;
    // v20 = .function()
    const v22 = {apply:v20,deleteProperty:gc,preventExtensions:Object,ownKeys:v20,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "has", "set", "apply", "defineProperty", "construct", "isExtensible", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf"])
    const v24 = new Proxy(v13,v22);
    // v24 = .unknown
    const v25 = "toStringTag".slice(v2,100);
    // v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
