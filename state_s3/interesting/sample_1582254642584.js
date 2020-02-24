function main() {
"symbol".constructor = "symbol";
}
%NeverOptimizeFunction(main);
main();
