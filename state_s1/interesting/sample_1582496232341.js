function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
        try {
            const v26 = eval("toPrimitive");
            // v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        } catch(v27) {
            const v28 = {__proto__:v27,a:v19,...v24,...4294967296,...v27,...v24};
            // v28 = .object(ofGroup: Object, withProperties: ["byteLength", "byteOffset", "length", "buffer", "constructor", "__proto__"], withMethods: ["a", "map", "copyWithin", "fill", "forEach", "findIndex", "set", "reduceRight", "reduce", "indexOf", "find", "subarray", "filter", "values", "entries", "slice", "keys", "sort", "every", "some", "join", "lastIndexOf", "includes", "reverse"])
        }
    }
    const v29 = v15.forEach(v16,"eeeRbEqfAO");
    // v29 = .undefined
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();
