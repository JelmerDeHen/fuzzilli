function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["c",1337,3488870410];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {__proto__:3488870410,length:"c",e:13.37,c:v7,d:Uint32Array};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "d", "c"])
const v9 = {constructor:Uint32Array,c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c"])
let v10 = v6;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v21 = [13.37,13.37];
            // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v22 = v21[1024];
            // v22 = .unknown
            let v24 = 0;
            do {
                const v25 = ~v22;
                // v25 = .boolean
                const v26 = v25 + 1;
                // v26 = .primitive
                v24 = v26;
            } while (v24 < -712182.5890335378);
            for (const v28 in "object") {
            }
            const v29 = v18 + 1;
            // v29 = .primitive
            v18 = v29;
        } while (v18 < 8);
    }
    return Uint32Array;
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v32 = v31;
const v33 = v11(v32);
// v33 = .unknown
const v34 = "c".__proto__;
// v34 = .object()
const v35 = {};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"])
for (let v39 = 0; v39 < 6; v39++) {
    const v40 = v11();
    // v40 = .unknown
}
let v41 = v35;
const v42 = v11();
// v42 = .unknown
const v43 = v42.__proto__;
// v43 = .unknown
let v44 = v41;
const v46 = [13.37];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v48 = {set:v33};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v50 = Object.defineProperty(v34,2679003680,v48);
// v50 = .undefined
const v51 = v11(v34,v11);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
