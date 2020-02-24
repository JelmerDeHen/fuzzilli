function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [0,13.37,0];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {constructor:0,b:v6,e:v7,__proto__:13.37,length:v4,a:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "b", "__proto__", "e"])
const v9 = {constructor:0,b:Number,c:v4,valueOf:v8,toString:v7,a:0};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "c", "a", "valueOf"], withMethods: ["b"])
let v10 = v8;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            for (const v21 of "pvU0UUjoya") {
            }
            const v22 = v19 + 1;
            // v22 = .primitive
            v19 = v22;
        } while (v19 < 8);
    }
    const v24 = [1337,1337,v14,1337];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    for (const v27 in "undefined") {
        let v30 = 0;
        const v33 = v24.push(8,v30,8,0,-2908695906);
        // v33 = .integer
    }
    return v7;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v37(v38,v39) {
    for (const v41 in "boolean") {
        let v44 = 0;
        do {
            for (let v48 = 0; v48 < 8; v48++) {
            }
        } while (v44 < 8);
    }
}
let v49 = v36;
const v50 = v12(v49);
// v50 = .unknown
const v51 = v12(1024,4.0);
// v51 = .unknown
const v52 = v12();
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
