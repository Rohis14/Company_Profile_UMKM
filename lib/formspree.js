const FORMSPREE_URL = "https://formspree.io/f/mnpnykja";

export async function kirimPesan(data) {
    try {
        const response = await fetch(FORMSPREE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                nama: data.nama,
                email: data.email,
                pesan: data.pesan
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error("Pesan gagal dikirim");
        }

        return {
            success: true,
            message: "Pesan berhasil dikirim",
            data: result
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}