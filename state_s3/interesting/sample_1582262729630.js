function main() {
function v1(v2,v3) {
    const v6 = ["valueOf",1337];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (let v13 = 0; v13 < 100; v13++) {
    }
    const v14 = {length:"N0Xx92zvHQ"};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:"N0Xx92zvHQ"};
    // v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
    for (const v16 of v6) {
        const v17 = "valueOf" in v15;
        // v17 = .boolean
    }
    for (const v19 in "boolean") {
        let v22 = 0;
        for (const v24 of "pvU0UUjoya") {
        }
        const v25 = v22 + 1;
        // v25 = .primitive
        v22 = v25;
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v29 = v28;
const v30 = v1(v29);
// v30 = .unknown
const v31 = v1(1024,4.0);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
