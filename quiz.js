function checkAnswers()
{
    var score = 0;
    var feedback = [];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'snorlax')
    {
        score++;
        feedback.push("Question 1 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 1 was SNORLAX");
    }

    if (document.quiz.a2.value === 'Portable Document Format')
    {
        score++;
        feedback.push("Question 2 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 2 was Portable Document Format");
    }
    if (document.quiz.a3A.checked === true && document.quiz.a3B.checked === true && document.quiz.a3C.checked === false && document.quiz.a3D.checked === false && document.quiz.a3E.checked === true)
    {
        score++;
        feedback.push("Question 3 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 3 was Swimming, Track and Field and Baseball");
    }
    if (document.quiz.a4.value.toLowerCase() === 'black panther')
    {
        score++;
        feedback.push("Question 4 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 4 was Black Panther");
    }
    if (document.quiz.a5.value === 'Ottawa')
    {
        score++;
        feedback.push("Question 5 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 5 was Ottawa");
    }
    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === false && document.quiz.a6C.checked === true && document.quiz.a6D.checked === false && document.quiz.a6E.checked === true)
    {
        score++;
        feedback.push("Question 6 is correct!");
    }
    else
    {
        feedback.push("Incorrect : Question 5 was Tater tots, Macaroni and Cheese and Buffalo wings")
    }
    document.getElementById("score").innerHTML = score.toString();
    document.getElementById("answer").innerHTML = feedback.join("<br>");

}
