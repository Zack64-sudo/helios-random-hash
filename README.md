
# ⛓️ Helios Random Hash Scheduler

A Hardhat-based bot that schedules the automated execution of the `recordRandomHash()` function on the [Helios Chain](https://explorer.helioschainlabs.org/) using the **Chronos** on-chain scheduler.

## ✨ Features

- ⏰ Periodic execution using Chronos scheduler (precompile at `0x...0830`)
- 🧾 Deploys `RandomHashRecorder` smart contract
- ⚙️ Encodes ABI + params for scheduling
- 🔁 Idempotent script that supports re-run
- ✅ Displays confirmation logs and decoded events

---

## 🧠 How It Works

This bot interacts with the `Chronos` precompile contract to register a scheduled task for calling:

```solidity
function recordRandomHash() external;
```

The function is called automatically every 24 hours (or any frequency you configure) on the deployed contract.

---

## 📦 Setup

### 1. Clone the repository

```bash
git clone https://github.com/Zack64-sudo/helios-random-hash.git
cd helios-random-hash
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Hardhat

In `hardhat.config.ts`, update your network settings:

```ts
networks: {
  heliosTestnet: {
    url: "https://rpc.helioschain.xyz", // or use another RPC endpoint
    accounts: [process.env.PRIVATE_KEY!]
  }
}
```

Set your private key:

```bash
export PRIVATE_KEY=your_wallet_private_key
```

---

## 🚀 Deployment & Scheduling

### 1. Deploy the smart contract

```bash
npx hardhat run scripts/deploy.ts --network heliosTestnet
```

### 2. Schedule the task with Chronos

```bash
npx hardhat run scripts/schedule.ts --network heliosTestnet
```

---

## ✅ Example Output

```
✅ Task Scheduled. Tx Hash: 0xabc...
⏳ Waiting for confirmation...
✅ Tx Confirmed. Hash: 0xabc...
📜 Logs:
• Event: CronCreated
[
  fromAddress: 0xYourWallet,
  toAddress: 0x0000000000000000000000000000000000000830,
  cronId: BigNumber { value: "1234" }
]
```

---

## 📁 Project Structure

```text
├── contracts/
│   └── RandomHashRecorder.sol       # Contract to be scheduled
├── scripts/
│   ├── deploy.ts                    # Deployment script
│   └── schedule.ts                  # Chronos scheduling script
├── chronos.json                     # ABI for Chronos precompile
├── hardhat.config.ts                # Hardhat configuration
└── README.md                        # You're here!
```

---

## 📚 References

- [Helios Explorer](https://explorer.helioschainlabs.org/)
- [Chronos Docs](https://docs.helioschain.xyz/chronos)

---

## 👨‍💻 Author

Made by [@Zack64-sudo](https://github.com/Zack64-sudo)

---

## 📄 License

MIT License
