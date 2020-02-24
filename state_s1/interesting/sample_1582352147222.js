function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v9 = [1337,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v16 = {length:isFinite};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v19 = [1337,v16,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        const v38 = new Uint16Array(1000);
        // v38 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
        try {
            const v40 = eval("toPrimitive");
            // v40 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        } catch(v54) {
            const v55 = {__proto__:v54,a:v27,...v38,...4294967296,...v54,...v38};
            // v55 = .object(ofGroup: Object, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["slice", "reduceRight", "join", "findIndex", "forEach", "reduce", "values", "indexOf", "keys", "subarray", "entries", "copyWithin", "every", "filter", "find", "set", "some", "sort", "lastIndexOf", "includes", "map", "reverse", "a", "fill"])
        }
    }
    const v56 = v19.forEach(v24,"eeeRbEqfAO");
    // v56 = .undefined
    let v61 = -128;
    const v65 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v65 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "isExtensible", "call", "preventExtensions", "toString"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "has", "set", "deleteProperty"])
    const v67 = Proxy(v6,v65);
    // v67 = .unknown
    let v74 = -128;
} catch(v75) {
}
}
%NeverOptimizeFunction(main);
main();
