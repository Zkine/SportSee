import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
// import PropTypes from "prop-types";

export default function RenderLineChart(data) {
  return (
    <BarChart width={730} height={250} data={data.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" tickSize={20} />
      <YAxis orientation="right" axisLine={false} tickSize={30} />
      <Tooltip />
      <Bar
        dataKey="kilogram"
        barSize={7}
        fill="#282D30"
        radius={[25, 25, 0, 0]}
      />
      <Bar
        dataKey="calories"
        barSize={7}
        fill="#E60000"
        radius={[25, 25, 0, 0]}
      />
    </BarChart>
  );
}
