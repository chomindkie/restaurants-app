import React, {useMemo, useState} from "react";
import {GoogleMap, useLoadScript, MarkerF, OverlayView, OverlayViewF} from "@react-google-maps/api";


export default function Location(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCFFIi3_KvhZY72EVpJUXzKSH00pOjBC7s',
    });

    if (!isLoaded) return <div>Loading...</div>;
    console.log("-- MAP LOAD")
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
                                        <div style={{width: 200, height: 200}}>
                                            <a className="block rounded-xl bg-[#810000] p-1 sm:p-2 lg:p-4"
                                               href=""
                                               onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${restaurant.name}&query_place_id=${restaurant.placeId}`, '_blank')}
                                            >
                                                <h3 className="text-lg font-bold text-white sm:text-sm">
                                                    {restaurant.name}
                                                </h3>
                                                <p className="mt-2 text-xs text-gray-300">
                                                    {restaurant.vicinity}
                                                </p>
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
