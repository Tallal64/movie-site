import { Skeleton } from "@/components/ui/skeleton";

const ActorDetailSkeleton = () => {
  return (
    <div className="flex gap-x-5 justify-between px-32">
      <div className="flex-1 flex justify-center">
        <Skeleton className="h-[450px] w-[350px] rounded-xl" />
      </div>
      <div className="flex-1">
        <Skeleton className="h-[50px] w-[300px] rounded-xl" />
        <div className="space-y-4 mt-5">
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
          <Skeleton className="h-[15px] w-[600px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ActorDetailSkeleton;
