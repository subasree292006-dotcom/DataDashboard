import { useState, useContext } from "react";
import { DataContext } from "./DataContext";

function AIChat() {
  const { rows } = useContext(DataContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          data: rows,
        }),
      });

      const result = await response.json();
      setAnswer(result.answer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        
      />


      <p>{answer}</p>
    </div>
  );
}

export default AIChat;