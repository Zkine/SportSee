import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

export default function score(Data) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="div_score">
        <h2 className="div_score__title">Score</h2>
      </div>
      <PieChart>
        <Pie
          data={Data.data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={100}
          startAngle={90}
        >
          {Data.data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === "score" ? "#FF0000" : "#FBFBFB"}
              cornerRadius={10}
            />
          ))}
        </Pie>
        <text
          className="div_score__pourcent"
          x="50%"
          y="40%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {Data.data[0].value}%
        </text>
        <text
          className="div_score__text"
          x="50%"
          y="55%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          de votre
        </text>
        <text
          className="div_score__text"
          x="50%"
          y="65%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          objectif
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}
