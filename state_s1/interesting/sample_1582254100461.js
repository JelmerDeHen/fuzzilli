function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,v4,13.37,1024];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
let v10 = v9;
const v17 = Object.entries(Object);
// v17 = .object()
const v20 = {length:"N0Xx92zvHQ"};
// v20 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
Number.__proto__ = "N0Xx92zvHQ";
const v23 = typeof v6;
// v23 = .string
const v25 = v23 === "number";
// v25 = .boolean
let v26 = 0;
if (v25) {
    let v29 = 0;
    while (v29 < 9) {
        const v30 = new Number();
        // v30 = .number
        const v31 = v29 + 1;
        // v31 = .primitive
        v29 = v31;
    }
    v26 = 0;
} else {
    let v34 = 0;
    while (v34 < 6) {
        delete v20.__proto__;
        const v35 = v34 + 1;
        // v35 = .primitive
        v34 = v35;
    }
    v26 = 0;
}
const v36 = "N0Xx92zvHQ" + v4;
// v36 = .primitive
for (const v40 in "object") {
    const v41 = v20 > v25;
    // v41 = .boolean
    v8[-2731944888] = v40;
    const v43 = {get:gc};
    // v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v45 = Object.defineProperty(Object,-4096,v43);
    // v45 = .undefined
    const v46 = v43.get(v40,Object,1337,-4096,v10);
    // v46 = .unknown
}
let v58 = 0;
const v59 = v58 + 1;
// v59 = .primitive
v58 = v59;
const v61 = 0 | v20;
// v61 = .integer
const v62 = v17[10];
// v62 = .unknown
}
%NeverOptimizeFunction(main);
main();
