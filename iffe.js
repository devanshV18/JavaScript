//the function needs to be executed as soon as it is declared -> ex - Db connection function.

//syntax -> (function...)()

//named iffe

(function chai(){
    console.log(`DB Connected`)
})(); 
//semicolon -> it is important to end scope and context of the iffe being executed. if we dont apply this ; , the below iffe wont run

// IFFE -> IFFY ARE IMMEDIATELY EXECUTABLE FUNCTIONS AND THEY ARE USED TO AVOID THE VARIABLES AND DECLARATIONS OF GLOBAL SCOPE FROM POLLUTING THE FUNCTION SCOPE



//IFFY ARROW FUNCTION
( () => {
    console.log(`DB two Connected`)
} ) ();


//argumented iffe arrow -> argument is passed in the second braces.

( (name) => {
    console.log(`Hello ${name}`)
}) ('Devansh');
