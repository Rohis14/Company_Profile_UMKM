import profile from "@/data/profile";

export async function GET() {
    return Response.json(profile);
}