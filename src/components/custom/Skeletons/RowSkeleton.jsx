/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { Skeleton } from "../../ui/skeleton";

const RowSkeleton = ({ count }) => {
  return (
    <>
      {[...Array(count).keys()].map(() => (
        <div key={nanoid()}>
          <Skeleton className="h-[30px] w-[500px] rounded-xl" />
          <div className="flex gap-x-5 my-4">
            <Skeleton className="h-[350px] w-[280px] rounded-xl" />
            <Skeleton className="h-[350px] w-[280px] rounded-xl" />
            <Skeleton className="h-[350px] w-[280px] rounded-xl" />
            <Skeleton className="h-[350px] w-[280px] rounded-xl" />
            <Skeleton className="h-[350px] w-[280px] rounded-xl" />
          </div>
        </div>
      ))}
    </>
  );
};

export default RowSkeleton;
