const argument = process.argv[2];

const int = Number(argument);

if(Number.isNaN(int)){
    console.log("Not a number");
} else {
    console.log("My number: " + int);
}