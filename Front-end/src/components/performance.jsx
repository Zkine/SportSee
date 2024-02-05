import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";
function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 15}
      x={x + (x - cx) / 15}
      style={{ ...rest, fontSize: 12 }}
    >
      {payload.value}
    </Text>
  );
}
export default function Performance(Data) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius={"45"} data={Data.data}>
        <PolarGrid
          stroke="#FFFFFF"
          gridType="polygon"
          radialLines={false}
          polarRadius={[0, 9, 18, 26, 35]}
        />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFFFFF"
          orient="inner"
          tickLine={false}
          tick={(props) => renderPolarAngleAxis(props)}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
