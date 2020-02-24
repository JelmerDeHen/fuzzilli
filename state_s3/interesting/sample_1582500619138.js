function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v16(v17,v18) {
    function v19(v20,v21) {
    }
    const v24 = new ArrayBuffer(1000);
    // v24 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    try {
        const v26 = eval("toPrimitive");
        // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    } catch(v27) {
        const v28 = {__proto__:v27,a:v19,...v24,...4294967296,...v27,...v24};
        // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "byteLength"], withMethods: ["a", "slice"])
    }
}
const v29 = v15.forEach(v16,"eeeRbEqfAO");
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
