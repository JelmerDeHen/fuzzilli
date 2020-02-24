function main() {
const v2 = "pvU0UUjoya" > 127;
// v2 = .boolean
let v3 = v2;
if (v2) {
} else {
    const v4 = 127 >> v3;
    // v4 = .integer
}
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
