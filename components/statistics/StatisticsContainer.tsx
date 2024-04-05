import type { StatisticsQueryData } from "@components/types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data?: StatisticsQueryData;
  isLoading: boolean;
  isError: boolean;
};

export function StatisticsContainer({ data = [] }: Props) {
  const router = useRouter();

  return (
    <Stack spacing={2}>
      {data.map((item: StatisticsQueryData["item"]) => (
        <Paper key={item.name} sx={{ height: 330, padding: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack justifyContent="space-between">
              <Stack>
                <Typography fontSize={18} variant="h6">
                  Chromosome {item.name} statistics
                </Typography>
                <br />
                <Typography fontSize={16} variant="caption">
                  Ref_seq: {item.ref_seq}
                </Typography>
                <Typography fontSize={16} variant="caption">
                  Length: {item.length}
                </Typography>
                <Typography fontSize={16} variant="caption">
                  GC Skew: {item.gc.skew.toFixed(10)}
                </Typography>
                <Typography fontSize={16} variant="caption">
                  GC Content: {item.gc.content.toFixed(10)}
                </Typography>
              </Stack>

              <Button
                variant="text"
                onClick={() =>
                  router.push({
                    pathname: "/sequence",
                    query: { chromosome: item.name, length: item.length },
                  })
                }
              >
                Analyze
              </Button>
            </Stack>

            <BarChart
              width={500}
              height={300}
              data={Object.entries(item.g4_frequency).map(([name, value]) => ({
                name,
                ["PQS frequency"]: value,
              }))}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label
                  value={"G4 Threshold"}
                  position="insideBottomRight"
                  offset={-10}
                />
              </XAxis>
              <YAxis
                label={{
                  value: "PQS frequency",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="PQS frequency"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>

            <BarChart
              width={500}
              height={300}
              data={Object.entries(item.g4_threshold_count).map(
                ([name, value]) => ({
                  name,
                  ["PQS threshold count"]: value,
                })
              )}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label
                  value={"G4 Threshold"}
                  position="insideBottomRight"
                  offset={-10}
                />
              </XAxis>
              <YAxis
                label={{
                  value: "PQS threshold",
                  angle: -90,
                  position: "insideLeft",
                  offset: -12,
                }}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="PQS threshold count"
                fill="#8884d8"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
