# 🔗 Python Blockchain Implementation + Wallet Analytics

> **Portfolio Project** · Roybeey · UBAYA Data Science & AI · [roybeey.com](https://roybeey.com)

![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat-square&logo=python)
![Blockchain](https://img.shields.io/badge/Blockchain-From%20Scratch-orange?style=flat-square)
![Etherscan](https://img.shields.io/badge/API-Etherscan-purple?style=flat-square)
![Pandas](https://img.shields.io/badge/Pandas-2.0-green?style=flat-square&logo=pandas)
![Matplotlib](https://img.shields.io/badge/Matplotlib-3.7-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## 📌 Overview

A two-part project demonstrating blockchain fundamentals **from scratch** and real-world **on-chain data analytics** using the Etherscan API.
  
This project is part of a crypto/blockchain portfolio that includes a trading bot (OKX), CodeT5 code generator, Genetic Algorithm optimizer, and Crypto Market EDA.

---

## 📁 Project Structure

```
python-blockchain-analytics/
├── part1_blockchain/
│   ├── blockchain.py          # Core blockchain engine
│   └── demo.py                # Interactive CLI demo (10 steps)
│
├── part2_analytics/
│   ├── wallet_analytics.py    # Etherscan API + analytics engine
│   └── output_charts/         # Generated visualizations
│       ├── viz1_dashboard.png
│       ├── viz2_activity_heatmap.png
│       ├── viz3_gas_analysis.png
│       ├── viz4_top_counterparties.png
│       └── viz5_flow_balance.png
│
├── requirements.txt
└── README.md
```

---

## ⛓️ Part 1 — Blockchain from Scratch

### What's Implemented

| Feature | Description |
|---|---|
| **Block Structure** | index, timestamp, transactions, previous_hash, hash, nonce, merkle_root |
| **SHA-256 Hashing** | Pure `hashlib` — no blockchain libraries |
| **Proof of Work** | Configurable difficulty (default: 4 leading zeros) |
| **Merkle Tree** | Transaction integrity verification |
| **Chain Validation** | Full hash chain + PoW verification |
| **Transaction System** | Sender/recipient/amount/fee + balance tracking |
| **Wallet Generation** | BTC-style address from SHA-256 |
| **Tamper Detection** | Attack simulation + detection demo |

### Quick Start

```bash
cd part1_blockchain
python demo.py
```

### Demo Flow (10 Steps)

1. Initialize blockchain with genesis block
2. Create 5 wallets (Alice, Bob, Charlie, Miner1, Miner2)
3. Fund wallets via coinbase transactions
4. Submit transaction pool (with invalid TX rejection demo)
5. Mine Block #2 with Proof of Work
6. Mine additional blocks
7. Validate full chain integrity
8. Simulate tamper attack → detection via Merkle Root
9. Print blockchain statistics
10. Display full chain ledger

### Example Output

```
Block #  1 | Hash: 000068058b01... | Prev: 060ffd515f51... | TXs:  3 | Nonce:   68,513
Block #  2 | Hash: 00009644292f... | Prev: 000068058b01... | TXs:  5 | Nonce:   70,431
Block #  3 | Hash: 0000cdd88f49... | Prev: 00009644292f... | TXs:  4 | Nonce:    7,146
Block #  4 | Hash: 0000738ec74d... | Prev: 0000cdd88f49... | TXs:  4 | Nonce:    6,090
```

### Key Code Snippets

```python
# Create a blockchain
bc = Blockchain(difficulty=4)

# Create wallets
alice = Wallet("Alice")
bob   = Wallet("Bob")

# Add a transaction
tx = Transaction(alice.address, bob.address, amount=5.0, fee=0.001)
bc.add_transaction(tx)

# Mine the block
bc.mine_pending_transactions(miner_address=alice.address)

# Validate
print(bc.is_chain_valid())  # True
```

---

## 📊 Part 2 — Ethereum Wallet Analytics

### Features

- Fetch real transaction history via **Etherscan API** (free tier)
- Calculate total ETH sent, received, net flow
- Analyze gas fees (total, average, over time)
- Identify most active hours and days
- Rank top counterparty addresses
- **5 production-quality dark-theme visualizations**

### Quick Start

```bash
cd part2_analytics

# Demo mode (no API key needed — uses realistic mock data)
python wallet_analytics.py --demo

# Real mode with Etherscan API
python wallet_analytics.py \
  --address 0xYourEthereumAddress \
  --api-key YOUR_ETHERSCAN_API_KEY \
  --output ./output_charts
```

Get a free Etherscan API key at: [etherscan.io/apis](https://etherscan.io/apis)

### Analytics Output

```
address                : 0x742d35cc...
total_transactions     : 300
successful_txs         : 285
failed_txs             : 15
total_sent_eth         : 179.95 ETH
total_received_eth     : 329.80 ETH
total_gas_fees_eth     : 8.17 ETH
avg_gas_price_gwei     : 99.84
unique_counterparties  : 39
most_active_hour       : 13 (1pm UTC)
most_active_day        : Sunday
```

---

## 📈 Visualizations

### Viz 1 — Analytics Dashboard
![Dashboard](/output_charts/viz1_dashboard.png)
Full wallet overview: 8 KPI cards + monthly volume bars for sent/received ETH.

### Viz 2 — Activity Heatmap
![Activity Heatmap](/output_charts/viz2_activity_heatmap.png)
Transaction frequency by hour-of-day and day-of-week — reveals trading behavior patterns.

### Viz 3 — Gas Analytics
![Gas Analysis](/output_charts/viz3_gas_analysis.png)
4-panel: gas price trend over time, fee distribution histogram, cumulative gas spend, success/fail pie chart.

### Viz 4 — Top Counterparties
![Top Counterparties](/output_charts/viz4_top_counterparties.png)
Horizontal bar chart of most-interacted addresses + bubble chart of volume vs tx count.

### Viz 5 — ETH Flow & Balance
![Flow Balance](/output_charts/viz5_flow_balance.png)
3-panel: running ETH balance, transaction value scatter (log scale), monthly net flow bar chart.

---

## 🛠️ Installation

```bash
git clone https://github.com/roybeey0/python-blockchain-analytics
cd python-blockchain-analytics
pip install -r requirements.txt
```

**requirements.txt:**
```
pandas>=2.0
numpy>=1.24
matplotlib>=3.7
seaborn>=0.12
requests>=2.28
```

---

## 🏗️ Architecture

```
Blockchain Core
├── Transaction     → tx_id, sender, recipient, amount, fee, timestamp
├── Block           → index, txs, prev_hash, hash, nonce, merkle_root
│   └── mine()      → Proof-of-Work loop
└── Blockchain      → chain[], pending_txs[], balances{}
    ├── add_transaction()     → balance validation
    ├── mine_pending_txs()    → PoW + coinbase reward
    ├── is_chain_valid()      → merkle + hash + link + PoW check
    └── get_stats()           → chain analytics

Analytics Engine
├── EtherscanClient    → API wrapper (balance, txlist, internal, tokens)
├── WalletAnalytics    → DataFrame builder + summary + counterparties
└── WalletVisualizer   → 5 dark-theme matplotlib/seaborn charts
```

---

## 💡 Learning Outcomes

- SHA-256 hashing and how it ensures immutability
- How Proof of Work prevents spam and secures consensus
- Merkle trees for transaction integrity verification
- UTXO-inspired balance tracking
- On-chain data analysis with Etherscan API
- Advanced matplotlib/seaborn data visualization

---

## 🔗 Related Portfolio Projects

| Project | Tech | Description |
|---|---|---|
| [Trading Bot OKX](https://roybeey.com) | Python, OKX API | Automated crypto trading strategies |
| [CodeT5 Generator](https://roybeey.com) | PyTorch, HuggingFace | AI code generation model |
| [Genetic Algorithm](https://roybeey.com) | Python, NumPy | Metaheuristic optimizer |
| [Crypto Market EDA](https://roybeey.com) | Pandas, Plotly | Exploratory data analysis |
| **This Project** | Python, Etherscan | Blockchain + wallet analytics |

---

## 👨‍💻 Author

**Roybeey**  
🌐 [roybeey.com](https://roybeey.com)

---

## 📄 License

MIT License — free to use, fork, and build upon.