function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37,13.37,"split",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:"split",valueOf:Int16Array,b:-4262261040,c:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "b", "valueOf", "length", "__proto__"])
const v9 = {d:"split",valueOf:v4,constructor:v4,b:v8,c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "c", "constructor", "valueOf", "__proto__"])
let v10 = v7;
function v12(v13,v14) {
    const v17 = ["valueOf",1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v27 = 0;
    for (let v30 = 0; v30 < 100; v30++) {
    }
    const v31 = {length:"symbol"};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"symbol"};
    // v32 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
    for (const v33 of v17) {
        const v34 = "valueOf" in v32;
        // v34 = .boolean
    }
    for (const v37 of "asyncIterator") {
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v41 = v40;
const v42 = v12(v41);
// v42 = .unknown
const v43 = v12(1024,4.0);
// v43 = .unknown
const v47 = v40.forEach(v12,v40);
// v47 = .undefined
let v50 = 0;
const v52 = (1337).__proto__;
// v52 = .unknown
let v55 = 0;
const v56 = v52.toLocaleString(0);
// v56 = .unknown
const v57 = v55 + 1;
// v57 = .primitive
v55 = v57;
const v59 = gc();
// v59 = .undefined
}
%NeverOptimizeFunction(main);
main();
