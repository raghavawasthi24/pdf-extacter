
import { Card, CardContent } from "../components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export default function ReportsData({ data }: { data: any }) {
    const [trends, setTrends] = useState<any[]>(data.trends);


    return (
        <div>
            {data.parameters.length > 0 && (
                <Card className="">
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-2">
                            Extracted Health Parameters
                        </h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="border p-2">Parameter</th>
                                    <th className="border p-2">Value</th>
                                    <th className="border p-2">Unit</th>
                                    <th className="border p-2">Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.parameters.map((param, idx) => (
                                    <tr key={idx}>
                                        <td className="border p-2">
                                            {param.parameter}
                                        </td>
                                        <td className="border p-2">
                                            {param.value}
                                        </td>
                                        <td className="border p-2">
                                            {param.unit}
                                        </td>
                                        <td className="border p-2">
                                            {param.referenceRange}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            )}

            {trends.length > 0 && (
                <Card className="mt-6">
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-2">
                            Simple Trends
                        </h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={trends}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid stroke="#eee" />
                                <Line
                                    type="monotone"
                                    dataKey="Hemoglobin"
                                    stroke="#8884d8"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="Cholesterol"
                                    stroke="#82ca9d"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}