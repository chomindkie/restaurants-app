import React, {useMemo, useState} from "react";
import {GoogleMap, useLoadScript, MarkerF, OverlayView, OverlayViewF} from "@react-google-maps/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Loading from "@/components/Loading";

export default function Location(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    });

    if (!isLoaded) return <Loading/>;
    console.log("-- MAP LOAD --- ")
    return (<Map {...props}/>);

}

function Map({restaurants, area, handlerTarget, target}) {

    return (
        <GoogleMap zoom={15} center={area} mapContainerStyle={{width: "100%", height: "100%"}}>

            {
                restaurants.map(
                    function (restaurant, index) {
                        return (
                            // one element
                            <React.Fragment key={restaurant.placeId}>
                                {target === restaurant.placeId &&
                                    <OverlayViewF
                                        position={restaurant.location}
                                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    >
                                        <div  class="font-sans" style={{width: 200, height: 200}}>
                                            <a className="block rounded-xl bg-[#810000] p-1 sm:p-2 lg:p-4"
                                            >
                                                <h3 className="text-lg font-normal text-white sm:text-sm">
                                                    {`😋 `+restaurant.name}
                                                </h3>
                                                <p className="mt-2 text-xs font-extralight text-gray-300">
                                                    {restaurant.vicinity}
                                                </p>
                                                <div className="mt-2 font-normal text-xs text-white "
                                                     onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${restaurant.name}&query_place_id=${restaurant.placeId}`, '_blank')}
                                                >
                                                    {`🗺️ View on google map`}
                                                </div>
                                            </a>
                                        </div>

                                    </OverlayViewF>
                                }

                                <MarkerF
                                    position={restaurant.location}
                                    label={`🍽️`}
                                    onClick={
                                        function () {
                                            handlerTarget(restaurant.placeId)
                                        }
                                    }
                                />
                            </React.Fragment>
                        )

                    }
                )
            }
        </GoogleMap>
    )
}
