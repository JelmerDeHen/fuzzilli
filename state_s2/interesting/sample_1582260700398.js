function main() {
let v74 = 0;
let v80 = 0;
const v81 = typeof 4;
// v81 = .string
const v83 = v81 === "number";
// v83 = .boolean
let v87 = 0;
for (const v101 in Object) {
    const v102 = v101 / v101;
    // v102 = .number
}
let v115 = 0;
const v118 = v115 + 1;
// v118 = .primitive
v115 = v118;
}
%NeverOptimizeFunction(main);
main();
