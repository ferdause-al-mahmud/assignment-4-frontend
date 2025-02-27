/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router";
const BikeCard = ({ bike }: any) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-full">
      <Card className="rounded-2xl shadow-md overflow-hidden border">
        <CardHeader className="p-0">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-48 object-contain rounded-t-2xl"
          />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <CardTitle className="text-xl font-bold">{bike.name}</CardTitle>
          <p className="text-gray-500">{bike.brand}</p>
          <Badge variant="outline" className="text-xs">
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
          <Button className="w-full mt-2">
            <Link to={`/products/${bike?._id}`}>View Details</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BikeCard;
