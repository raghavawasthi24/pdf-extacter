// frontend/src/App.tsx
import { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { UploadCloud } from "lucide-react";

export default function PdfExtract({ setData }: { setData: any }) {
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("report", file);

        const response = await fetch("http://localhost:5001/upload", {
            method: "POST",
            body: formData,
        });

        const json = await response.json();
        setData(json);

        navigate("/reports");
    };

    return (
        <div className="h-full flex items-center justify-center p-4">
            <div className="p-8 w-full max-w-lg">
                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-[#090040] rounded-xl p-6 cursor-pointer hover:bg-indigo-50 transition"
                >
                    <UploadCloud className="w-12 h-12 text-[#090040] mb-2" />
                    <span className="text-[#090040] font-medium">
                        {file
                            ? file.name
                            : "Click to select or drag your PDF here"}
                    </span>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </label>

                <Button
                    className="w-full mt-6 bg-[#090040] hover:bg-[#687FE5]"
                    onClick={handleUpload}
                    disabled={!file}
                >
                    Upload & Analyze
                </Button>
            </div>
        </div>
    );
}
