# 📊 Crypto Market Analysis — EDA of Bitcoin & Major Altcoins

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![yfinance](https://img.shields.io/badge/yfinance-Live%20Data-brightgreen?style=for-the-badge)

**Exploratory Data Analysis of BTC, ETH, SOL, BNB — 2020 to 2024**

*Covering: Bull Run · COVID Crash · LUNA Collapse · FTX Collapse · ETF Approval*

---

## 🚀 Overview

This project performs a comprehensive **Exploratory Data Analysis (EDA)** on historical OHLCV data for the four largest cryptocurrencies by market cap. The analysis covers the full market cycle from 2020 to 2024:

- 🦠 COVID crash & recovery (Mar 2020)
- 🚀 2021 bull run (BTC ATH ~$69K, ETH ATH ~$4,800)
- 💥 2022 bear market (LUNA collapse, FTX collapse)
- 📈 2023 recovery
- 🏦 2024 bull market (BTC Spot ETF approval & halving)

This EDA directly informs the design of an **OKX Futures trading bot** powered by a **Genetic Algorithm optimizer**.

---

## 📁 Project Structure
```
Crypto Market Analysis/
├── crypto_eda.ipynb       # Main Jupyter Notebook (full analysis)
├── README.md
└── charts/                # Auto-generated when notebook is executed
    ├── 01_price_history.png
    ├── 02_correlation.png
    ├── 03_volatility.png
    ├── 04_technical_indicators.png
    ├── 05_return_distribution.png
    ├── 06_cumulative_returns.png
    ├── 07_market_regime.png
    ├── 08_volume_analysis.png
    ├── 09_monthly_heatmap.png
    └── 10_drawdown_risk_return.png
```

---

## 📊 Analysis Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | 📈 Price History | Log-scale with annotated key events (COVID, ATH, LUNA, FTX, ETF) |
| 2 | 🔗 Correlation | Static heatmap + rolling 90-day correlation |
| 3 | 📉 Volatility | Rolling 30-day annualized volatility, clustering effect |
| 4 | 🛠️ Technical Indicators | MA20/50/200, Bollinger Bands, RSI(14), MACD |
| 5 | 📊 Return Distribution | Fat tails, KDE vs normal, kurtosis, VaR 95%, Sharpe ratio |
| 6 | 💰 Cumulative Returns | $10K portfolio simulation + annual returns per year |
| 7 | 🎯 Market Regime | Bull/Bear/Sideways via Golden Cross / Death Cross |
| 8 | 📦 Volume Analysis | Price+volume overlay, monthly volume trends, OBV |
| 9 | 🗓️ Monthly Heatmap | Seasonal patterns per month (Uptober, Sell in May) |
| 10 | 📉 Drawdown & Risk-Return | Max drawdown history + Sharpe ratio scatter plot |

---

## 🔑 Key Insights

| Insight | Trading Bot Implication |
|---------|------------------------|
| High cross-crypto correlation (0.7–0.9) | Limit total crypto portfolio exposure |
| Fat-tailed returns (kurtosis >10) | Use volatility-adjusted position sizing |
| Volatility clustering (GARCH effect) | ATR-based dynamic position sizing |
| Bull regime returns 3x higher | Add regime filter to GA optimizer |
| OBV divergence precedes reversals | Use as trade confirmation signal |
| "Uptober" seasonal bias | Calendar-based allocation adjustment |
| "Sell in May" pattern | Reduce exposure during May |
| MA200 = key support/resistance level | Reference for stop-loss and entries |
| SOL = 2–3x beta of BTC | Adjust leverage accordingly for SOL |
| RSI <30 = asymmetric risk/reward | Oversold zone offers limited-risk long entries |

---

## 🛠️ Tech Stack

| Library | Purpose |
|---------|---------|
| `yfinance` | Download real historical OHLCV data |
| `pandas` | Data manipulation and analysis |
| `numpy` | Numerical computing |
| `matplotlib` | Chart visualizations |
| `seaborn` | Statistical heatmaps |
| `scipy` | Statistical tests & KDE |

---

## 🚀 Quick Start
```bash
# 1. Clone the repo
git clone https://github.com/roybeey0/crypto-eda
cd crypto-eda

# 2. Install dependencies
pip install yfinance pandas numpy matplotlib seaborn scipy jupyter

# 3. Launch the notebook
jupyter notebook crypto_eda.ipynb

# 4. Run all cells
# Kernel → Restart & Run All
```

> ⚠️ Make sure you have an active internet connection — the notebook will automatically download real market data from Yahoo Finance.

---

## 🔗 Related Projects

- **OKX Futures Trading Bot** — Automated trading using signals derived from this EDA
- **Genetic Algorithm Optimizer** — Evolves strategy parameters using historical fitness scoring
- **Portfolio:** [roybeey.com](https://roybeey.com)