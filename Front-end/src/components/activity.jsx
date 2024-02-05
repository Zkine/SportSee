import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function RenderLineChart(data) {
  let dataMax;
  let dataMin;
  let moyenneweight;
  let dataBase;
  if (data.data !== undefined) {
    data.data.map((el) => {
      if (el.maxweight) {
        dataMax = el.maxweight;
        dataMin = el.miniweight;
        moyenneweight = el.moyenneweight;
      }
    });
  }

  if (dataMax && dataMin && moyenneweight) {
    dataBase = data.data.filter((el) => {
      return el.kg;
    });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="text">
        <h2 className="text__title">Activité quotidienne</h2>
        <div className="text__div">
          <ul className="text__ul">
            <li className="text__li">
              <p className="text__p">Poids (kg)</p>
            </li>
            <li className="text__li">
              <p className="text__p">Calories brûlées (kCal)</p>
            </li>
          </ul>
        </div>
      </div>
      <BarChart
        data={dataBase}
        margin={{ top: 35, bottom: 63, left: 20, right: 20 }}
        barGap={8}
        barSize={7}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontalCoordinatesGenerator={(props) =>
            props.height > 0 && [35, 95, 999999]
          }
        />
        <XAxis dataKey="day" tickSize={20} />

        <YAxis
          dataKey="Kcal"
          yAxisId="left"
          hide={true}
          domain={[0, "dataMax + 10"]}
          axisLine={false}
          type="number"
          includeHidden
        />
        <YAxis
          dataKey="kg"
          orientation="right"
          yAxisId="right"
          axisLine={false}
          tickSize={30}
          tickCount={3}
          ticks={[dataMin, moyenneweight, dataMax]}
          type="number"
          domain={[dataMin, dataMax]}
        />
        <Tooltip />
        <Bar
          dataKey="kg"
          yAxisId="right"
          barSize={7}
          fill="#282D30"
          radius={[25, 25, 0, 0]}
          y={0}
        />
        <Bar
          dataKey="Kcal"
          yAxisId="left"
          barSize={7}
          fill="#E60000"
          radius={[25, 25, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
RenderLineChart.propTypes = {
  height: PropTypes.node,
};
