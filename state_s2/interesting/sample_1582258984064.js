function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            v16 = v17;
            let v30 = 0;
            let v33 = 0;
            let v36 = 0;
            let v39 = 0;
            let v45 = 0;
            const v51 = eval(1337);
            // v51 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            let v64 = 0;
            const v72 = [13.37,13.37,13.37,13.37];
            // v72 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v73 = {__proto__:"hasInstance",d:v72};
            // v73 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
            const v75 = {call:v73};
            // v75 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
            const v77 = new Proxy(Array,v75);
            // v77 = .unknown
            for (const v78 in v77) {
            }
            const v82 = v13 + 1;
            // v82 = .primitive
            v13 = v82;
        } while (v13 < 8);
    }
    const v83 = v9 + 1;
    // v83 = .primitive
    v9 = v83;
}
const v86 = [1337];
// v86 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v87 = v86;
const v88 = v0(v87);
// v88 = .unknown
let v92 = -256;
const v93 = v92 + 1;
// v93 = .primitive
v92 = v93;
}
%NeverOptimizeFunction(main);
main();