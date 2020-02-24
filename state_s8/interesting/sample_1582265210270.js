function main() {
let v2 = 471091797;
const v3 = typeof v2;
// v3 = .string
const v5 = v3 === "object";
// v5 = .boolean
let v17 = 0;
const v18 = Math.cos(0);
// v18 = .number
const v19 = v17 + 1;
// v19 = .primitive
v17 = v19;
}
%NeverOptimizeFunction(main);
main();
