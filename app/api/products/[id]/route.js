import products from "@/data/products";

export async function GET(request, { params }) {
    const { id } = await params;

    const product = products.find(
        item => item.id === parseInt(id)
    );

    if (!product) {
        return Response.json(
            {
                message: "Produk tidak ditemukan"
            },
            { status: 404 }
        );
    }

    return Response.json(product);
}

export async function PUT(request, { params }) {
    const { id } = await params;

    const product = products.find(
        item => item.id === parseInt(id)
    );

    if (!product) {
        return Response.json(
            {
                message: "Produk tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const body = await request.json();

    const {
        nama,
        harga,
        deskripsi,
        detail,
        gambar,
        tag,
        rating,
        goldTag
    } = body;

    if (!nama || !harga || !deskripsi || !detail || !gambar || !tag || !rating) {
        return Response.json(
            {
                message: "Nama, harga, deskripsi, detail, gambar, tag, dan rating wajib diisi"
            },
            { status: 400 }
        );
    }

    product.nama = nama;
    product.harga = harga;
    product.deskripsi = deskripsi;
    product.detail = detail;
    product.gambar = gambar;
    product.tag = tag;
    product.rating = rating;
    product.goldTag = goldTag || false;

    return Response.json({
        message: "Produk berhasil diperbarui",
        data: product
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const index = products.findIndex(
        item => item.id === parseInt(id)
    );

    if (index === -1) {
        return Response.json(
            {
                message: "Produk tidak ditemukan"
            },
            { status: 404 }
        );
    }

    const deletedProduct = products.splice(index, 1);

    return Response.json({
        message: "Produk berhasil dihapus",
        data: deletedProduct[0]
    });
}