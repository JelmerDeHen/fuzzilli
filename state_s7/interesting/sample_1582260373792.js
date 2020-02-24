function main() {
let v28 = 0;
const v29 = 5 > 1337;
// v29 = .boolean
let v30 = "boolean";
if (v29) {
    v30 = 0;
    v30 = v30;
} else {
}
const v31 = v28 + 1;
// v31 = .primitive
v28 = v31;
}
%NeverOptimizeFunction(main);
main();
