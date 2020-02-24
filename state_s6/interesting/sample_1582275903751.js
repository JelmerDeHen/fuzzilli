function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [3146204514,"e5rkP.F/fB"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {constructor:13.37,c:3146204514,length:v4,__proto__:"e5rkP.F/fB"};
// v8 = .object(ofGroup: Object, withProperties: ["c", "length", "__proto__", "constructor"])
const v9 = {valueOf:"e5rkP.F/fB",e:"e5rkP.F/fB",__proto__:v6,d:v4,c:1337,a:Symbol,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "d", "valueOf", "e"], withMethods: ["a"])
let v10 = v6;
let v13 = 0;
do {
    const v14 = v13 + 1;
    // v14 = .primitive
    const v18 = [4096];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v19 = v18;
    let v21 = undefined;
    function v22(v23,v24) {
        const v28 = JSON.stringify(JSON,JSON,2153514987);
        // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        JSON[v23] = v28;
        return JSON;
    }
    const v33 = [13.37,13.37,-4294967297,13.37];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v34 = {length:v33,d:Uint8Array};
    // v34 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d"])
    function v35(v36,v37) {
        let v39 = 0;
        for (const v40 in v34) {
            let v43 = 0;
            do {
                let v46 = 0;
                while (v46 < 9) {
                    const v47 = v46 % 9;
                    // v47 = .number
                    const v48 = v47 + 1;
                    // v48 = .primitive
                    v46 = v48;
                }
                const v49 = v43 + 1;
                // v49 = .primitive
                v43 = v49;
            } while (v43 < 8);
        }
        return v39;
    }
    const v50 = [1337];
    // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v51 = v50;
    const v52 = v22(v51);
    // v52 = .unknown
    const v53 = v22();
    // v53 = .unknown
    v13 = v14;
} while (v13 < 7);
const v58 = Symbol("e5rkP.F/fB");
// v58 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v59 = Boolean.prototype;
// v59 = .object()
for (const v60 in v9) {
    const v61 = typeof v60;
    // v61 = .string
    const v63 = v61 === "object";
    // v63 = .boolean
}
let v66 = 0;
while (v66 < 6) {
    const v68 = Symbol.toStringTag;
    // v68 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v69 = v8[v68];
    // v69 = .unknown
    const v70 = v66 + 1;
    // v70 = .primitive
    v66 = v70;
}
const v71 = Boolean(3146204514);
// v71 = .boolean
}
%NeverOptimizeFunction(main);
main();
