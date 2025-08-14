import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { filterProperties } from "@/lib/properties";

export default function Home({ searchParams }) {
	const list = filterProperties(searchParams || {});
	return (
		<div className="max-w-6xl mx-auto p-6 space-y-6">
			<header className="space-y-2">
				<h1 className="text-2xl font-semibold">Find your next home</h1>
				<p className="text-gray-600">Browse properties for sale and rent across major cities.</p>
			</header>
			<SearchBar />
			<section>
				<p className="text-sm text-gray-600 mb-3">{list.length} results</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{list.map((p) => (
						<PropertyCard key={p.id} property={p} />
					))}
				</div>
			</section>
		</div>
	);
}
