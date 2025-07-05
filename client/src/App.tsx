// Save as frontend/src/App.tsx
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { Button } from "./components/ui/button";

interface HealthParam {
    parameter: string;
    value: string;
    unit: string;
    referenceRange: string;
}

function App() {
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<HealthParam[]>([]);
    const [trends, setTrends] = useState<any[]>([]);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("report", file);

        const response = await fetch("http://localhost:5001/upload", {
            method: "POST",
            body: formData,
        });

        const json = await response.json();
        setData(json.parameters);
        setTrends(json.trends);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Lab Report Analyzer</h1>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Button className="mt-2" onClick={handleUpload}>
                Upload & Analyze
            </Button>

            {data.length > 0 && (
                <Card className="mt-6">
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
                                {data.map((param, idx) => (
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

export default App;
