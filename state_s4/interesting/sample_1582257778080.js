function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [3095692861,3095692861,1337,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v48 = v47;
const v49 = v8(v48);
// v49 = .unknown
const v50 = v5.constructor;
// v50 = .object(ofGroup: Function, withProperties: ["caller", "constructor", "arguments", "__proto__", "prototype", "length", "name"], withMethods: ["apply", "call", "bind"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"]))
const v51 = v50.bind(v1,gc,8);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
