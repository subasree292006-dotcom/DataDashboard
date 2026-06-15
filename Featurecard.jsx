function Featurecard(){
    const features=[
        {
         
            icon:"📊",
            title: "CSV Upload & Parsing",
      desc: "Drag-and-drop any CSV file. Our parser handles millions of rows instantly."

        },
        {
            icon:"🤖",
            title: "AI Chat with Data",
      desc: "Converse naturally with your data. Ask follow-up questions and get contextual answers in seconds."

        },
{
    icon:"🔍",
    title:"Natural Language Query",
    desc:"No SQL needed. Type questions in plain English and watch instant results appear."
},
{
    icon:"📈",
    title:"Auto Chart Generation",
    desc:"AI selects the best chart type for your query. Export as PNG, SVG, or embed anywhere."

},
{
    icon:"⚡",
    title:"Real-time Analytics",
    desc:"Live streaming data connections with sub-100ms refresh rates and smart caching."
},

{
    icon:"🔮",
    title:"Predictive Insights",
    desc:"ML-powered forecasting surface hidden trends and anomalies before they impact business."
},

    ];
    return (
    <div className="grid grid-cols-2 gap-8 p-[40px]">
      {features.map((item, index) => (
        <div
          key={index} 
          className="bg-[#0b1023 border border-[#1E2A5A] rounded-[20px]
          p-[30px] text-white shadow-[0 0 10px rgba(0,0,0,0.3) gap-8">
         
          <div className="text-[40px]" >
            {item.icon}
          </div>

          <h2 className="mt-[20px] text-[#89adfc] text-[25px]">
            {item.title}
          </h2>

          <p className="text-[ #b9bdc4] leading-7 text-[17px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
 );
}
export default Featurecard;