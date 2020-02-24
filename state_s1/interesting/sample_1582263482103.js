function main() {
let v2 = 0;
const v6 = v2 + 1;
// v6 = .primitive
v2 = v6;
let v10 = 0;
let v13 = 0;
for (let v17 = 0; v17 < 100; v17++) {
    function v18(v19,v20) {
        const v23 = ["valueOf",1337];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        for (let v30 = 0; v30 < 100; v30++) {
        }
        const v31 = {length:"symbol"};
        // v31 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
        const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"symbol"};
        // v32 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
        const v33 = "valueOf" in v32;
        // v33 = .boolean
        for (const v35 of "asyncIterator") {
        }
    }
    const v37 = [1337];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v38 = v37;
    const v39 = v18(v38);
    // v39 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
