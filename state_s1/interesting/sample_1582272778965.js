function main() {
for (const v2 in "boolean") {
    let v6 = 0;
    const v7 = gc();
    // v7 = .undefined
}
const v9 = {valueOf:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = v11;
let v14 = undefined;
let v18 = 0;
do {
    const v22 = [13.37,13.37,13.37,13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v23 = {length:"N0Xx92zvHQ"};
    // v23 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    with ("N0Xx92zvHQ") {
        let v29 = 0;
        const v30 = v29 + 1;
        // v30 = .primitive
        v29 = v30;
        const v31 = search(v23,1024,1024,v22,0);
        // v31 = .unknown
    }
    let v33 = 0;
    const v34 = v33[3];
    // v34 = .unknown
    const v35 = v9.__proto__;
    // v35 = .object()
    const v36 = v18 + 1;
    // v36 = .primitive
    v18 = v36;
} while (v18 < 8);
}
%NeverOptimizeFunction(main);
main();
