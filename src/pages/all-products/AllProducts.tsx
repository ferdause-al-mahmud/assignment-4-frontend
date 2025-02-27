/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeCard from "@/components/cards/BikeCard";
import { Button } from "@/components/ui/button";

const categories = [
  { value: "Mountain" },
  { value: "Road" },
  { value: "Sport" },
  { value: "Electric" },
  { value: "Superbike" },
];

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100000);
  const { data, isLoading } = useGetAllBikesQuery([
    { name: "limit", value: 6 },
    { name: "searchTerm", value: search },
    { name: "sort", value: "createdAt" },
    { name: "page", value: page },
    { name: "category", value: category },
    { name: "minPrice", value: minPrice },
    { name: "maxPrice", value: maxPrice },
  ]);
  const handleReset = () => {
    setSearch("");
    setCategory(null);
    setMinPrice(0);
    setMaxPrice(100000);
  };

  const bikes = data?.bikes || [];
  const totalItems = data?.totalItems || 0;
  const limit = 6;
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          placeholder="Search bikes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3"
        />

        {/* Custom Category Select */}
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="text-black" placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Category</SelectLabel>
              {categories.map((el) => (
                <SelectItem key={el.value} value={el.value}>
                  {el.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-24"
        />
        <Input
          placeholder="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-24"
        />
        <Button onClick={handleReset}>Reset</Button>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading bikes...</p>
      ) : bikes.length === 0 ? (
        <p className="text-center text-gray-500">No bikes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes?.map((bike: any) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </Button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <Button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AllProducts;
