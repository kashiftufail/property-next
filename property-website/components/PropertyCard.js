import Link from "next/link";
import Image from "next/image";

function formatPrice(value) {
	if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
	if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
	return `$${value}`;
}

export default function PropertyCard({ property }) {
	const { id, title, city, state, price, beds, baths, areaSqft, images, status } = property;
	const imageSrc = images?.[0] || "/window.svg";
	return (
		<Link href={`/properties/${id}`} className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
			<div className="relative w-full aspect-[16/10] bg-gray-100">
				<Image src={imageSrc} alt={title} fill className="object-cover" />
				<span className="absolute top-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded">{status}</span>
			</div>
			<div className="p-4">
				<h3 className="font-semibold text-base mb-1">{title}</h3>
				<p className="text-sm text-gray-600 mb-2">{city}, {state}</p>
				<p className="font-semibold mb-2">{formatPrice(price)}</p>
				<div className="flex gap-3 text-sm text-gray-700">
					<span>{beds} bd</span>
					<span>{baths} ba</span>
					<span>{areaSqft} sqft</span>
				</div>
			</div>
		</Link>
	);
}