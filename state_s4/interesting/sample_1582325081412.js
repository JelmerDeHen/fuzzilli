function main() {
try {
    let v5 = 0;
    const v11 = new ArrayBuffer(1337);
    // v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v11.constructor = Int16Array;
    const v14 = v11.slice(1024,1337);
    // v14 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
} catch(v15) {
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
}
%NeverOptimizeFunction(main);
main();
