function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {c:v4,constructor:13.37,a:1337,length:v4,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "constructor", "a"])
const v9 = {toString:JSON,b:13.37,c:"symbol",a:v6};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "c", "a"])
let v10 = "symbol";
const v14 = {e:13.37,d:"d"};
// v14 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v15(v16,v17) {
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            while (v25 < 5) {
                const v26 = v14 === 0;
                // v26 = .boolean
                const v27 = v25 + 1;
                // v27 = .primitive
                const v28 = v26 / v26;
                // v28 = .number
                const v29 = 0 & v28;
                // v29 = .integer
                v25 = v27;
                let v30 = 1337;
                delete v29[v30];
            }
            const v31 = v22 + 1;
            // v31 = .primitive
            v22 = v31;
        } while (v22 <= 8);
    }
    return v10;
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v34 = v33[2147483649];
// v34 = .unknown
let v35 = v14;
if (v34) {
    v10 = v7;
    v35 = 13.37;
} else {
    v6.__proto__ = v35;
    v35 = v4;
}
delete v33.constructor;
const v36 = {};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v37 = [v36,v36,v36,v36,v36];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v38 = (1337)[v37];
// v38 = .unknown
let v39 = v33;
const v40 = v15(v39);
// v40 = .unknown
const v41 = {valueOf:-65535,toString:JSON,length:"symbol",e:v7};
// v41 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "valueOf", "toString"])
for (const v42 of v4) {
    v41.constructor = v42;
}
const v43 = "symbol".__proto__;
// v43 = .object()
v6[1337] = v15;
const v44 = v15(v6);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
