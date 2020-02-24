function main() {
for (let v8 = 0; v8 < 100; v8++) {
    let v10 = undefined;
    const v12 = undefined > 1337;
    // v12 = .boolean
    const v13 = Math.floor(v12);
    // v13 = .number
    v10 = v13;
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
}
const v18 = [13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v20 = [1337,1337,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v21 = ["c"];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v22 = {a:1337,__proto__:v18,c:13.37,e:Set,valueOf:"c"};
// v22 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "c", "e"])
const v23 = {toString:"c",constructor:v20,d:13.37,e:1956253078,__proto__:v18,b:v22,c:1337};
// v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "constructor", "toString", "c", "b"])
let v24 = v22;
const v28 = [13.37,13.37,13.37,13.37];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v30 = [-1369322805,-1369322805,-1369322805,-1369322805];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v31 = "caller".__proto__;
// v31 = .object()
const v32 = [-1369322805,13.37,Function,v30];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v33 = {b:"caller",valueOf:v28,__proto__:v32};
// v33 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf"])
let v35 = 0;
const v37 = [13.37,13.37];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
for (const v40 in "boolean") {
    for (let v44 = 0; v44 < 3919595582; v44 = v44 + 3106653711) {
        const v46 = gc();
        // v46 = .undefined
        const v47 = v37.splice(-2147483647,0,13.37,0,3919595582,v44,0);
        // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
    let v49 = 0;
    const v50 = v49 + 1;
    // v50 = .primitive
}
const v51 = v37.shift();
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
