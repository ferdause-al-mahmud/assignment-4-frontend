/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router";

const BikeCard = ({ bike }: any) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-full">
      <Card className="rounded-2xl shadow-md overflow-hidden border h-full flex flex-col">
        {/* Image Section */}
        <CardHeader className="p-0">
          <img
            src={bike.image || "https://via.placeholder.com/300"}
            alt={bike.name || "Bike Image"}
            className="w-full h-48 object-contain rounded-t-2xl"
          />
        </CardHeader>

        {/* Content Section */}
        <CardContent className="px-2 sm:p-4 flex flex-col flex-grow sm:gap-2">
          <CardTitle className="text-lg md:text-xl font-bold">
            {bike.name || "Unknown Model"}
          </CardTitle>
          <p className="text-gray-500">{bike.brand || "Unknown Brand"}</p>

          <Badge variant="outline" className="text-xs w-max">
            {bike.category || "No Category"}
          </Badge>

          <p className="text-lg font-semibold text-green-600 mt-1">
            ${bike.price ?? "N/A"}
          </p>

          <p
            className={`text-sm ${
              bike.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {bike.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Button Section (Always at the Bottom) */}
          <div className="mt-auto pt-4">
            <Button className="w-full">
              <Link to={`/products/${bike?._id || "#"}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BikeCard;
