function main() {
let v1 = Infinity;
let v2 = v1;
let v4 = undefined;
let v7 = 8;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v7 + 1;
// v12 = .primitive
v7 = v12;
try {
    const v14 = new ArrayBuffer(v2);
    // v14 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();
