export interface Portfolio {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(portfolio: Portfolio): any {
    let initialInvestment = portfolio.initialInvestment;
    let currentValue = portfolio.currentValue;

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    switch (true) {
        case percentageChange >= 30:
            performanceSummary = "Excellent Performance! Your investments are doing great."
            break

        case percentageChange >= 10:
            performanceSummary = "Solid gain. Keep monitoring your investments."
            break

        case percentageChange > 0:
            performanceSummary = "Modest gain. Your portfolio is growing slowly."
            break

        case percentageChange == 0:
            performanceSummary = "No Change. Your portfolio is holding steady."
            break

        case percentageChange < 0 && percentageChange >= -10:
            performanceSummary = "Minor loss. Stay calm and review your options."
            break

        case percentageChange < -10:
            performanceSummary = "Signifigant loss. Review your portfolio strategy."
            break

    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}