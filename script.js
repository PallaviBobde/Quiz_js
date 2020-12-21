let questions = [
    {
        prompt:"What is 1+2 \n A)3 \n B)4 \n C)8 ",
        answer:"a",
    },
    {
        prompt:"What is 2+2 \n A)3 \n B)4 \n C)8 ",
        answer:"b"
    },
    {
        prompt:"What is 2+6 \n A)6 \n B)3 \n C)8 ",
        answer:"c"
    },
    {
        prompt:"What is 9+0 \n A)9 \n B)0 \n C)5 \n ",
        answer:"a"
    },
    {
        prompt:"What is 3+3 \n A)8 \n B)6 \n C)1 ",
        answer:"b"
    },
    {
        prompt:"What is 7+3 \n A)10 \n B)5 \n C)9 ",
        answer:"a"
    }
]
let score = 0;

for(let i=0; i<questions.length ; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct");
    }
    else{
        alert("Wrong");
    }
}
alert("Your score is "+score+"/"+questions.length);