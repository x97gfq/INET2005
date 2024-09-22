let answers = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'];

function getAnswer() {

    //alert("here");
    let question = document.getElementById('question').text;

    document.getElementById('question').text = '';

    let number_of_answers = answers.length;

    let random = Math.floor(Math.random() * number_of_answers);

    let message = answers[random];

    document.getElementById('eightball_answer').innerHTML = message;
}
