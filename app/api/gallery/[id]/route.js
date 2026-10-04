import gallery from "@/data/gallery";

export async function GET(request, { params }) {
    const { id } = await params;

    const item = gallery.find(
        item => item.id === parseInt(id)
    );

    if (!item) {
        return Response.json(
            {
                message: "Gallery tidak ditemukan"
            },
            { status: 404 }
        );
    }

    return Response.json(item);
}

export async function PUT(request, { params }) {
    const { id } = await params;

    const item = gallery.find(
        item => item.id === parseInt(id)
    );

    if (!item) {
        return Response.json(
            {
                message: "Gallery tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const body = await request.json();

    const { gambar } = body;

    if (!gambar) {
        return Response.json(
            {
                message: "Gambar wajib diisi"
            },
            { status: 400 }
        );
    }

    item.gambar = gambar;

    return Response.json({
        message: "Gambar gallery berhasil diperbarui",
        data: item
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const index = gallery.findIndex(
        item => item.id === parseInt(id)
    );

    if (index === -1) {
        return Response.json(
            {
                message: "Gallery tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const deletedGallery = gallery.splice(index, 1);

    return Response.json({
        message: "Gambar gallery berhasil dihapus",
        data: deletedGallery[0]
    });
}