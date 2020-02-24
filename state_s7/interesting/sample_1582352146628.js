function main() {
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
try {
    const v9 = [1337,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v16 = {length:isFinite};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v19 = [1337,v16,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        const v38 = new Uint16Array(1000);
        // v38 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        try {
            const v40 = eval("toPrimitive");
            // v40 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        } catch(v54) {
            const v55 = {__proto__:v54,a:v27,...v38,...4294967296,...v54,...v38};
            // v55 = .object(ofGroup: Object, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["map", "some", "entries", "indexOf", "every", "forEach", "a", "sort", "reduceRight", "set", "find", "join", "fill", "subarray", "reduce", "copyWithin", "findIndex", "keys", "includes", "lastIndexOf", "values", "slice", "reverse", "filter"])
        }
    }
    const v56 = v19.forEach(v24,"eeeRbEqfAO");
    // v56 = .undefined
    let v61 = -128;
    const v65 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v65 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "isExtensible", "toString", "construct", "call"], withMethods: ["deleteProperty", "set", "has", "getOwnPropertyDescriptor", "setPrototypeOf"])
    const v67 = Proxy(v6,v65);
    // v67 = .unknown
    let v74 = -128;
} catch(v75) {
}
}
%NeverOptimizeFunction(main);
main();
