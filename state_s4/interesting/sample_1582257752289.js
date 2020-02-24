function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [-2147483647];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {constructor:v5,length:v3,valueOf:v3,b:v6,a:13.37,c:isNaN};
// v7 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b", "a", "constructor"], withMethods: ["c"])
let v8 = isNaN;
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            for (const v22 of "pvU0UUjoya") {
            }
            const v23 = v17 + 1;
            // v23 = .primitive
            v17 = v23;
        } while (v17 < 8);
    }
    const v25 = v6.map(v8,v7);
    // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v26 = v7.c();
    // v26 = .unknown
    let v31 = 0;
    const v32 = v31 + 1;
    // v32 = .primitive
    v31 = v32;
    const v37 = 1337 == 13.37;
    // v37 = .boolean
    const v39 = Object();
    // v39 = .object()
    let v45 = 0;
    const v46 = v45 + 1;
    // v46 = .primitive
    v45 = v46;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v50 = v49;
const v51 = v10(v50);
// v51 = .unknown
const v52 = v10(1024,4.0);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
