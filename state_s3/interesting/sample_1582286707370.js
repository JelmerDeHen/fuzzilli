function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [-2628700107];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {e:gc,a:v4,__proto__:gc,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["d", "a", "__proto__"], withMethods: ["e", "__proto__"])
const v9 = {e:v7,a:13.37,b:13.37,length:1337,c:v6,d:1337};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "a", "b", "length", "d"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v18 = v13.slice(1024,1337);
// v18 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v20 = v19;
let v22 = undefined;
const v26 = new DataView(v18,127,v22);
// v26 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v29 = v28;
let v31 = undefined;
for (const v33 in "boolean") {
    let v36 = 0;
    do {
        for (let v40 = 0; v40 < 2; v40 = v40 + 4187706354) {
            for (const v42 in "boolean") {
                let v45 = 0;
                do {
                    const v47 = [13.37,13.37,13.37,13.37,13.37];
                    // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                    let v48 = v47;
                    const v54 = [1337];
                    // v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                    const v55 = {b:v54,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
                    // v55 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "valueOf", "length", "b"])
                    v48[8] = v55;
                    for (const v56 of v48) {
                    }
                    const v57 = v45 + 1;
                    // v57 = .primitive
                    v45 = v57;
                } while (v45 < 8);
            }
        }
        const v58 = v36 + 1;
        // v58 = .primitive
        v36 = v58;
    } while (v36 < 8);
}
}
%NeverOptimizeFunction(main);
main();
