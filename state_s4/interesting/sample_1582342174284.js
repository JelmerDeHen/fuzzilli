function main() {
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = ["w6xp8*lmC2",13.37,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {__proto__:Uint16Array,a:v6,valueOf:2244499475,d:v5,b:v5};
// v7 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "d", "b"])
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {valueOf:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v12 = {e:v10,d:"d"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
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
        // v25 = .object(ofGroup: Object, withProperties: ["b", "a", "e", "toString", "d", "length", "__proto__", "c"])
        const v26 = {c:v22,e:v23,__proto__:v22,constructor:v25,d:v10,..."string",...v9};
        // v26 = .object(ofGroup: Object, withProperties: ["length", "d", "c", "__proto__", "e", "constructor"], withMethods: ["startsWith", "keys", "every", "values", "entries", "reduceRight", "filter", "join", "flat", "lastIndexOf", "trim", "replace", "charCodeAt", "concat", "shift", "repeat", "reverse", "forEach", "splice", "sort", "reduce", "padEnd", "includes", "padStart", "fill", "pop", "toLocaleString", "map", "findIndex", "copyWithin", "endsWith", "split", "charAt", "unshift", "indexOf", "find", "push", "slice", "some", "flatMap", "substring", "toString", "codePointAt"])
        const v27 = [v24,v7];
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
