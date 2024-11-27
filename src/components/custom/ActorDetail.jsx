import {
  useGetPersonByIdQuery,
  useGetPersonCombinedCreditQuery,
} from "@/redux/services/person";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "./Row";

const ActorDetail = () => {
  let { Id, media_type } = useParams();

  const { data: personData, isLoading: personLoading } = useGetPersonByIdQuery(
    media_type === "actorDetail" ? Id : skipToken
  );
  const { data: creditsData, isLoading: creditsLoading } =
    useGetPersonCombinedCreditQuery(Id);

  useEffect(() => {
    // console.log("suiii", media_type, Id);
    // console.log("personData", personData);
    console.log("creditsData", creditsData?.cast);
  });

  return (
    <div>
      {personLoading ? (
        <>loading skeleton...</>
      ) : personData ? (
        <>
          <div className="flex justify-between px-32">
            <div className="flex-1">
              <div className="w-[330px] h-[450px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${personData?.profile_path}`}
                  alt="actor_img"
                />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              <h3 className="text-4xl font-semibold">{personData.name}</h3>
              <p>{personData?.biography}</p>
            </div>
          </div>

          <div className="mt-24">
            {creditsLoading ? (
              <>loading the skeleton...</>
            ) : creditsData ? (
              <h2 className="text-2xl font-body capitalize mb-7">
                Other movies by
                <span className="text-green-600 font-semibold">
                  {" "}
                  {personData?.title || personData?.name}
                </span>
              </h2>
            ) : null}
            <Row data={creditsData?.cast || creditsData?.cast} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ActorDetail;
