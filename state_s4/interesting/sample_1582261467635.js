function main() {
let v3 = 0;
let v8 = undefined;
let v11 = 0;
let v13 = v11;
try {
    Array.toString = Array;
    "symbol"[Array] = v11;
} catch(v24) {
}
const v28 = v13 + 1;
// v28 = .primitive
v13 = v28;
}
%NeverOptimizeFunction(main);
main();
