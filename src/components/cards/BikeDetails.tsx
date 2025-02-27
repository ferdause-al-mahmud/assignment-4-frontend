import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { useGetSingleBikeQuery } from "@/redux/features/bike/bikeApi";

const BikeDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { productId = "" } = useParams();
  const { data, isLoading } = useGetSingleBikeQuery(productId);
  const [quantity, setQuantity] = useState(1);
  const bike = data?.data;
  if (isLoading) {
    return <BikeDetailsSkeleton />;
  }

  if (!bike) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-gray-600">Bike Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Card className="flex flex-col lg:flex-row shadow-lg overflow-hidden">
        <CardHeader className="lg:w-1/2">
          <motion.img
            src={bike.image}
            alt={bike.name}
            className="w-full h-96 object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </CardHeader>
        <CardContent className="lg:w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold">{bike.name}</h2>
          <p className="text-gray-500">{bike.brand}</p>
          <Badge variant="outline" className="text-sm">
            {bike.category}
          </Badge>
          <p className="text-lg font-semibold text-green-600">${bike.price}</p>
          <p
            className={`text-sm ${
              bike.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {bike.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-gray-700">{bike.description}</p>

          <div className="flex items-center space-x-4 mt-4">
            <Button
              variant="outline"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              ➖
            </Button>
            <span className="text-lg font-bold">{quantity}</span>
            <Button
              variant="outline"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              ➕
            </Button>
          </div>

          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const BikeDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Card className="flex flex-col lg:flex-row shadow-lg overflow-hidden">
        <Skeleton className="lg:w-1/2 h-96" />
        <CardContent className="lg:w-1/2 p-6 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default BikeDetails;
