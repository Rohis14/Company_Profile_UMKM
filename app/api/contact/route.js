import { kirimPesan } from "@/lib/formspree";

export async function POST(request) {
    let body;

    try {
        body = await request.json();
    } catch {
        return Response.json(
            { message: "Format data tidak valid" },
            { status: 400 }
        );
    }

    const { nama, email, pesan } = body ?? {};

    if (!nama || !email || !pesan) {
        return Response.json(
            { message: "Nama, email, dan pesan wajib diisi" },
            { status: 400 }
        );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json(
            { message: "Format email tidak valid" },
            { status: 400 }
        );
    }

    const result = await kirimPesan({ nama, email, pesan });

    if (!result.success) {
        return Response.json(
            { message: result.message },
            { status: 502 }
        );
    }

    return Response.json(
        {
            message: "Pesan berhasil dikirim",
            data: result.data
        },
        { status: 201 }
    );
}
