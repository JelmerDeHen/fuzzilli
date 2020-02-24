function main() {
let v2 = "object";
do {
} while (v2 < 3);
}
%NeverOptimizeFunction(main);
main();
