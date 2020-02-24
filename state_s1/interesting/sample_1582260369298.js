function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [JSON,JSON,"0mosCN9zL0"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {b:v7,constructor:JSON,length:1337,c:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "c", "b"])
const v9 = {toString:v8,b:v6,a:v7,constructor:v8,length:JSON,e:v6};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "b", "a", "__proto__", "length", "e"])
let v11 = v8;
function v18(v19,v20) {
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 7);
            const v31 = parseFloat(v23);
            // v31 = .float
            const v32 = v31 + v31;
            // v32 = .primitive
            const v33 = v26 + 1;
            // v33 = .primitive
            v26 = v33;
        } while (v26 < 8);
    }
    return v20;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v36 = v35;
const v37 = v18(v36);
// v37 = .unknown
let v44 = 0;
do {
    let v47 = 0;
    do {
        v36 = v36;
        const v48 = v47 + 1;
        // v48 = .primitive
        v47 = v48;
        const v49 = "boolean".__proto__;
        // v49 = .object()
        const v50 = "0mosCN9zL0" % v48;
        // v50 = .number
        let v51 = v48;
        const v52 = v35.push(6);
        // v52 = .integer
    } while (v47 < 6);
    const v53 = v44 + 1;
    // v53 = .primitive
    v44 = v53;
} while (v44 < 2);
}
%NeverOptimizeFunction(main);
main();
