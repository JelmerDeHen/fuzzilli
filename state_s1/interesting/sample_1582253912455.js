function main() {
"replace"[1] = -9007199254740991;
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
let v46 = 0;
const v47 = v46 + 1;
// v47 = .primitive
v46 = v47;
}
%NeverOptimizeFunction(main);
main();
