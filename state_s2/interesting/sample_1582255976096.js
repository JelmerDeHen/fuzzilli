function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5) {
    const v13 = [13.37,13.37,13.37,13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    this.a = v13;
    const v16 = {length:v1};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v17 = {constructor:13.37,length:13.37,__proto__:v16,toString:Number,a:"N0Xx92zvHQ"};
    // v17 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
    let v18 = v17;
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
    let v26 = 0;
    do {
        const v27 = v26 + 1;
        // v27 = .primitive
        for (let v31 = 0; v31 < 3; v31++) {
            for (const v33 in "object") {
            }
        }
        v26 = v27;
    } while (v26 < 3);
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v36 = v35;
const v37 = v3(v36);
// v37 = .unknown
const v38 = v3();
// v38 = .unknown
const v39 = v3(1337,Reflect);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
