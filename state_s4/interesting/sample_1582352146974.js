function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v9 = [1337,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v16 = {length:isFinite};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v19 = [1337,v16,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        const v38 = new Uint16Array(1000);
        // v38 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        try {
            const v40 = eval("toPrimitive");
            // v40 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        } catch(v54) {
            const v55 = {__proto__:v54,a:v27,...v38,...4294967296,...v54,...v38};
            // v55 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteLength", "buffer", "byteOffset", "length"], withMethods: ["reverse", "fill", "reduce", "map", "a", "find", "entries", "includes", "subarray", "every", "some", "filter", "join", "slice", "values", "indexOf", "set", "findIndex", "lastIndexOf", "forEach", "copyWithin", "reduceRight", "sort", "keys"])
        }
    }
    const v56 = v19.forEach(v24,"eeeRbEqfAO");
    // v56 = .undefined
    let v61 = -128;
    const v65 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v65 = .object(ofGroup: Object, withProperties: ["toString", "isExtensible", "preventExtensions", "__proto__", "construct", "call"], withMethods: ["deleteProperty", "set", "setPrototypeOf", "getOwnPropertyDescriptor", "has"])
    const v67 = Proxy(v6,v65);
    // v67 = .unknown
    let v74 = -128;
} catch(v75) {
}
}
%NeverOptimizeFunction(main);
main();
