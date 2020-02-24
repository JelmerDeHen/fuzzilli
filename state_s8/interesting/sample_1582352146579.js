function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
try {
    const v9 = [1337,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v16 = {length:isFinite};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v19 = [1337,v16,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        const v38 = new Uint16Array(1000);
        // v38 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
        try {
            const v40 = eval("toPrimitive");
            // v40 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        } catch(v54) {
            const v55 = {__proto__:v54,a:v27,...v38,...4294967296,...v54,...v38};
            // v55 = .object(ofGroup: Object, withProperties: ["byteLength", "buffer", "__proto__", "constructor", "length", "byteOffset"], withMethods: ["reverse", "sort", "values", "set", "map", "copyWithin", "find", "filter", "fill", "reduceRight", "slice", "forEach", "some", "keys", "subarray", "includes", "every", "reduce", "indexOf", "findIndex", "lastIndexOf", "entries", "a", "join"])
        }
    }
    const v56 = v19.forEach(v24,"eeeRbEqfAO");
    // v56 = .undefined
    let v61 = -128;
    const v65 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v65 = .object(ofGroup: Object, withProperties: ["toString", "construct", "__proto__", "call", "isExtensible", "preventExtensions"], withMethods: ["setPrototypeOf", "has", "deleteProperty", "getOwnPropertyDescriptor", "set"])
    const v67 = Proxy(v6,v65);
    // v67 = .unknown
    let v74 = -128;
} catch(v75) {
}
}
%NeverOptimizeFunction(main);
main();
