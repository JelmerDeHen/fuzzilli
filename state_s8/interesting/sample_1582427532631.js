function main() {
function v0(v1,v2) {
    let v6 = 0;
    function v7(v8,v9,v10,v11,v12) {
    }
    do {
        const v13 = v6 + 1;
        // v13 = .primitive
        v6 = v13;
        const v15 = [13.37];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        v15.__proto__ = v1;
        let v21 = -1024;
        while (v21 < 5) {
            const v23 = {set:v7,get:gc};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v25 = Object.defineProperty(v15,"__proto__",v23);
            // v25 = .undefined
            const v26 = v21 + 1;
            // v26 = .primitive
            v21 = v26;
        }
        const v27 = [13.37,13.37,13.37,13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v28 = [v27,v27,v27];
        // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v29 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v27,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b"])
        const v30 = [v29];
        // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v31 = new WeakMap(v30);
        // v31 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "get", "delete", "set"])
        v15.__proto__ = v31;
    } while (v6 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
const v36 = v0();
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
