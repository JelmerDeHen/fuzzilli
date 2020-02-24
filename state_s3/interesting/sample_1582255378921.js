function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,v6,"e",v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {b:1337};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v9 = {valueOf:"e",length:1337,a:v6,b:v6,e:1337};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "valueOf", "b", "e"])
let v10 = "e";
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = [1337,v15,13.37,1024];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = {length:"N0Xx92zvHQ"};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v19 = {constructor:13.37,length:13.37,__proto__:v18,toString:Number,a:"N0Xx92zvHQ"};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
const v22 = [13.37,13.37,13.37,13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
for (const v31 of v23) {
    const v35 = {length:"N0Xx92zvHQ"};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v36 = {constructor:13.37,length:13.37,__proto__:v35,toString:Number,a:"N0Xx92zvHQ"};
    // v36 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
    for (const v38 in "object") {
        const v39 = v35.__proto__;
        // v39 = .object()
        for (const v41 in "replace") {
        }
    }
}
const v43 = v17.push(v23,v10,v19,1024);
// v43 = .integer
v7[0] = 1;
const v44 = !Reflect;
// v44 = .boolean
const v45 = {__proto__:v15,d:v8,e:1337};
// v45 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
const v46 = Number(v18);
// v46 = .number
}
%NeverOptimizeFunction(main);
main();
