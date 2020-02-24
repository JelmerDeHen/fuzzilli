function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = Boolean.__proto__;
// v6 = .unknown
let v7 = v5;
let v8 = v7;
const v10 = new Proxy(v8,Math);
// v10 = .unknown
v6.__proto__ = v10;
const v12 = {length:isFinite};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v15 = [1337,v12,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v16(v17,v18) {
    function v19(v20,v21) {
    }
    const v24 = new ArrayBuffer(1000);
    // v24 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    try {
        const v26 = eval("toPrimitive");
        // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    } catch(v27) {
        const v28 = {__proto__:v27,a:v19,...v24,...4294967296,...v27,...v24};
        // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "byteLength"], withMethods: ["slice", "a"])
    }
}
const v29 = v15.forEach(v16,"eeeRbEqfAO");
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
