import { Skeleton } from "@/components/ui/skeleton";

const BannerSkeleton = () => {
  return (
    <div className="flex flex-col justify-center gap-y-6 px-16 mb-12 h-[70vh]">
      <Skeleton className="h-[28px] w-[300px] rounded-xl" />
      <div className="space-y-3">
        <Skeleton className="h-[15px] w-[900px] rounded-xl" />
        <Skeleton className="h-[15px] w-[900px] rounded-xl" />
      </div>
      <div className="flex gap-x-5">
        <Skeleton className="h-[60px] w-[250px] rounded-xl" />
        <Skeleton className="h-[60px] w-[250px] rounded-xl" />
      </div>
    </div>
  );
};

export default BannerSkeleton;
