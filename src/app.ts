import express, {Express} from "express";

import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

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

    const result = calculatePortfolioPerformance({
        initialInvestment,
        currentValue,
        profitOrLoss: 0,
        percentageChange: 0,
        performanceSummary: "",
    });

    const portfolioData: Portfolio = {
        initialInvestment,
        currentValue,
        profitOrLoss: result.profitOrLoss,
        percentageChange: result.percentageChange,
        performanceSummary: result.performanceSummary,
    };

    res.json(portfolioData);
});


export default app;
