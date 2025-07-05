// Save as backend/index.js
const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const Tesseract = require("tesseract.js");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
const upload = multer({ dest: "uploads/" });

const dummyParameters = [
    {
        parameter: "Hemoglobin",
        value: "13.5",
        unit: "g/dL",
        referenceRange: "13.0-17.0",
    },
    {
        parameter: "Cholesterol",
        value: "180",
        unit: "mg/dL",
        referenceRange: "<200",
    },
    {
        parameter: "Blood Sugar",
        value: "95",
        unit: "mg/dL",
        referenceRange: "70-99",
    },
];

const dummyTrends = [
    { date: "Jan", Hemoglobin: 13.1, Cholesterol: 190 },
    { date: "Feb", Hemoglobin: 13.4, Cholesterol: 185 },
    { date: "Mar", Hemoglobin: 13.5, Cholesterol: 180 },
    { date: "Apr", Hemoglobin: 13.6, Cholesterol: 178 },
];

app.post("/upload", upload.single("report"), async (req, res) => {
    console.log("comign");
    const filePath = req.file.path;

    try {
        let extractedText = "";

        if (req.file.mimetype === "application/pdf") {
            const dataBuffer = fs.readFileSync(filePath);
            const pdfData = await pdfParse(dataBuffer);
            extractedText = pdfData.text;
        } else {
            const {
                data: { text },
            } = await Tesseract.recognize(filePath, "eng");
            extractedText = text;
        }

        // Simulate parameter extraction from text
        console.log(
            "Extracted text (truncated):",
            extractedText.substring(0, 500)
        );

        res.json({
            parameters: dummyParameters,
            trends: dummyTrends,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process file" });
    } finally {
        fs.unlinkSync(filePath); // Cleanup
    }
});

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(5001, () => {
    console.log("Server running on port 5000");
});
