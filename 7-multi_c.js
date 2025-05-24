const x = process.argv[2];

const int = Number(x);

if(Number.isNaN(int)){
    console.log("Missing number of occurrences");
} else {
    for(let i=0; i< int; i++){
       console.log("C is fun"); 
    }
}
