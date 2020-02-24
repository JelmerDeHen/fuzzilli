function main() {
function v1(v2,v3) {
    const v6 = ["valueOf",1337];
    // v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v16 = 0;
    for (let v19 = 0; v19 < 100; v19++) {
    }
    const v20 = {length:"symbol"};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v21 = {constructor:13.37,length:13.37,__proto__:v20,toString:Number,a:"symbol"};
    // v21 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
    for (const v22 of v6) {
        const v23 = "valueOf" in v21;
        // v23 = .boolean
    }
    for (const v26 of "asyncIterator") {
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
const v32 = v1(1024,4.0);
// v32 = .unknown
const v36 = v29.forEach(v1,v29);
// v36 = .undefined
}
%NeverOptimizeFunction(main);
main();
