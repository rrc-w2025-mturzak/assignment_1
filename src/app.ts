import express, {Express} from "express";

import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

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

app.get('/api/v1/portfolio/performance', (req, res) => {
  const performance = calculatePortfolioPerformance();

  res.json({
    success: true,
    performance
  });
});

export default app;
