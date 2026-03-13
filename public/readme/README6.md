# 🔗 Smart Contract Interaction — Web3.py Portfolio Project

<div align="center">

![Python](https://img.shields.io/badge/Python-3.12.0-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Web3.py](https://img.shields.io/badge/Web3.py-6.15.1-F16822?style=for-the-badge&logo=ethereum&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet-627EEA?style=for-the-badge&logo=ethereum&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![No API Key](https://img.shields.io/badge/API_Key-Not_Required-success?style=for-the-badge)

*Read ERC-20 token data, track Transfer events, and visualize on-chain activity — directly from Ethereum Mainnet, no paid API key required.*

</div>

---

## 📸 Sample Output

> Charts below are real results fetched live from Ethereum Mainnet — **1,538 LINK Transfer events** across 1,000 blocks.

| Volume Over Time | Top Senders |
|:---:|:---:|
| ![volume](charts6/link_volume_over_time.png) | ![senders](charts6/link_top_senders.png) |

| Value Distribution | Dashboard |
|:---:|:---:|
| ![dist](charts6/link_value_distribution.png) | ![dashboard](charts6/link_dashboard.png) |

---

## ✨ Features

| Feature | Description |
|---|---|
| 📋 **Token Metadata** | Fetch name, symbol, decimals, and total supply for any ERC-20 |
| 💰 **Balance Checker** | Check any wallet's token balance in human-readable form |
| 📡 **Transfer Events** | Fetch recent `Transfer(from, to, value)` events directly from the chain |
| 📊 **Visualizations** | Auto-generate 5 publication-quality dark-themed charts saved as PNG |
| 🏷️ **Popular Tokens** | USDT, USDC, LINK, UNI pre-configured — just use the ticker |
| 🔓 **No API Key** | Works with free public RPC endpoints — no Infura or Alchemy needed |
| 🖥️ **CLI + Interactive** | Full argument-based CLI, or run without args for an interactive menu |

---

## 🗂️ Project Structure

```
smart-contract-interaction/
├── main.py              # CLI entry point + interactive menu
├── erc20_reader.py      # Web3 interaction layer (token info, balances, events)
├── visualizations.py    # Chart generation with Matplotlib + Seaborn
├── requirements.txt     # Pinned dependencies
├── output_charts/       # Auto-created — PNG charts saved here
└── README.md
```

---

## ⚡ Quick Start

### 1 — Clone & set up environment

```bash
git clone https://github.com/roybeey0/smart-contract-interaction.git
cd smart-contract-interaction

python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate

pip install -r requirements.txt
```

> **Windows users:** `web3` requires Microsoft C++ Build Tools to compile `lru-dict`.
> Install from: https://visualstudio.microsoft.com/visual-cpp-build-tools/
> Select **Desktop development with C++** → check only **MSVC Build Tools** + **Windows 11 SDK**.

### 2 — Run

```bash
# Interactive menu (no args needed)
python main.py

# Or use CLI directly
python main.py --token LINK --mode visualize --blocks 1000 --rpc https://ethereum-rpc.publicnode.com
```

---

## 🖥️ CLI Usage

```
python main.py [OPTIONS]

Options:
  --token   -t   Token ticker (USDT/USDC/LINK/UNI) or contract address
  --wallet  -w   Ethereum wallet address for balance check
  --mode    -m   info | balance | events | visualize | all
  --blocks  -b   Block range to scan (default: 2000)
  --rpc          Custom RPC URL (see recommended RPCs below)
  --no-timestamps  Skip timestamp resolution — faster, x-axis uses block numbers
```

### Examples

```bash
# Fetch USDT token info — name, symbol, decimals, total supply
python main.py --token USDT --mode info --rpc https://ethereum-rpc.publicnode.com

# Check USDT balance for any wallet (example: Vitalik's address)
python main.py --token USDT \
               --wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 \
               --mode balance \
               --rpc https://ethereum-rpc.publicnode.com

# Fetch recent LINK Transfer events — fast mode (no timestamp resolution)
python main.py --token LINK --mode events --blocks 1000 \
               --no-timestamps --rpc https://ethereum-rpc.publicnode.com

# Fetch LINK events + generate all 5 charts with real timestamps
python main.py --token LINK --mode visualize --blocks 1000 \
               --rpc https://ethereum-rpc.publicnode.com

# Run everything: info + balance + charts
python main.py --token USDT \
               --wallet 0xYOUR_WALLET_ADDRESS \
               --mode all \
               --rpc https://ethereum-rpc.publicnode.com
```

---

## 📊 Generated Charts

All charts are saved to `output_charts/` as `{symbol}_{chart_type}.png`.

| Chart | Filename | Description |
|---|---|---|
| Volume Over Time | `{sym}_volume_over_time.png` | Dual-axis: transfer volume (line) + transfer count (bar) per 10-min bucket |
| Top Senders | `{sym}_top_senders.png` | Top 15 addresses by total outflow volume |
| Top Receivers | `{sym}_top_receivers.png` | Top 15 addresses by total inflow volume |
| Value Distribution | `{sym}_value_distribution.png` | Log-scale histogram — spot whale vs retail activity |
| Dashboard | `{sym}_dashboard.png` | 2×2 combined summary: volume + top senders + top receivers |

---

## 🏷️ Supported Tokens

| Ticker | Name | Contract Address |
|---|---|---|
| USDT | Tether USD | `0xdAC17F958D2ee523a2206206994597C13D831ec7` |
| USDC | USD Coin | `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` |
| LINK | Chainlink | `0x514910771AF9Ca656af840dff83E8264EcF986CA` |
| UNI  | Uniswap | `0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984` |

> Any ERC-20 contract address works — just pass it with `--token 0x...`

---

## 🌐 Recommended Free RPC Endpoints

| Provider | URL | Notes |
|---|---|---|
| **PublicNode** | `https://ethereum-rpc.publicnode.com` | ✅ Recommended — fast & reliable |
| **1RPC** | `https://1rpc.io/eth` | ✅ Works well, privacy-focused |
| LlamaRPC | `https://eth.llamarpc.com` | Sometimes throttles under load |
| Cloudflare | `https://cloudflare-eth.com` | Limited method support |

> For consistent production use, [Alchemy](https://alchemy.com) and [Infura](https://infura.io) offer free tiers (300M req/month) with an API key.

---

## 🛠️ Tech Stack

| Library | Version | Purpose |
|---|---|---|
| [Web3.py](https://web3py.readthedocs.io/) | 6.15.1 | Ethereum JSON-RPC client |
| [Pandas](https://pandas.pydata.org/) | 2.2.1 | Event data wrangling & aggregation |
| [Matplotlib](https://matplotlib.org/) | 3.8.3 | Chart rendering |
| [Seaborn](https://seaborn.pydata.org/) | 0.13.2 | Color palettes & styling |
| [Requests](https://requests.readthedocs.io/) | 2.31.0 | HTTP utilities |

---

## 🧠 How It Works

```
main.py  (CLI / interactive menu)
    │
    ├── erc20_reader.py
    │       ├── Web3.HTTPProvider  ──►  ethereum-rpc.publicnode.com
    │       ├── contract.functions.name / symbol / decimals / totalSupply()
    │       ├── contract.functions.balanceOf(wallet)
    │       └── contract.events.Transfer.get_logs(fromBlock, toBlock)
    │               └── batch-resolves block timestamps via eth_getBlockByNumber
    │
    └── visualizations.py
            ├── events_to_dataframe()        →  pd.DataFrame
            ├── plot_transfer_volume_over_time()
            ├── plot_top_senders()
            ├── plot_top_receivers()
            ├── plot_transfer_value_distribution()
            └── plot_summary_dashboard()     →  output_charts/*.png
```

**Data flow:**
1. Connect to Ethereum node via HTTP RPC
2. Call read-only contract functions using the minimal ERC-20 ABI
3. Fetch `Transfer` event logs for the requested block range
4. Optionally resolve Unix timestamps for each unique block
5. Convert events → Pandas DataFrame → Matplotlib/Seaborn charts

---

## ⚠️ Notes & Limitations

- **RPC rate limits** — Free public RPCs can throttle under heavy load. If you get errors, switch RPCs with `--rpc` or reduce `--blocks`.
- **Timestamp resolution** — Each unique block = 1 extra RPC call. For 1,000 blocks with ~600 unique blocks, expect **~2–3 minutes** of resolution time. Use `--no-timestamps` to skip this.
- **High-volume tokens** — USDT and USDC can return 5,000+ events per 1,000 blocks. Start with `--blocks 500` for quick tests.
- **Read-only** — This project only reads from the blockchain. No transactions are sent, no private keys involved.

---

## 📄 License

MIT © 2024 — free to use, fork, and build upon.

---

<div align="center">
  Built with ❤️ using <strong>Web3.py</strong> — pulling live data from Ethereum Mainnet
  <br><br>
  <sub>⭐ Star this repo if it helped your Web3 journey</sub>
</div>