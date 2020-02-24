function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,Promise];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:-4294967295,__proto__:v4,toString:v4,d:-4294967295,length:v4,a:-4294967295};
// v8 = .object(ofGroup: Object, withProperties: ["length", "a", "toString", "constructor", "d", "__proto__"])
const v9 = {e:13.37,valueOf:v4,__proto__:v6,toString:v6,a:v4,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["a", "d", "__proto__", "e", "valueOf", "toString"])
let v10 = v7;
function v11(v12,v13) {
    const v14 = v12 in v11;
    // v14 = .boolean
    const v20 = [3156875969,3156875969,1337,DataView];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v21 = {constructor:v20,c:v20,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v21 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "d", "constructor", "e"])
    let v23 = 0;
    let v25 = 0;
    const v30 = {a:"N0Xx92zvHQ"};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    const v31 = {constructor:13.37,length:13.37,__proto__:v30,toString:Number,a:"N0Xx92zvHQ"};
    // v31 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
    let v32 = v31;
    const v36 = {length:"N0Xx92zvHQ"};
    // v36 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v37 = {constructor:13.37,length:13.37,__proto__:v36,toString:Number,a:"N0Xx92zvHQ"};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "a"], withMethods: ["toString"])
    let v40 = 0;
    do {
        const v41 = v32.__proto__;
        // v41 = .object()
        v32 = 1337;
        const v42 = v40 + 1;
        // v42 = .primitive
        v40 = v42;
    } while (v40 < 3);
    let v45 = 0;
    const v46 = {c:13.37};
    // v46 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    for (const v49 in "object") {
        for (const v51 in "vw3kArEP8a") {
            const v52 = !v37;
            // v52 = .boolean
            const v53 = 2924105460 > v52;
            // v53 = .boolean
        }
    }
    return v36;
}
for (let v57 = 0; v57 < 100; v57++) {
    const v58 = v11();
    // v58 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
