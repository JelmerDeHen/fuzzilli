function main() {
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = [v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {c:Proxy,valueOf:-128,d:v8,__proto__:-128,e:"Jkpn+sbYGJ"};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "c", "d"])
const v10 = {a:v9,valueOf:v7,length:v7,d:v9,constructor:1337,__proto__:"Jkpn+sbYGJ",c:1337,e:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "c", "e", "a", "constructor", "valueOf", "d", "__proto__"])
function v12(v13,v14) {
    const v20 = [13.37,13.37,13.37,13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v22 = [1337,1337,Boolean];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v23 = [v20,v22,Boolean,v20];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v27 = new Uint8Array(28518);
    // v27 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
    const v28 = v27[0];
    // v28 = .unknown
    const v30 = {set:gc};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v32 = Object.defineProperty(v23,"a",v30);
    // v32 = .undefined
    const v33 = eval(v32);
    // v33 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    for (let v34 = 0; v34 < 100; v34++) {
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v12(v38);
// v39 = .unknown
const v40 = v12(1024,4.0);
// v40 = .unknown
const v42 = v37.forEach(v12,v37);
// v42 = .undefined
const v43 = v12(1,1337);
// v43 = .unknown
const v44 = v8 >> 4.0;
// v44 = .integer
const v45 = v12(v10,v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
