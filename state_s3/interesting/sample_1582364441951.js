function main() {
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = ["w6xp8*lmC2",13.37,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {__proto__:Uint16Array,a:v7,valueOf:2244499475,d:v6,b:v6};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "d", "__proto__", "a"])
const v10 = [1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {valueOf:v10};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v13 = {e:v11,d:"d"};
// v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v14(v15,v16) {
    let v20 = -128;
    while (v20 < 5) {
        const v21 = v13 === 0;
        // v21 = .boolean
        const v22 = v20 + 1;
        // v22 = .primitive
        const v23 = v21 << "ELIuQj/GzS";
        // v23 = .integer
        v8.d = v23;
        v20 = v22;
        const v24 = {c:v22,a:v21,__proto__:0,toString:v13,b:v7,d:v7,e:v13,length:v21};
        // v24 = .object(ofGroup: Object, withProperties: ["d", "e", "length", "c", "toString", "a", "b", "__proto__"])
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v14(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
