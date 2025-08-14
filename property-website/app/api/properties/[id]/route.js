import { NextResponse } from "next/server";
import { getPropertyById } from "@/lib/properties";

export async function GET(_request, { params }) {
	const { id } = params || {};
	const property = getPropertyById(id);
	if (!property) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}
	return NextResponse.json({ property });
}