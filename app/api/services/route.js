import services from "@/data/services";

export async function GET() {
    return Response.json({
        message: "Daftar layanan SiBarber",
        data: services
    });
}

export async function POST(request) {
    const body = await request.json();

    const { nama, harga, deskripsi } = body;

    if (!nama || !harga || !deskripsi) {
        return Response.json(
            {
                message: "Nama, harga, dan deskripsi wajib diisi"
            },
            { status: 400 }
        );
    }

    const newService = {
        id: services.length + 1,
        nama,
        harga,
        deskripsi
    };

    services.push(newService);

    return Response.json(
        {
            message: "Layanan berhasil ditambahkan",
            data: newService
        },
        { status: 201 }
    );
}