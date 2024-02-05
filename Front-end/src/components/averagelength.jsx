import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function AverageLength(Data) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="length">
        <h2 className="length__title">Durée moyenne des sessions</h2>
      </div>
      <LineChart
        width="100%"
        height="100%"
        data={Data.data}
        margin={{ top: 50, bottom: 16, left: 16, right: 16 }}
      >
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin-10", "dataMax+10"]}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          strokeWidth={2}
          dot={false}
        />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="80%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
}
