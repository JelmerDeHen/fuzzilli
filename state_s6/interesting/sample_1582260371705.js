function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["c",1337,3488870410];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {__proto__:3488870410,length:"c",e:13.37,c:v7,d:Uint32Array};
// v8 = .object(ofGroup: Object, withProperties: ["length", "d", "e", "c", "__proto__"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
const v12 = {constructor:Uint32Array,c:v7};
// v12 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__"])
let v13 = v6;
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v24 = 0;
            let v28 = 0;
            const v31 = [1337];
            // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v32 = v31.pop();
            // v32 = .unknown
            const v33 = v31.unshift(v32);
            // v33 = .integer
            do {
                const v34 = v24 + 1;
                // v34 = .primitive
                v24 = v34;
            } while (v24 < 7);
            const v35 = v21 + 1;
            // v35 = .primitive
            v21 = v35;
        } while (v21 < 8);
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v38 = v37;
const v39 = v14(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
