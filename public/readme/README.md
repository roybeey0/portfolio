# ⚡ OKX Futures Daily Bot

> [!WARNING]
> **⚠️ IMPORTANT DISCLAIMER — READ BEFORE USE**
>
> This bot involves automated trading in cryptocurrency futures markets which carries **significant financial risk**.
>
> - **ALWAYS test in Demo mode first** before switching to Live trading
> - **NEVER trade with money you cannot afford to lose**
> - Past performance in Demo mode does **NOT** guarantee results in Live trading
> - Cryptocurrency markets are highly volatile and unpredictable
> - You are solely responsible for any financial losses incurred
> - The developer assumes **NO liability** for any trading losses
>
> **Start with Demo mode. Observe for at least 1-2 weeks. Only switch to Live when you fully understand the bot's behavior.**

Automated trading bot for OKX Futures using a Multi Timeframe Engine (4H/1H/15M)
with Market Regime Detection and Institutional Risk Framework.
Runs 24/7 on Ubuntu VPS with a realtime terminal dashboard.

---

## 📋 BOT SPECIFICATIONS

| Item      | Detail                                                     |
|-----------|------------------------------------------------------------|
| Exchange  | OKX Futures (Demo & Live)                                  |
| Mode      | Demo Trading (Paper Trading)                               |
| Leverage  | 3x (Fixed)                                                 |
| Pairs     | BTC-USDT, ETH-USDT, BNB-USDT, SOL-USDT, SUI-USDT, XAU-USDT |
| Timeframe | 4H (Trend) / 1H (Setup) / 15M (Trigger)                    |
| Python    | 3.12.0                                                     |

---

## 🔄 SYSTEM FLOW

```
Market Data (4H / 1H / 15M)
            ↓
Market Regime Detection
            ↓
Strategy Engine (active based on regime)
            ↓
Risk Manager
            ↓
Order Execution (OKX API)
```

---

## 🧭 MARKET REGIME ENGINE

The bot automatically detects market conditions before selecting a strategy.
**Only 1 regime is active at any given time.**
Other strategies are disabled when a specific regime is active.
No signal overlap between strategies is allowed.

### TREND MODE → Trend Confirmation Strategy
```
Conditions:
- ADX > 25
- EMA 50 above EMA 200 (bullish) or below EMA 200 (bearish)
- Price above EMA 200 for LONG / below EMA 200 for SHORT

Action:
- Trend Confirmation Strategy activated
- Range Trading & Breakout Volatility deactivated
```

### RANGE MODE → Range Trading Strategy
```
Conditions:
- ADX < 20
- Price moving within the middle Bollinger Band
- No breakout of high/low from the last 20 candles

Action:
- Range Trading Strategy activated
- Trend Confirmation & Breakout Volatility deactivated
- Risk per trade reduced to 0.5%
```

### BREAKOUT MODE → Breakout Volatility Strategy
```
Conditions:
- ATR expansion > 1.5x average ATR
- Volume spike > 150% average volume
- Close above high of last 20 candles (LONG) or below low (SHORT)

Action:
- Breakout Volatility Strategy activated
- Trend Confirmation & Range Trading deactivated
```

### PROTECTION MODE → All Strategies Deactivated
```
Trigger:
- Daily loss >= 3% of balance, OR
- 3 consecutive losses

Action:
- All trading halted automatically
- Bot in monitoring-only mode
- Auto reset at midnight UTC
```

---

## 🧠 TRADING STRATEGIES

### Multi Timeframe Flow
```
STEP 1 → 4H  : Detect regime + trend direction
STEP 2 → 1H  : Validate setup aligned with 4H
STEP 3 → 15M : Confirm entry trigger
Rule         : If 4H and 1H are not aligned → NO TRADE
```

### Strategy 1 — Trend Confirmation
```
Indicators : EMA 50, EMA 200, RSI 14, Volume MA, ATR
LONG       : EMA50 > EMA200 | Pullback to EMA50 | RSI 45-65 | Valid volume
SHORT      : EMA50 < EMA200 | Pullback to EMA50 | RSI 35-55 | Valid volume
Risk       : 1% balance | RR 1:2 | Max 3 trades/day
```

### Strategy 2 — Breakout Volatility
```
Indicators : Donchian Channel 20, ATR Expansion, Volume Spike
LONG       : Breakout DC Upper + ATR expanding + Volume spike
SHORT      : Breakout DC Lower + ATR expanding + Volume spike
Risk       : 1% balance | RR 1:2
```

### Strategy 3 — Range Trading
```
Indicators : Bollinger Bands (20,2), RSI 14, ADX
LONG       : Price <= BB Lower | RSI < 35 | ADX < 20
SHORT      : Price >= BB Upper | RSI > 65 | ADX < 20
Risk       : 0.5% balance | RR 1:2
```

### Strategy 4 — Protection Mode
```
Trigger    : Daily loss >= 3% OR 3 consecutive losses
Action     : Stop all trading, monitoring only
Reset      : Automatically at midnight UTC
```

---

## 🏦 INSTITUTIONAL RISK FRAMEWORK

### Position Sizing Formula
```
position_size = (balance × risk%) / stop_loss_distance

Example:
  balance            = 10,000 USDT
  risk%              = 1%  →  risk amount = 100 USDT
  ATR                = 150 USDT
  stop_loss_distance = 1.5 × ATR = 225 USDT
  ─────────────────────────────────────────────
  position_size = 100 / 225 = 0.444 units
```

`stop_loss_distance` is always calculated based on **ATR × multiplier**,
so position size automatically adjusts to current market volatility.

### Risk Parameters
```
Max risk per trade          : 1.0% balance  (Trend & Breakout)
Max risk per trade sideways : 0.5% balance  (Range)
Max total exposure          : 30% balance
Max open positions per pair : 1 position
Max daily drawdown          : 3% balance
Risk Reward Ratio           : 1:2
Leverage                    : 3x (fixed)
Max trades per day          : 3
```

### Drawdown Protection
```
If daily drawdown >= 3%
  → Bot enters PROTECTION MODE
  → All new entries halted
  → Reset: midnight UTC
  → Logged in: logs/bot_error.log
```

### Trailing Stop Loss
```
Activates automatically after profit >= 1x ATR

LONG  : SL moves up following price  (never moves down)
SHORT : SL moves down following price (never moves up)

Trail distance = ATR × 1.5
```

---

## 🛡️ EXECUTION SAFETY RULES

```
✅ OCO Order mandatory     — SL + TP always sent together
✅ Rate limit protection   — 200ms minimum delay between requests
✅ Auto retry on 429       — waits 2s / 4s / 6s on rate limit
✅ Leverage cache          — set leverage only 1x per pair
✅ Hedge mode              — Long & Short can run simultaneously
✅ 4H candle boundary      — avoid entry 5 min before/after 4H candle close
✅ Timeframe alignment     — no entry if 4H and 1H are not aligned
✅ Contract size converter — auto convert size to OKX contract format
✅ Max 3 retries per fetch — skip pair after 3 consecutive failures
```

---

## ✨ FULL FEATURE LIST

```
✅ Multi Timeframe Engine (4H/1H/15M)
✅ Automatic Market Regime Detection (Trend/Range/Breakout)
✅ 4 Strategies with regime isolation
✅ Institutional Risk Framework
✅ Execution Safety Rules
✅ Trade Journal CSV — open in Excel
✅ Realtime Balance Sync every 30 seconds
✅ Automatic Trailing Stop Loss
✅ Auto Restart on crash (max 5x retry)
✅ Realtime WebSocket Public + Private feed
✅ Auto reconnect WebSocket
✅ Daily reset at midnight UTC
✅ Realtime terminal dashboard (updates every 2 seconds)
✅ [S] Stop Bot safely from dashboard
```

---

## 📁 PROJECT STRUCTURE

```
trading_bot/
├── .env
├── .env.example
├── .gitignore
├── requirements.txt
├── README.md
├── main.py
├── config/
│   ├── __init__.py
│   └── settings.py
├── core/
│   ├── __init__.py
│   ├── bot.py
│   ├── market_state.py
│   ├── risk_manager.py
│   ├── data_fetcher.py
│   ├── strategy_engine.py
│   ├── trade_journal.py
│   └── restart_handler.py
├── exchange/
│   ├── __init__.py
│   ├── okx_client.py
│   └── websocket_feed.py
├── strategies/
│   ├── __init__.py
│   ├── base_strategy.py
│   ├── trend_confirmation.py
│   ├── breakout_volatility.py
│   ├── range_trading.py
│   └── protection_mode.py
├── indicators/
│   ├── __init__.py
│   └── calculator.py
├── dashboard/
│   ├── __init__.py
│   ├── app.py
│   └── widgets.py
├── models/
│   ├── __init__.py
│   ├── trade.py
│   └── position.py
├── utils/
│   ├── __init__.py
│   └── logger.py
└── logs/
    ├── bot.log
    ├── bot_error.log
    ├── trade_journal.csv
    └── crash.log
```

---

## ⚙️ LOCAL SETUP (Windows)

### 1. Install Python 3.12
Download from https://python.org/downloads

### 2. Navigate to project folder
```cmd
cd C:\Users\<username>\Desktop\trading_bot
```

### 3. Install dependencies
```cmd
pip install -r requirements.txt
```

### 4. Setup .env
```env
OKX_API_KEY=your_api_key_here
OKX_SECRET_KEY=your_secret_key_here
OKX_PASSPHRASE=your_passphrase_here
OKX_MODE=demo
TRADING_PAIRS=BTC-USDT,ETH-USDT,BNB-USDT,SOL-USDT,SUI-USDT,XAU-USDT
LEVERAGE=3
TF_TREND=4H
TF_SETUP=1H
TF_TRIGGER=15m
LOG_LEVEL=INFO
LOG_FILE=logs/bot.log
```

### 5. Run & Stop
```cmd
python main.py    ← start bot
Press S           ← stop bot from dashboard
```

---

## 🖥️ VPS UBUNTU SETUP (24/7)

### Recommended Specifications
```
OS      : Ubuntu 20.04 / 22.04 / 24.04 LTS
CPU     : 1 vCPU
RAM     : 1 GB
Storage : 20 GB SSD
Traffic : Unlimited
```

### Recommended VPS Providers
```
- DigitalOcean  : $6/month (1GB RAM)
- Vultr         : $6/month (1GB RAM)
- Contabo       : $7/month (4GB RAM) ← best value
- AWS EC2       : t3.micro (free tier 1 year)
- Google Cloud  : e2-micro (free tier)
```

### STEP 1 — Access VPS
```bash
ssh root@<VPS_IP>
```

### STEP 2 — Update System
```bash
apt update && apt upgrade -y
```

### STEP 3 — Install Python 3.12
```bash
apt install -y software-properties-common
add-apt-repository ppa:deadsnakes/ppa -y
apt update
apt install -y python3.12 python3.12-dev python3-pip
curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12
python3.12 --version
```

> Python 3.10 that already exists **do not remove** — used by Ubuntu system.
> The bot uses `python3.12` separately.

### STEP 4 — Install System Tools
```bash
apt install -y git curl wget tmux nano htop \
    build-essential libssl-dev libffi-dev
```

### STEP 5 — Upload Project from Windows
```cmd
scp -r C:\Users\<username>\Desktop\trading_bot root@<VPS_IP>:/root/
```

### STEP 6 — Install Python Libraries
```bash
cd /root/trading_bot
python3.12 -m pip install -r requirements.txt
```

If error, install one by one:
```bash
python3.12 -m pip install okx==2.1.2
python3.12 -m pip install pandas==2.3.2
python3.12 -m pip install numpy==2.2.6
python3.12 -m pip install ta==0.11.0
python3.12 -m pip install python-dotenv==1.0.1
python3.12 -m pip install rich==13.7.1
python3.12 -m pip install textual==0.61.1
python3.12 -m pip install websockets==12.0
python3.12 -m pip install httpx==0.27.0
python3.12 -m pip install loguru==0.7.2
```

### STEP 7 — Create Logs Folder
```bash
mkdir -p /root/trading_bot/logs
```

### STEP 8 — Setup .env
```bash
nano /root/trading_bot/.env
# Save: Ctrl+X → Y → Enter
```

### STEP 9 — Test Run
```bash
cd /root/trading_bot
python3.12 main.py
```

Expected output:
```
[OKX] Position mode set: long_short_mode ✓
[OKX] Balance fetched: XXXXX USDT
[BOT] Bot is now running.
[WS] Public feed connected.
[WS] Private feed connected.
[WS] Private login successful.
```

---

## 🚀 RUNNING ON VPS

### ✅ OPTION 1 — TMUX (Recommended)

Tmux keeps the bot running even when the terminal is closed or SSH disconnects.
You can reconnect at any time and see the live dashboard.

**Create Bot Session:**
```bash
apt install -y tmux

tmux new -s trading_bot
cd /root/trading_bot
python3.12 main.py
# Dashboard appears
# Detach (bot keeps running): Ctrl+B then D
```

**Create Separate Monitor Sessions:**
```bash
# Monitor all logs
tmux new -s monitor
tail -f /root/trading_bot/logs/bot.log
Ctrl+B then D

# Monitor errors only
tmux new -s bot-error
tail -f /root/trading_bot/logs/bot_error.log
Ctrl+B then D

# Monitor crashes
tmux new -s crash-logs
tail -f /root/trading_bot/logs/crash.log
Ctrl+B then D
```

**Check All Active Sessions:**
```bash
tmux ls
# Output:
# bot-error   : 1 windows (created Mon Mar  2 11:53:23 2026)
# crash-logs  : 1 windows (created Mon Mar  2 11:54:59 2026)
# monitor     : 1 windows (created Mon Mar  2 11:50:38 2026)
# trading_bot : 1 windows (created Mon Mar  2 11:44:39 2026)
```

**Session Commands:**
```bash
tmux attach -t trading_bot    # View bot dashboard
tmux attach -t monitor        # View all logs
tmux attach -t bot-error      # View errors only
tmux attach -t crash-logs     # View crash history
tmux kill-session -t <name>   # Delete session
# Ctrl+B then D               # Detach from session
```

---

### OPTION 2 — SYSTEMD (Background Service)

Suitable if you don't need the dashboard, monitoring via logs only.

**Setup:**
```bash
nano /etc/systemd/system/trading-bot.service
```

```ini
[Unit]
Description=OKX Futures Trading Bot
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/trading_bot
ExecStart=/usr/bin/python3.12 main.py
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable trading-bot
systemctl start trading-bot
systemctl status trading-bot
```

**Commands:**
```bash
systemctl start trading-bot      # Start
systemctl stop trading-bot       # Stop
systemctl restart trading-bot    # Restart
systemctl status trading-bot     # Check status
journalctl -u trading-bot -f     # Realtime log
```

---

## 🔐 PROFESSIONAL DEPLOYMENT SECURITY

### Use a Dedicated User (Not Root)
```bash
adduser tradingbot
usermod -aG sudo tradingbot
cp -r /root/trading_bot /home/tradingbot/
chown -R tradingbot:tradingbot /home/tradingbot/trading_bot
su - tradingbot
```

### Restrict Permissions
```bash
chmod 600 /home/tradingbot/trading_bot/.env
chmod 750 /home/tradingbot/trading_bot/logs
```

### Install Fail2Ban (SSH Brute Force Protection)
```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

### Security Checklist
```
✅ Use dedicated user, not root
✅ Store API Key in .env, never in code
✅ Set IP Whitelist in OKX API settings
✅ API Permission: Read + Trade only (no Withdraw)
✅ Add .env to .gitignore before pushing to Git
✅ Use SSH Key instead of password for VPS access
✅ Enable fail2ban for SSH protection
✅ Rotate OKX passphrase periodically
```

---

## 📊 LOG MONITORING

| File                     | Content                           |
|--------------------------|-----------------------------------|
| `logs/bot.log`           | All logs INFO + ERROR             |
| `logs/bot_error.log`     | ERROR only — check daily          |
| `logs/crash.log`         | Crash history + retry count       | 
| `logs/trade_journal.csv` | All trade history — open in Excel |

```bash
# Windows
powershell Get-Content logs\bot.log -Tail 50
powershell Get-Content logs\bot_error.log -Tail 50

# Linux VPS
tail -f logs/bot.log
tail -f logs/bot_error.log
tail -f logs/crash.log
cat logs/trade_journal.csv
```

---

## 🔄 AUTO RESTART BEHAVIOR

```
Bot crash / unexpected error
  ↓
record_crash() → logged to logs/crash.log
  ↓
Wait: 10s → 20s → 30s → 40s → 50s (max 120s)
  ↓
Auto restart with fresh state
  ↓
Stable for 5 minutes → retry count reset to 0

5 consecutive crashes → PERMANENT STOP
```

| Event                     | Result --------|
|---------------------------|----------------|
| Press **S** in dashboard  | PERMANENT STOP |
| **Ctrl+C** in terminal    | PERMANENT STOP |
| **systemctl stop**        | PERMANENT STOP |
| **Bot crash / error**     | AUTO RESTART   |
| **5 consecutive crashes** | PERMANENT STOP |
| **WebSocket disconnect**  | AUTO RECONNECT |

---

## 📈 TRAILING STOP LOSS

```
Entry LONG  @ 2400 | ATR = 100 | Trail dist = 150

Price rises to 2550 → profit >= 1 ATR
New SL = 2550 - 150 = 2400 ← SL moves up (lock breakeven)

Price rises to 2700
New SL = 2700 - 150 = 2550 ← SL moves up again (lock profit)

Price drops to 2549 → SL 2550 hit → CLOSE with profit
```

---

## ⚠️ TROUBLESHOOTING

| Error                        | Cause                     | Solution                          |
|------------------------------|---------------------------|-----------------------------------|
| 401 Unauthorized             | Wrong API Key             | Check .env                        |
| code=1 All operations failed | Invalid order payload     | Check bot.log detail              |
| code=51000 posSide error     | Position mode not set     | Bot sets it on startup            |
| code=59000 Position mode     | Hedge mode already active | Normal, continues automatically   |
| 429 Too Many Requests        | OKX rate limit            | Auto retry active                 |
| WebSocket disconnected       | Connection fluctuation    | Auto reconnect active             |
| Bot not entering trades      | 3 TF signal not confirmed | Normal, wait for valid conditions |
| S key not working            | Terminal not in focus     | Click the terminal window first   |

---

## 📌 IMPORTANT NOTES

```
1. Bot uses DEMO mode by default
2. For live trading: change OKX_MODE=live in .env
3. Ensure sufficient balance before switching to live
4. Check bot_error.log and crash.log daily
5. Review trade_journal.csv for performance analysis
6. Daily statistics reset automatically at midnight UTC
7. Maximum 3 trades per day per risk management rules
8. Trailing SL activates automatically after profit >= 1x ATR
9. Bot will not enter if 4H and 1H are not confirmed aligned
10. OKX Demo prices differ from live market — this is normal
```

---

## 📞 QUICK REFERENCE

```bash
# ── WINDOWS ──────────────────────────────────────
python main.py                         # Start bot
# Press S in dashboard                 # Stop bot

# ── TMUX (Recommended for VPS) ───────────────────
tmux new -s trading_bot                # Create bot session
tmux attach -t trading_bot             # View dashboard
tmux attach -t monitor                 # View all logs
tmux attach -t bot-error               # View errors
tmux attach -t crash-logs              # View crashes
tmux ls                                # List all sessions
# Ctrl+B then D                        # Detach (bot keeps running)

# ── SYSTEMD (Background) ─────────────────────────
systemctl start trading-bot            # Start
systemctl stop trading-bot             # Stop
systemctl restart trading-bot          # Restart
systemctl status trading-bot           # Status
journalctl -u trading-bot -f           # Realtime log

# ── LOG FILES ────────────────────────────────────
tail -f logs/bot.log                   # Monitor all logs
tail -f logs/bot_error.log             # Monitor errors
tail -f logs/crash.log                 # Monitor crashes
cat logs/trade_journal.csv             # Trade history
```

---

## 📄 LICENSE

This project is for personal and educational use.
Do not share API keys or trade with funds you cannot afford to lose.
Always test in Demo mode before switching to Live trading.
```