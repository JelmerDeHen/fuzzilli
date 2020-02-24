function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6,1337,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v9 = {a:-4294967295,e:13.37,__proto__:"dVmqACI+Vs",length:v4,b:-4294967295};
// v9 = .object(ofGroup: Object, withProperties: ["e", "a", "b", "__proto__", "length"])
let v10 = "dVmqACI+Vs";
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = {valueOf:"e",length:1337,a:v13,b:v13,e:1337};
// v14 = .object(ofGroup: Object, withProperties: ["a", "e", "b", "valueOf", "length", "__proto__"])
function v15(v16,v17) {
    let v24 = 0;
    for (const v25 in "boolean") {
        let v27 = 0;
        do {
            let v30 = 0;
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
            const v42 = {constructor:"symbol",length:9007199254740993};
            // v42 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
            delete v42.length;
            for (const v45 of "pvU0UUjoya") {
            }
            const v46 = v27 + 1;
            // v46 = .primitive
            v27 = v46;
        } while (v27 < v25);
    }
    v24 = v14;
    return "e";
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v50 = v49;
const v51 = v15(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
