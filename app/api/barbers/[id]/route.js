import barbers from "@/data/barbers";

export async function GET(request, { params }) {
    const { id } = await params;

    const barber = barbers.find(
        item => item.id === parseInt(id)
    );

    if (!barber) {
        return Response.json(
            {
                message: "Barber tidak ditemukan"
            },
            { status: 404 }
        );
    }

    return Response.json(barber);
}

export async function PUT(request, { params }) {
    const { id } = await params;

    const barber = barbers.find(
        item => item.id === parseInt(id)
    );

    if (!barber) {
        return Response.json(
            {
                message: "Barber tidak ditemukan"
            },
            { status: 404 }
        );
    }

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

    barber.nama = nama;
    barber.pengalaman = pengalaman;
    barber.keahlian = keahlian;

    return Response.json({
        message: "Barber berhasil diperbarui",
        data: barber
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const index = barbers.findIndex(
        item => item.id === parseInt(id)
    );

    if (index === -1) {
        return Response.json(
            {
                message: "Barber tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const deletedBarber = barbers.splice(index, 1);

    return Response.json({
        message: "Barber berhasil dihapus",
        data: deletedBarber[0]
    });
}