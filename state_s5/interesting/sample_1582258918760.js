function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {e:Int16Array,c:1337,valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "c"])
const v9 = {c:Int16Array,__proto__:v7,length:Int16Array};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "c"])
let v10 = 1337;
let v12 = 1337;
for (let v16 = 0; v16 < 8; v16++) {
    let v19 = 0;
    do {
        const v24 = (1337).__proto__;
        // v24 = .unknown
        let v27 = Object;
        const v28 = v27.getOwnPropertyDescriptors(v27);
        // v28 = .object()
        let v31 = 0;
        const v35 = new Int16Array(19873);
        // v35 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        let v37 = 0;
        const v38 = {};
        // v38 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v41 = 0;
        const v42 = v41 + 1;
        // v42 = .primitive
        v41 = v42;
        const v43 = v37 + 1;
        // v43 = .primitive
        v37 = v43;
        let v46 = 0;
        const v47 = v46 + 1;
        // v47 = .primitive
        v46 = v47;
        const v48 = v24.toLocaleString(0);
        // v48 = .unknown
        const v49 = v19 + 1;
        // v49 = .primitive
        v19 = v49;
    } while (v19 < 8);
}
}
%NeverOptimizeFunction(main);
main();
