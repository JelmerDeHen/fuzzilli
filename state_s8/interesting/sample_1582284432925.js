function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v4,13.37,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:v4,e:v6,a:1337};
// v8 = .object(ofGroup: Object, withProperties: ["c", "e", "a", "__proto__"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v4;
let v13 = 0;
const v18 = [13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v20 = "undefined" - 1;
// v20 = .primitive
for (const v21 in "undefined") {
    let v24 = 0;
    while (v24 < 10) {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
}
const v26 = typeof v18;
// v26 = .string
const v28 = v26 === "number";
// v28 = .boolean
const v29 = new Uint8Array(v18);
// v29 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
const v30 = 2 === 2;
// v30 = .boolean
let v31 = 2;
if (v30) {
    const v34 = new Uint8Array(43354);
    // v34 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
    v31 = v34;
} else {
    const v35 = v29.__proto__;
    // v35 = .object()
    v31 = v35;
}
const v36 = [1337,1337,1337,1337,1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v37 = [];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v38 = {constructor:Uint8Array,b:13.37};
// v38 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__"])
const v39 = {b:"undefined",__proto__:Uint8Array,a:Uint8Array,toString:v36,constructor:v37};
// v39 = .object(ofGroup: Object, withProperties: ["b", "constructor", "a", "toString", "__proto__"])
let v40 = v37;
const v42 = [13.37,13.37,13.37,13.37,13.37];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (const v46 in "object") {
    const v49 = [1337,Promise];
    // v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v50 = v49;
    function v51(v52,v53) {
        let v57 = 0;
        const v62 = v57 + 1;
        // v62 = .primitive
        v57 = v62;
        let v66 = 0;
        const v67 = v42 + 1;
        // v67 = .primitive
        v66 = v67;
        let v74 = 0;
        const v75 = v74 + 1;
        // v75 = .primitive
        v74 = v75;
        const v98 = [13.37,13.37,13.37,13.37,13.37];
        // v98 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v103 = Object();
        // v103 = .object()
        const v104 = "object".length;
        // v104 = .integer
        const v106 = Symbol.species;
        // v106 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        Promise[v106] = 2;
        const v107 = "number".charAt(0);
        // v107 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        let v110 = 0;
        do {
            const v111 = typeof v53;
            // v111 = .string
            const v113 = v111 === "boolean";
            // v113 = .boolean
            let v116 = 0;
            while (v116 < 7) {
                const v119 = v116 + 1;
                // v119 = .primitive
                v116 = v119;
            }
            const v120 = v110 + 1;
            // v120 = .primitive
            v110 = v120;
        } while (v110 < 7);
        return 1;
    }
    const v122 = [1337];
    // v122 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v123 = v122;
    const v124 = v51(v123);
    // v124 = .unknown
}
do {
    function v127(v128,v129) {
        try {
            let v131 = undefined;
            const v132 = {get:v131,set:v127};
            // v132 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
            const v134 = Object.defineProperty(Math,9,v132);
            // v134 = .undefined
        } catch(v135) {
        }
        return v13;
    }
    const v137 = [1337];
    // v137 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v138 = v137;
    const v139 = v127(v138);
    // v139 = .unknown
    const v140 = v13 + 1;
    // v140 = .primitive
    v13 = v140;
} while (v13 < 7);
}
%NeverOptimizeFunction(main);
main();
