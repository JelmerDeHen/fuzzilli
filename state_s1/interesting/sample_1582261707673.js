function main() {
function v1(v2,v3) {
    const v6 = 1337 == 13.37;
    // v6 = .boolean
    let v13 = 0;
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v15 = v14;
    let v17 = undefined;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            function v26(v27,v28) {
                for (const v30 in "boolean") {
                    const v34 = [13.37,13.37,13.37,13.37,13.37];
                    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    let v35 = v34;
                    const v36 = v35.constructor;
                    // v36 = .object(ofGroup: Function, withProperties: ["caller", "prototype", "__proto__", "name", "arguments", "length", "constructor"], withMethods: ["bind", "apply", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"]))
                    let v37 = 0;
                    const v39 = Symbol.toPrimitive;
                    // v39 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                    const v40 = v37 + 1;
                    // v40 = .primitive
                    v37 = v40;
                }
            }
            const v42 = [1337];
            // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v43 = v42;
            const v44 = v26(v43);
            // v44 = .unknown
            const v45 = v25 + 1;
            // v45 = .primitive
            v25 = v45;
            const v46 = v22 + 1;
            // v46 = .primitive
            v22 = v46;
        } while (v22 < 8);
    }
    const v48 = Symbol.match;
    // v48 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Symbol[v48] = v48;
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v52 = v51;
const v53 = v1(v52);
// v53 = .unknown
const v54 = v1(1024,4.0);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
