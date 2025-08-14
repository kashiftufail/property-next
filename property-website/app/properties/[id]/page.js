import Image from "next/image";
import Link from "next/link";
import { getPropertyById } from "@/lib/properties";

export default function PropertyPage({ params }) {
	const property = getPropertyById(params.id);
	if (!property) {
		return (
			<div className="p-6">
				<p>Property not found.</p>
				<Link className="text-blue-600 underline" href="/">Go back</Link>
			</div>
		);
	}

	return (
		<div className="max-w-5xl mx-auto p-6">
			<Link className="text-blue-600 underline" href="/">← Back to listings</Link>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="relative w-full aspect-[16/10] bg-gray-100 rounded overflow-hidden">
					<Image src={property.images?.[0] || "/window.svg"} alt={property.title} fill className="object-cover" />
				</div>
				<div>
					<h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
					<p className="text-gray-700 mb-1">{property.address}</p>
					<p className="text-gray-700 mb-4">{property.city}, {property.state}</p>
					<p className="text-xl font-semibold mb-4">${property.price.toLocaleString()}</p>
					<div className="flex gap-4 text-gray-800 mb-4">
						<span>{property.beds} bd</span>
						<span>{property.baths} ba</span>
						<span>{property.areaSqft} sqft</span>
					</div>
					<p className="mb-4 text-gray-800">{property.description}</p>
					<div>
						<h2 className="font-semibold mb-2">Amenities</h2>
						<ul className="list-disc pl-5 space-y-1">
							{property.amenities?.map((a) => (
								<li key={a}>{a}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}