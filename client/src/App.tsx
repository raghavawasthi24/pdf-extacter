import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import PdfExtract from "./pages/pdfInput";
import { useState } from "react";
import ReportsData from "./pages/reportDashboard";

const App = () => {
    const [reportsData, setReportsData] = useState(null);
    return (
        <BrowserRouter>
            <main className="flex w-screen h-screen">
                <Sidebar />
                <section className="overflow-y-auto h-full flex-1 p-4">
                    <Routes>
                        <Route
                            path="/"
                            element={<PdfExtract setData={setReportsData} />}
                        />
                        <Route
                            path="/reports"
                            element={<ReportsData data={reportsData} />}
                        />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default App;
