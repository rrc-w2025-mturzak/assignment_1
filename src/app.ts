import express, {Express} from "express";

// import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

import { Portfolio } from "./portfolio/portfolioPerformance";

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});


// app.get("/api/v1/portfolio/performance", (req, res) => {
//     const healthData: Portfolio = {
//         initialInvestment: req.query,
//         currentValue: 1000,
//         profitOrLoss: 1000,
//         percentageChange: 1000,
//         performanceSummary: "hi",
//     };
//     res.json(healthData);
// });

app.get("/api/v1/portfolio/performance", (req, res) => {

    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue)

    if (!initialInvestment || isNaN(initialInvestment)) {
        return res.status(400).json({
            error: "initialInvestment query parameter is required and must be a number"
        });
    }

    if (!currentValue || isNaN(currentValue)) {
        return res.status(400).json({
            error: "currentValue query is required and must be a number"
        });
    }

    const healthData: Portfolio = {
        initialInvestment,
        currentValue,
        profitOrLoss: 1000 - initialInvestment,
        percentageChange: ((1000 - initialInvestment) / initialInvestment) * 100,
        performanceSummary: "hi",
    };

    res.json(healthData);
});


export default app;
