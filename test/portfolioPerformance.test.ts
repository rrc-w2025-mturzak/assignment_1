import { calculatePortfolioPerformance, Portfolio } from "../src/portfolio/portfolioPerformance";
import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/portfolio/performance", () => {
    it("should return portfolio response", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/performance").query({ initialInvestment: 1000, currentValue: 1000 });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("initialInvestment", 1000);
        expect(response.body).toHaveProperty("currentValue", 1000);
        expect(response.body).toHaveProperty("profitOrLoss"), 0;
        expect(response.body).toHaveProperty("percentageChange", 0);
        expect(response.body).toHaveProperty("performanceSummary", "No Change. Your portfolio is holding steady.");
    });
});

describe("calculatePortfolioPerformance", () => {
    it("it should return excellent Performance!", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 10000,
            currentValue: 14000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Excellent Performance! Your investments are doing great.");
        expect(result?.profitOrLoss).toBe(4000);
        expect(result?.percentageChange).toBe(40);
    });
});

describe("calculatePortfolioPerformance", () => {
    it("it should return modest gain.", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 1250,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Solid gain. Keep monitoring your investments.");
        expect(result?.profitOrLoss).toBe(250);
        expect(result?.percentageChange).toBe(25);
    });
});

describe("calculatePortfolioPerformance", () => {
    it("it should return no change", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 1000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("No Change. Your portfolio is holding steady.");
        expect(result?.percentageChange).toBe(0);
    });
});

describe("calculatePortfolioPerformance", () => {
    it("it should return signifigant loss.", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 850,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Signifigant loss. Review your portfolio strategy.");
        expect(result?.profitOrLoss).toBe(-150);
        expect(result?.percentageChange).toBe(-15);
    });
});


