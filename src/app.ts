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


app.get("/api/v1/portfolio/performance", (req, res) => {
    const healthData: Portfolio = {
        initialInvestment: 1000,
        currentValue: 1000,
        profitOrLoss: 1000,
        percentageChange: 1000,
        performanceSummary: "hi",
    };
    res.json(healthData);
});

export default app;
