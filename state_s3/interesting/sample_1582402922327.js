function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37,-1,v6,Int8Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {c:Int8Array};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v10 = v4;
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = ["matchAll",v15,v15,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = {length:Array,b:v17,a:-2,toString:v15,d:v17};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "a", "d", "b", "__proto__"], withMethods: ["length"])
const v20 = {c:v18,d:v15,a:13.37,valueOf:1337,length:Array,b:13.37,toString:"matchAll"};
// v20 = .object(ofGroup: Object, withProperties: ["d", "b", "a", "valueOf", "toString", "c", "__proto__"], withMethods: ["length"])
let v21 = v17;
const v24 = new ArrayBuffer(1337);
// v24 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v27 = v24.slice(1024,1337);
// v27 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v32 = [13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v34 = [1337,1337,1337,1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v35 = [3,1337,1337,3];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v36 = {toString:13.37,b:v35,length:WeakSet,__proto__:3,c:v34};
// v36 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length", "b", "c"])
const v37 = 1337 < 1337;
// v37 = .boolean
let v38 = v35;
if (v37) {
    const v39 = v32.__proto__;
    // v39 = .object()
    v38 = v20;
} else {
    const v40 = v32.indexOf(v38,1337);
    // v40 = .integer
    v38 = v40;
}
const v41 = (-2)[WeakSet];
// v41 = .unknown
for (let v45 = 0; v45 < 7; v45++) {
}
const v47 = {get:Array};
// v47 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v49 = Object.defineProperty(v35,65536,v47);
// v49 = .undefined
const v50 = {constructor:v36,length:v34,valueOf:"object",e:v36};
// v50 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "length", "e"])
const v51 = v35.entries();
// v51 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (const v52 in v50) {
    const v53 = new WeakSet(v51);
    // v53 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["add", "has", "delete"])
}
try {
} catch(v54) {
}
const v56 = [1337,1337];
// v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v57 = v51;
if (v41) {
    v57 = 65536;
} else {
    delete "object"[-3442867991];
    v57 = 0;
}
let v60 = undefined;
let v65 = 0;
do {
    const v66 = 3156875969 <= "pvU0UUjoya";
    // v66 = .boolean
    let v68 = v66;
    const v69 = v68 + 1;
    // v69 = .primitive
    v68 = v69;
    const v70 = v65 + 1;
    // v70 = .primitive
    const v73 = [0,0,0,0];
    // v73 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (const v75 in "description") {
        const v76 = v73.fill("0KER+GR*qV");
        // v76 = .undefined
    }
    v65 = v70;
} while (v65 < 8);
const v78 = v56 === v60;
// v78 = .boolean
const v80 = [1337];
// v80 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v81 = v80;
}
%NeverOptimizeFunction(main);
main();
