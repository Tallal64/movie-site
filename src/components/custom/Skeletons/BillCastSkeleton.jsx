import { Skeleton } from "@/components/ui/skeleton";

const BillCastSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[30px] w-[250px] rounded-xl mt-10" />
      <div className="flex gap-x-3 mt-5">
        <Skeleton className="h-[120px] w-[120px] rounded-xl" />
        <Skeleton className="h-[120px] w-[120px] rounded-xl" />
        <Skeleton className="h-[120px] w-[120px] rounded-xl" />
        <Skeleton className="h-[120px] w-[120px] rounded-xl" />
      </div>
    </div>
  );
};

export default BillCastSkeleton;
