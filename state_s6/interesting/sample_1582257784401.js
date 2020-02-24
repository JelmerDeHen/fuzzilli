function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [3095692861,3095692861,1337,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v8(v9,v10) {
    const v11 = v9 in v8;
    // v11 = .boolean
    let v19 = 0;
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            v26 = v27;
            const v38 = v23 + 1;
            // v38 = .primitive
            for (let v42 = 0; v42 < 10; v42++) {
            }
            const v43 = v38 === 3156875969;
            // v43 = .boolean
            v1[0] = v43;
            v23 = v38;
        } while (v23 < 8);
    }
    const v44 = v19 + 1;
    // v44 = .primitive
    v19 = v44;
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v48 = v47;
const v49 = v8(v48);
// v49 = .unknown
const v50 = v5.constructor;
// v50 = .object(ofGroup: Function, withProperties: ["prototype", "name", "caller", "constructor", "arguments", "length", "__proto__"], withMethods: ["apply", "bind", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"]))
const v51 = v50.bind(v1,gc,8);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
