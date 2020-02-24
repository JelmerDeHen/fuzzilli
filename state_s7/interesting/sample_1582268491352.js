function main() {
function v1(v2,v3) {
    function v4(v5,v6) {
        const v7 = {defineProperty:v1,construct:v1,apply:v1,set:v3,getPrototypeOf:v5,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v2,get:Promise,deleteProperty:v3,call:Promise,isExtensible:v1,preventExtensions:Promise};
        // v7 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "preventExtensions", "set", "get", "getPrototypeOf", "call", "__proto__", "ownKeys", "setPrototypeOf", "deleteProperty"], withMethods: ["construct", "isExtensible", "apply", "defineProperty"])
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
            // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v29 = v17 + 1;
            // v29 = .primitive
            v17 = v29;
        } while (v17 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v32 = v31;
const v33 = v10(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
