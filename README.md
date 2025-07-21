# 🔁 Helios Random Hash Scheduler

Otomatisasi eksekusi fungsi `recordRandomHash()` setiap 24 jam di jaringan **Helios Testnet** menggunakan **Chronos precompile**.

## 🧠 Tujuan
Project ini menunjukkan bagaimana cara:
- Deploy kontrak `RandomHashRecorder`
- Menjadwalkan eksekusi fungsi otomatis dengan Chronos precompile
- Menerapkan `createCron()` yang valid dan sukses di testnet Helios

## 🛠 Struktur Project
```
helios-random-hash/
│
├── contracts/
│   └── RandomHashRecorder.sol       # Kontrak utama
│
├── scripts/
│   ├── deploy.ts                    # Deploy kontrak
│   └── schedule.ts                  # Jadwalkan eksekusi otomatis via Chronos
│
├── chronos.json                     # ABI Chronos precompile (0x...0830)
├── hardhat.config.ts                # Konfigurasi Hardhat + jaringan Helios testnet
└── README.md                        # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

### 1. Clone & Install
```bash
git clone https://github.com/Zack64-sudo/helios-random-hash.git
cd helios-random-hash
npm install
Next, configure your environment file. This will store your private key for deploying the contract.

cp .env.example .env
Now, open the new .env file and add your MetaMask private key.
```

### 2. Compile
```bash
npx hardhat compile
```

### 3. Deploy Kontrak
```bash
npx hardhat run scripts/deploy.ts --network heliosTestnet
```

### 4. Schedule Eksekusi Otomatis
```bash
npx hardhat run scripts/schedule.ts --network heliosTestnet
```

---

## 🌐 Konfigurasi Jaringan

Tambahkan ke `hardhat.config.ts`:

```ts
networks: {
  heliosTestnet: {
    url: "https://testnet1.helioschainlabs.org/",
    chainId: 1115575601,
    accounts: [PRIVATE_KEY] // ganti dengan private key testnet
  }
}
```

---

## 📦 Chronos Precompile

- **Alamat:** `0x0000000000000000000000000000000000000830`
- **Metode:** `createCron(address, string abi, string methodName, string[] params, uint64 freq, uint64 expBlock, uint64 gasLimit, uint256 maxGasPrice, uint256 deposit)`

---

## 🔍 Explorer

Lihat transaksi di:  
[https://explorer.helioschainlabs.org](https://explorer.helioschainlabs.org)

---

## 📜 Contoh Event Berhasil

```
✅ Tx Confirmed. Hash: 0x...
📜 Logs:
• Event: CronCreated
fromAddress: 0x...
toAddress: 0x...0830
cronId: 3982
```

---

## 📧 Kontak
Developer: [Zack64-sudo](https://github.com/Zack64-sudo)
