function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {c:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = v2[1024];
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v9 = {__proto__:3,constructor:v7,d:v3,valueOf:v4,length:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["d", "length", "constructor", "__proto__", "valueOf"])
const v12 = {constructor:"sZO5vNgWS7",length:9007199254740993};
// v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
try {
    for (const v13 of v12) {
    }
} catch(v14) {
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v21 = {c:13.37};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v26 = {__proto__:Array,constructor:Array,valueOf:gc,c:247633718,a:v21};
// v26 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c"], withMethods: ["valueOf", "constructor", "__proto__"])
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
for (const v31 of "pvU0UUjoya") {
}
const v35 = {length:"N0Xx92zvHQ"};
// v35 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v36 = {constructor:13.37,length:13.37,__proto__:v35,toString:Number,a:"N0Xx92zvHQ"};
// v36 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
}
%NeverOptimizeFunction(main);
main();
