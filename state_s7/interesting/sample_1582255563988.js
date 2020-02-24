function main() {
let v3 = 0;
with (this) {
    toString = 1337;
}
}
%NeverOptimizeFunction(main);
main();
