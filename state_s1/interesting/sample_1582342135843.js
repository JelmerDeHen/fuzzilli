function main() {
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = ["w6xp8*lmC2",13.37,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {__proto__:Uint16Array,a:v6,valueOf:2244499475,d:v5,b:v5};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "valueOf", "a"])
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
        // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "length", "a", "c", "e", "b"])
        const v26 = {c:v22,e:v23,__proto__:v22,constructor:v25,d:v10,..."string",...v9};
        // v26 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "c", "e", "length"], withMethods: ["pop", "every", "find", "flat", "toString", "split", "padEnd", "values", "includes", "toLocaleString", "replace", "push", "map", "repeat", "sort", "charCodeAt", "reduceRight", "filter", "indexOf", "trim", "some", "reduce", "reverse", "startsWith", "copyWithin", "join", "unshift", "padStart", "lastIndexOf", "substring", "slice", "splice", "forEach", "endsWith", "keys", "concat", "findIndex", "entries", "charAt", "shift", "fill", "flatMap", "codePointAt"])
        const v27 = [v24,v7];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
