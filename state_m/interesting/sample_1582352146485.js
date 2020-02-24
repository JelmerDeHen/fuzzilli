function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
try {
    const v9 = [1337,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v16 = {length:isFinite};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v19 = [1337,v16,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        const v38 = new Uint16Array(1000);
        // v38 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
        try {
            const v40 = eval("toPrimitive");
            // v40 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        } catch(v54) {
            const v55 = {__proto__:v54,a:v27,...v38,...4294967296,...v54,...v38};
            // v55 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "buffer", "constructor", "byteOffset", "byteLength"], withMethods: ["map", "reverse", "includes", "findIndex", "copyWithin", "lastIndexOf", "indexOf", "some", "slice", "forEach", "sort", "filter", "reduceRight", "every", "a", "keys", "find", "fill", "join", "values", "subarray", "set", "entries", "reduce"])
        }
    }
    const v56 = v19.forEach(v24,"eeeRbEqfAO");
    // v56 = .undefined
    let v61 = -128;
    const v65 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v65 = .object(ofGroup: Object, withProperties: ["call", "toString", "isExtensible", "__proto__", "construct", "preventExtensions"], withMethods: ["deleteProperty", "set", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
    const v67 = Proxy(v6,v65);
    // v67 = .unknown
    let v74 = -128;
} catch(v75) {
}
}
%NeverOptimizeFunction(main);
main();
