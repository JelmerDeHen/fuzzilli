function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = Boolean.__proto__;
// v6 = .unknown
let v7 = v5;
let v8 = v7;
const v10 = new Proxy(v8,String);
// v10 = .unknown
v6.__proto__ = v10;
try {
    const v12 = {length:isFinite};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
    const v15 = [1337,v12,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
        try {
            const v26 = eval("toPrimitive");
            // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        } catch(v27) {
            const v28 = {__proto__:v27,a:v19,...v24,...4294967296,...v27,...v24};
            // v28 = .object(ofGroup: Object, withProperties: ["buffer", "length", "byteLength", "byteOffset", "__proto__", "constructor"], withMethods: ["find", "forEach", "some", "indexOf", "lastIndexOf", "reduceRight", "values", "sort", "filter", "reverse", "subarray", "join", "includes", "keys", "entries", "reduce", "set", "copyWithin", "every", "slice", "map", "fill", "findIndex", "a"])
        }
    }
    const v29 = v15.forEach(v16,"eeeRbEqfAO");
    // v29 = .undefined
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();
