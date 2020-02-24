function main() {
function v1(v2,v3) {
    function v4(v5,v6) {
        const v7 = {defineProperty:v1,construct:v1,apply:v1,set:v3,getPrototypeOf:v5,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v2,get:Promise,deleteProperty:v3,call:Promise,isExtensible:v1,preventExtensions:Promise};
        // v7 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "ownKeys", "call", "getPrototypeOf", "get", "__proto__", "setPrototypeOf", "deleteProperty", "set", "preventExtensions"], withMethods: ["construct", "isExtensible", "defineProperty", "apply"])
        const v9 = new Proxy(v4,v7);
        // v9 = .unknown
    }
}
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            const v20 = Math.log2("boolean");
            // v20 = .number
            let v24 = 0;
            const v27 = eval(1337);
            // v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            const v29 = v17 + 1;
            // v29 = .primitive
            v17 = v29;
        } while (v17 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v32 = v31;
const v33 = v10(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
