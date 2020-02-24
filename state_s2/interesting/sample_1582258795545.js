function main() {
let v5 = 0;
do {
    const v7 = (1337).__proto__;
    // v7 = .unknown
    const v9 = v7.toLocaleString(0);
    // v9 = .unknown
    const v10 = v5 + 1;
    // v10 = .primitive
    v5 = v10;
} while (v5 < 8);
const v18 = gc();
// v18 = .undefined
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
}
%NeverOptimizeFunction(main);
main();
