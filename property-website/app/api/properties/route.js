import { NextResponse } from "next/server";
import { filterProperties } from "@/lib/properties";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const params = Object.fromEntries(searchParams.entries());
	const data = filterProperties(params);
	return NextResponse.json({ properties: data });
}