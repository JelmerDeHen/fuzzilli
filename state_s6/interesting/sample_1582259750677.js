function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {constructor:1337,__proto__:"q/+K04Gt.w"};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
let v6 = 0;
do {
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    function v11(v12,v13) {
        try {
            const v16 = {set:v13,get:v11};
            // v16 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
            const v18 = Object.defineProperty(v2,"e",v16);
            // v18 = .undefined
            const v19 = undefined[v3];
            // v19 = .unknown
        } catch(v20) {
        }
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v23 = v22;
    const v24 = v11(v23);
    // v24 = .unknown
    const v25 = v6 + 1;
    // v25 = .primitive
    v6 = v25;
} while (v6 != 7);
}
%NeverOptimizeFunction(main);
main();
