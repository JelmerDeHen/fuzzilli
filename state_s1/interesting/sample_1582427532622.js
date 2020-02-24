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
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        v15.__proto__ = v1;
        let v21 = -1024;
        while (v21 < 5) {
            const v23 = {set:v7,get:gc};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v25 = Object.defineProperty(v15,"__proto__",v23);
            // v25 = .undefined
            const v26 = v21 + 1;
            // v26 = .primitive
            v21 = v26;
        }
        const v27 = [13.37,13.37,13.37,13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v28 = [v27,v27,v27];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v29 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v27,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b"])
        const v30 = [v29];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v31 = new WeakMap(v30);
        // v31 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "set", "delete", "get"])
        v15.__proto__ = v31;
    } while (v6 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
const v36 = v0();
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
