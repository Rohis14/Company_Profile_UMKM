import products from "@/data/products";

export async function GET() {
    return Response.json({
        message: "Daftar produk SiBarber",
        data: products
    });
}

export async function POST(request) {
    const body = await request.json();

    const {
        nama,
        harga,
        deskripsi,
        detail,
        gambar
    } = body;

    if (!nama || !harga || !deskripsi || !detail || !gambar) {
        return Response.json(
            {
                message: "Nama, harga, deskripsi, detail, dan gambar wajib diisi"
            },
            { status: 400 }
        );
    }

    const newProduct = {
        id: products.length + 1,
        nama,
        harga,
        deskripsi,
        detail,
        gambar
    };

    products.push(newProduct);

    return Response.json(
        {
            message: "Produk berhasil ditambahkan",
            data: newProduct
        },
        { status: 201 }
    );
}