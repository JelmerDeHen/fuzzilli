function main() {
let v7 = "object";
do {
} while (v7 < 3);
}
%NeverOptimizeFunction(main);
main();
