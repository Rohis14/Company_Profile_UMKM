import barbers from "@/data/barbers";

export async function GET() {
    return Response.json({
        message: "Daftar barber SiBarber",
        data: barbers
    });
}

export async function POST(request) {
    const body = await request.json();

    const { nama, pengalaman, keahlian } = body;

    if (!nama || !pengalaman || !keahlian) {
        return Response.json(
            {
                message: "Nama, pengalaman, dan keahlian wajib diisi"
            },
            { status: 400 }
        );
    }

    const newBarber = {
        id: barbers.length + 1,
        nama,
        pengalaman,
        keahlian
    };

    barbers.push(newBarber);

    return Response.json(
        {
            message: "Barber berhasil ditambahkan",
            data: newBarber
        },
        { status: 201 }
    );
}