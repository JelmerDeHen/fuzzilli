function main() {
let v7 = 0;
do {
    const v9 = {set:Object};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v11 = Object.defineProperty(Reflect,"length",v9);
    // v11 = .undefined
    const v12 = v7 + 1;
    // v12 = .primitive
    v7 = v12;
} while (v7 < 5);
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
}
%NeverOptimizeFunction(main);
main();
