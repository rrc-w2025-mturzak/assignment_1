
import { calculatePortfolioPerformance, Portfolio } from "../src/portfolio/portfolioPerformance";

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
