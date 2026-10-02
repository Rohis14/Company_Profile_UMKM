import services from "@/data/services";

export async function GET(request, { params }) {
    const { id } = await params;

    const service = services.find(
        item => item.id === parseInt(id)
    );

    if (!service) {
        return Response.json(
            {
                message: "Layanan tidak ditemukan"
            },
            { status: 404 }
        );
    }

    return Response.json(service);
}

export async function PUT(request, { params }) {
    const { id } = await params;

    const service = services.find(
        item => item.id === parseInt(id)
    );

    if (!service) {
        return Response.json(
            {
                message: "Layanan tidak ditemukan"
            },
            { status: 404 }
        );
    }

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

    service.nama = nama;
    service.harga = harga;
    service.deskripsi = deskripsi;

    return Response.json({
        message: "Layanan berhasil diperbarui",
        data: service
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const index = services.findIndex(
        item => item.id === parseInt(id)
    );

    if (index === -1) {
        return Response.json(
            {
                message: "Layanan tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const deletedService = services.splice(index, 1);

    return Response.json({
        message: "Layanan berhasil dihapus",
        data: deletedService[0]
    });
}