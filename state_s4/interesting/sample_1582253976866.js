function main() {
"string".__proto__ = Array;
}
%NeverOptimizeFunction(main);
main();
