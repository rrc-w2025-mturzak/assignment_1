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
    it("should return excellent Performance!", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 10000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Excellent Performance! Your investments are doing great.");
        expect(result?.percentageChange).toBe(900);
    });
});

describe("calculatePortfolioPerformance", () => {
    it("should return modest gain.", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 1001,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.");
        expect(result?.percentageChange).toBe(0.1);
    });
});

describe("calculatePortfolioPerformance", () => {
    it("should return no change", () => {
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
    it("should return signifigant loss.", () => {
        // Arrange
        const portfolio: Portfolio = {
            initialInvestment: 1000,
            currentValue: 1,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: ""
        }

        // Act
        const result = calculatePortfolioPerformance(portfolio);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.performanceSummary).toBe("Signifigant loss. Review your portfolio strategy.");
        expect(result?.percentageChange).toBe(-99.9);
    });
});


