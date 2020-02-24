function main() {
let v27 = 0;
let v28 = 1337;
try {
} catch(v29) {
    v28 = v28;
}
const v30 = v27 + 1;
// v30 = .primitive
v27 = v30;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
}
%NeverOptimizeFunction(main);
main();
