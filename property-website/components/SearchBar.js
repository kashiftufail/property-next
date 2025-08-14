"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [q, setQ] = useState(searchParams.get("q") || "");
	const [city, setCity] = useState(searchParams.get("city") || "");
	const [type, setType] = useState(searchParams.get("type") || "");
	const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
	const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
	const [minBeds, setMinBeds] = useState(searchParams.get("minBeds") || "");
	const [minBaths, setMinBaths] = useState(searchParams.get("minBaths") || "");

	function handleSubmit(e) {
		e.preventDefault();
		const params = new URLSearchParams();
		if (q) params.set("q", q);
		if (city) params.set("city", city);
		if (type) params.set("type", type);
		if (minPrice) params.set("minPrice", minPrice);
		if (maxPrice) params.set("maxPrice", maxPrice);
		if (minBeds) params.set("minBeds", minBeds);
		if (minBaths) params.set("minBaths", minBaths);
		router.push(`/?${params.toString()}`);
	}

	function handleClear() {
		setQ("");
		setCity("");
		setType("");
		setMinPrice("");
		setMaxPrice("");
		setMinBeds("");
		setMinBaths("");
		router.push("/");
	}

	return (
		<form onSubmit={handleSubmit} className="w-full grid grid-cols-2 md:grid-cols-7 gap-3">
			<input
				value={q}
				onChange={(e) => setQ(e.target.value)}
				placeholder="Search address, city, title"
				className="border rounded px-3 py-2"
			/>
			<input
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="City"
				className="border rounded px-3 py-2"
			/>
			<select value={type} onChange={(e) => setType(e.target.value)} className="border rounded px-3 py-2">
				<option value="">Type</option>
				<option>House</option>
				<option>Apartment</option>
				<option>Condo</option>
				<option>Studio</option>
				<option>Townhome</option>
				<option>Duplex</option>
			</select>
			<input
				value={minPrice}
				onChange={(e) => setMinPrice(e.target.value)}
				type="number"
				placeholder="Min $"
				className="border rounded px-3 py-2"
			/>
			<input
				value={maxPrice}
				onChange={(e) => setMaxPrice(e.target.value)}
				type="number"
				placeholder="Max $"
				className="border rounded px-3 py-2"
			/>
			<input
				value={minBeds}
				onChange={(e) => setMinBeds(e.target.value)}
				type="number"
				placeholder="Min Beds"
				className="border rounded px-3 py-2"
			/>
			<input
				value={minBaths}
				onChange={(e) => setMinBaths(e.target.value)}
				type="number"
				placeholder="Min Baths"
				className="border rounded px-3 py-2"
			/>
			<div className="col-span-2 md:col-span-7 flex gap-2">
				<button type="submit" className="bg-black text-white rounded px-4 py-2">Search</button>
				<button type="button" onClick={handleClear} className="border rounded px-4 py-2">Clear</button>
			</div>
		</form>
	);
}