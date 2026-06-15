import { useContext } from "react";
import { DataContext } from "./DataContext";
import AIChat from "./AIChat";

function AIChatPage() {
  const { rows } = useContext(DataContext);

  return (
    <div>
      <h1>AI CSV Assistant</h1>

      <AIChat rows={rows} />
      <section id="footer"><Footer/></section>
    </div>
  );
}

export default AIChatPage;