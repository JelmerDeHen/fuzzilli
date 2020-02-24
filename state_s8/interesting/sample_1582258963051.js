function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {e:2676202182,valueOf:v4,b:2676202182,a:Float32Array};
// v5 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "a", "e"])
let v6 = v5;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v9 = v8;
let v11 = undefined;
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            const v23 = [1337,1337];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v25 = [1337,1337,1337,1337];
            // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v26 = v23.shift();
            // v26 = .unknown
            const v28 = Symbol.toPrimitive;
            // v28 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v28[v28] = v25;
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            const v34 = {set:undefined};
            // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
            const v36 = Object.defineProperty(v6,"b",v34);
            // v36 = .undefined
            const v37 = v32["boolean"];
            // v37 = .unknown
            v31 = v32;
            const v38 = v21 + 1;
            // v38 = .primitive
            v21 = v38;
        } while (v21 < 8);
    }
}
const v39 = v14();
// v39 = .unknown
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
}
%NeverOptimizeFunction(main);
main();
