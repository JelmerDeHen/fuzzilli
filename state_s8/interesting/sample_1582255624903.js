function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {toString:v4,b:"PI",valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "b", "valueOf"])
const v8 = {b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
function v23(v24,v25) {
    const v31 = [3156875969,3156875969,1337,DataView];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    for (const v51 in "boolean") {
        let v54 = 0;
        do {
            const v57 = 0 & 7;
            // v57 = .integer
            const v58 = Object.prototype;
            // v58 = .object()
            const v59 = v8.b;
            // v59 = .unknown
            let v61 = 0;
            do {
                const v62 = v61 + 1;
                // v62 = .primitive
                v61 = v62;
            } while (v61 < 7);
            const v64 = v31.reverse();
            // v64 = .undefined
            const v68 = v54 + 1;
            // v68 = .primitive
            v54 = v68;
            const v70 = Symbol.iterator;
            // v70 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v58[v70] = 1337;
        } while (v54 < 8);
    }
}
const v73 = [1337];
// v73 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v74 = v73;
const v79 = v23(v74);
// v79 = .unknown
}
%NeverOptimizeFunction(main);
main();