function calculateBMI() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Konversi ke meter
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    const umur = parseFloat(document.getElementById('umur').value);

    // Validasi jika ada input yang kosong
    if (!jenisKelamin || isNaN(berat) || isNaN(tinggi) || isNaN(umur)) {
        document.getElementById('error-message').textContent = "Mohon untuk mengisi semua input yang tersedia.";
        document.getElementById('error-message').style.display = 'block';
        return; // Menghentikan eksekusi fungsi jika validasi gagal
    } else {
        document.getElementById('error-message').style.display = 'none'; // Menyembunyikan pesan error jika validasi sukses
    }

    const bmi = berat / (tinggi * tinggi);

    let category = "";
    let status = "";
    let rangeExplanation = "";
    let detailExplanation ="";
    let jenisPenyakitExplanation ="";
    let jenisPenyakitDetail = "";

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        status = "Berat badan Anda kurang dari yang ideal.";
        rangeExplanation = "ada di bawah 18.5";
        detailExplanation = "Hasil perhitungan menunjukkan bahwa Anda memiliki kekurangan berat badan. Kondisi ini dapat memengaruhi kesehatan dan daya tahan tubuh. Sebaiknya konsultasikan dengan dokter atau ahli gizi untuk mengetahui penyebabnya dan mendapatkan saran untuk meningkatkan berat badan secara sehat.";
        jenisPenyakitExplanation ="Beberapa penyakit yang berasal dari kekurangan berat badan :";
        jenisPenyakitDetail = `
        <ul>
            <li> Osteoporosis: Pengeroposan tulang.</li>
            <li>Anemia: Kekurangan sel darah merah.</li>
            <li>Sistem imun melemah: Lebih mudah terserang penyakit.</li>
            <li>Gangguan menstruasi: Pada wanita.</li>
            <li>Gangguan pertumbuhan: Pada anak-anak.</li>
        </ul>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (ideal)";
        status = "Berat badan Anda sedang dan ideal.";
        rangeExplanation = "ada di antara 18.5 dan 24.9";
        detailExplanation = "Selamat! Hasil perhitungan menunjukkan bahwa berat badan Anda berada dalam kategori ideal. Pertahankan gaya hidup sehat dengan mengonsumsi makanan bergizi dan berolahraga secara teratur untuk menjaga kesehatan tubuh.";
        jenisPenyakitExplanation ="Tidak ada penyakit spesifik: ";
        jenisPenyakitDetail = "Namun, menjaga berat badan ideal tetap penting untuk menjaga kesehatan secara keseluruhan."
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan berat badan";
        status = "Berat badan Anda berlebih.";
        rangeExplanation = "ada di antara 25.0 dan 29.9";
        detailExplanation = "Hasil perhitungan menunjukkan bahwa Anda memiliki kelebihan berat badan. Kondisi ini dapat meningkatkan risiko masalah kesehatan di masa depan. Disarankan untuk mulai menerapkan pola makan sehat dan rutin berolahraga untuk menurunkan berat badan secara bertahap.";
        jenisPenyakitExplanation ="Beberapa penyakit yang berasal dari kelebihan berat badan :";
        jenisPenyakitDetail = `
        <ul>
            <li>Prediabetes: Kondisi pra-diabetes, di mana kadar gula darah lebih tinggi dari normal.</li>
            <li>Hipertensi: Tekanan darah tinggi.</li>
            <li>Dislipidemia: Kelainan kadar lemak dalam darah.</li>
            <li> Asam urat: Penumpukan asam urat dalam sendi.</li>
        </ul>`;
    } else {
        category = "Kegemukan (Obesitas)";
        status = "Berat badan Anda sangat berlebih.";
        rangeExplanation = "ada di atas 30.0";
        detailExplanation = "Berdasarkan hasil perhitungan, Anda termasuk dalam kategori obesitas. Kondisi ini dapat meningkatkan risiko berbagai penyakit seperti diabetes, penyakit jantung, dan stroke. Sebaiknya konsultasikan dengan dokter untuk mendapatkan program diet dan olahraga yang sesuai untuk menurunkan berat badan secara sehat.";
        jenisPenyakitExplanation ="Beberapa penyakit yang berasal dari kegemukan (obesitas):";
        jenisPenyakitDetail = `
        <ul>
            <li>Penyakit jantung koroner: Penyumbatan pembuluh darah jantung.</li>
            <li>Stroke: Pembuluh darah di otak pecah atau tersumbat.</li>
            <li>Diabetes tipe 2: Tubuh tidak dapat memproses gula darah dengan baik.</li>
            <li>Gangguan pernapasan: Seperti sleep apnea (henti napas saat tidur).</li>
            <li>Gangguan sendi: Osteoarthritis, nyeri sendi.</li>
            <li>Beberapa jenis kanker: Seperti kanker usus besar, payudara, dan endometrium.</li>
        </ul>`;
    }

    // Menampilkan kategori berat badan
    document.getElementById("bmi-category").innerText = category;

    // Menampilkan hasil BMI
    document.getElementById("bmi-result").innerText = bmi.toFixed(2);

    // Menampilkan status berat badan
    document.getElementById("bmi-status").innerText = status;

    // Menampilkan antara hasil BMI
    document.getElementById('bmi-range-explanation').textContent = `Hasil BMI Anda ${rangeExplanation}.`;

    // Menampilkan penjelasan 
    document.getElementById('bmi-detail-explanation').textContent = detailExplanation;
    
    // Menampilkan penjelasan jenis penyakit
    document.getElementById('bmi-jenis-penyakit-explanation').textContent = jenisPenyakitExplanation;

     // Menampilkan detail jenis penyakit dengan format list
    document.getElementById('bmi-jenis-penyakit-detail').innerHTML = jenisPenyakitDetail;

}

function resetForm() {
    document.getElementById("berat").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("pria").checked = false;
    document.getElementById("wanita").checked = false;

    document.getElementById("bmi-result").innerText = "-";
    document.getElementById("bmi-category").innerText = "-";
    document.getElementById("bmi-status").innerText = "-";
    document.getElementById("bmi-range-explanation").innerText = "";
    document.getElementById("bmi-detail-explanation").innerText = "";
    document.getElementById("bmi-jenis-penyakit-explanation").innerText = "";
    document.getElementById("bmi-jenis-penyakit-detail").innerText = "";

    // Mengosongkan pesan error jika ada
    document.getElementById('error-message').style.display = 'none';

}

function downloadResult() {
    const bmi = document.getElementById("bmi-result").innerText;
    const category = document.getElementById("bmi-category").innerText;
    const status = document.getElementById("bmi-status").innerText;
    const rangeExplanation = document.getElementById("bmi-range-explanation").innerText;
    const detailExplanation = document.getElementById("bmi-detail-explanation").innerText;



    if (bmi === "-" || category === "-") {
        alert("Silakan hitung BMI terlebih dahulu!");
        return;
    }

    const resultText = `Hasil BMI Anda: ${bmi}\nKategori: ${category}\nStatus: ${status}`;
    const blob = new Blob([resultText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hasil_bmi.txt";
    link.click();
}
