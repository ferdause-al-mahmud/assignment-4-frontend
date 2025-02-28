/* eslint-disable @typescript-eslint/no-explicit-any */
import BikeCard from "@/components/cards/BikeCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { Link } from "react-router";

const FeaturedBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery(null);
  const bikes = data?.bikes;
  return (
    <div className="max-w-6xl mx-auto sm:px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">🔥 Featured Bikes</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-6">
        {isLoading
          ? [...Array(6)].map((_, i) => <BikeSkeleton key={i} />)
          : bikes
              ?.slice(0, 6)
              .map((bike: any) => <BikeCard key={bike._id} bike={bike} />)}
      </div>
      <div className="flex justify-center mt-8">
        <Link className=" " to={"/all-product"}>
          <Button variant={"destructive"}> View All</Button>
        </Link>
      </div>
    </div>
  );
};

const BikeSkeleton = () => {
  return (
    <Card className="rounded-2xl shadow-md overflow-hidden border">
      <Skeleton className="w-full h-48" />
      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
};

export default FeaturedBikes;
