function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
        try {
            const v26 = eval("toPrimitive");
            // v26 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        } catch(v27) {
            const v28 = {__proto__:v27,a:v19,...v24,...4294967296,...v27,...v24};
            // v28 = .object(ofGroup: Object, withProperties: ["length", "byteLength", "buffer", "constructor", "byteOffset", "__proto__"], withMethods: ["reverse", "reduce", "subarray", "forEach", "findIndex", "values", "sort", "set", "lastIndexOf", "some", "reduceRight", "copyWithin", "entries", "a", "every", "indexOf", "find", "keys", "fill", "map", "join", "filter", "includes", "slice"])
        }
    }
    const v29 = v15.forEach(v16,"eeeRbEqfAO");
    // v29 = .undefined
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();
