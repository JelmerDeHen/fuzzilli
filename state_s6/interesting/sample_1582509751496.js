function main() {
const v3 = {length:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v6 = [1337,v3,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v7(v8,v9) {
    function v10(v11,v12) {
    }
    const v17 = [196654.93047159188,196654.93047159188,196654.93047159188,3797639666];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v18 = [13.37,v9,v17];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v21 = -65537;
    while (v21 != 4096) {
        const v22 = v18.push(v21);
        // v22 = .integer
        const v23 = v21 + 1;
        // v23 = .primitive
        v21 = v23;
    }
    const v25 = new Uint16Array(1000);
    // v25 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
    try {
        const v27 = eval("toPrimitive");
        // v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    } catch(v28) {
        const v29 = {__proto__:v28,a:v10,...v25,...4294967296,...v28,...v25};
        // v29 = .object(ofGroup: Object, withProperties: ["buffer", "length", "byteLength", "byteOffset", "constructor", "__proto__"], withMethods: ["filter", "lastIndexOf", "subarray", "forEach", "sort", "entries", "reverse", "copyWithin", "map", "findIndex", "includes", "values", "reduce", "indexOf", "a", "keys", "reduceRight", "join", "slice", "some", "fill", "every", "find", "set"])
    }
}
const v30 = v6.forEach(v7,"eeeRbEqfAO");
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
