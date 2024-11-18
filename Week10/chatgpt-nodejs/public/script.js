document.addEventListener("DOMContentLoaded", async (event) => {
    let prompt = "You're a trivia host, ask a trivia question, make it nova scotia history, and give the host a nova scotian personality";

    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.text();
    document.getElementById('response').innerText = data;
  });    

  document.getElementById('chat-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    //const prompt = document.getElementById('prompt').value;

    let prompt = "you asked this question: " + document.getElementById("response").innerText;
    prompt += "and the user answered this: " + document.getElementById('prompt').value;
    prompt += ", tell me TRUE or FALSE if the user answered correctly."

    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.text();

    if (data.indexOf("TRUE") === 0) alert("correct");
    else alert("incorrect");

    document.getElementById('response').innerText = data;
  });
