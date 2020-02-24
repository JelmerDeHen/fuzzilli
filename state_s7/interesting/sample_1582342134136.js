function main() {
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = ["w6xp8*lmC2",13.37,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {__proto__:Uint16Array,a:v6,valueOf:2244499475,d:v5,b:v5};
// v7 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "d", "a"])
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {valueOf:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v12 = {e:v10,d:"d"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v13(v14,v15) {
    let v20 = -128;
    while (v20 < 5) {
        const v21 = v12 === 0;
        // v21 = .boolean
        const v22 = v20 + 1;
        // v22 = .primitive
        const v23 = v21 + v22;
        // v23 = .primitive
        const v24 = -128 & v23;
        // v24 = .integer
        v20 = v22;
        const v25 = {c:v22,a:v21,__proto__:0,toString:v12,b:v6,d:v6,e:v12,length:v21};
        // v25 = .object(ofGroup: Object, withProperties: ["a", "e", "c", "__proto__", "b", "toString", "d", "length"])
        const v26 = {c:v22,e:v23,__proto__:v22,constructor:v25,d:v10,..."string",...v9};
        // v26 = .object(ofGroup: Object, withProperties: ["constructor", "length", "c", "__proto__", "e", "d"], withMethods: ["reverse", "startsWith", "find", "flatMap", "sort", "toLocaleString", "repeat", "filter", "map", "lastIndexOf", "unshift", "split", "replace", "codePointAt", "findIndex", "every", "trim", "join", "copyWithin", "pop", "splice", "shift", "values", "concat", "charAt", "flat", "includes", "indexOf", "substring", "some", "entries", "forEach", "slice", "reduceRight", "endsWith", "push", "padStart", "padEnd", "charCodeAt", "toString", "fill", "keys", "reduce"])
        const v27 = [v24,v7];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v13(v30);
// v31 = .unknown
let v34 = 255;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
