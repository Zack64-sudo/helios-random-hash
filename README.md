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
│   ├── deploy.ts                    # Deploy kontrak ke testnet
│   ├── schedule.ts                  # Jadwalkan eksekusi otomatis via Chronos
│   └── extract-input.ts             # (Opsional) Ekstraksi exact input ABI JSON
│
├── chronos.json                     # ABI Chronos precompile (0x...0830)
├── hardhat.config.ts                # Konfigurasi jaringan dan compiler
├── .env.example                     # Template file untuk .env
├── .env                             # File environment (harus dibuat dari example)
└── README.md                        # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

### 1. Clone & Install
Clone repositori ini dan install dependency:
```bash
git clone https://github.com/Zack64-sudo/helios-random-hash.git
cd helios-random-hash
npm install
```

### 2. Siapkan Environment
Salin template `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
> 📝 Di dalam `.env` kamu harus menaruh private key testnet untuk akunmu.

### 3. Compile Kontrak
Kompilasi kontrak sebelum di-deploy:
```bash
npx hardhat compile
```

### 4. Deploy Kontrak ke Helios Testnet
Jalankan perintah berikut untuk mendeploy `RandomHashRecorder`:
```bash
npx hardhat run scripts/deploy.ts --network heliosTestnet
```
> Jika Gagal tunggu 3-5 detik dan ulangi.

### 5. (Opsional) Lihat Exact Input JSON
Untuk melihat ABI JSON yang akan digunakan dalam `createCron`, jalankan:
```bash
npx ts-node scripts/extract-input.ts
```
> Ini akan mencetak `function recordRandomHash()` dalam bentuk JSON string untuk keperluan `createCron()`.

### 6. Jadwalkan Eksekusi Otomatis
Menjadwalkan eksekusi fungsi `recordRandomHash()` setiap 24 jam:
```bash
nano scripts/schedule.ts
change const contractAddress = "0xYourDeployAddress" with your deploy address

npx hardhat run scripts/schedule.ts --network heliosTestnet
```
> Jika sukses, akan muncul log `CronCreated` pada explorer dan ID Cron akan tercetak di log terminal.

---

## 📦 Chronos Precompile

- **Alamat:** `0x0000000000000000000000000000000000000830`
- **Metode utama:** `createCron(address, string abi, string methodName, string[] params, uint64 freq, uint64 expBlock, uint64 gasLimit, uint256 maxGasPrice, uint256 deposit)`

---

## 🔍 Explorer

Lihat transaksi, kontrak, dan cron event di:  
👉 [https://explorer.helioschainlabs.org](https://explorer.helioschainlabs.org)

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
Refreh Website and task Successfully

---<img width="805" height="410" alt="Screenshot 2025-07-21 100211" src="https://github.com/user-attachments/assets/2ac65ba4-70f2-4a7e-a3cb-fb19c7b66353" />


## 📧 Kontak
Developer: [Zack64-sudo](https://github.com/Zack64-sudo)
