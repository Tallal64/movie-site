import { Skeleton } from "../../ui/skeleton";

const DetailSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-x-16">
        <Skeleton className="h-[350px] w-[280px] rounded-xl" />
        <div className="flex flex-col gap-y-3">
          <Skeleton className="h-[30px] w-[300px] rounded-xl" />
          <div className="flex flex-col gap-y-2">
            <Skeleton className="h-[20px] w-[700px] rounded-xl" />
            <Skeleton className="h-[20px] w-[700px] rounded-xl" />
          </div>
          <div className="my-4">
            <Skeleton className="h-[20px] w-[100px] mb-4 rounded-xl" />
            <div className="flex gap-x-4">
              <Skeleton className="h-[20px] w-[100px] rounded-xl" />
              <Skeleton className="h-[20px] w-[300px] rounded-xl" />
            </div>
          </div>
          <Skeleton className="h-[60px] w-[200px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
