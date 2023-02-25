import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "../styles/Location.module.css";


export default function Location() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCFFIi3_KvhZY72EVpJUXzKSH00pOjBC7s',
    });

    if (!isLoaded) return <div>Loading...</div>;
    console.log("-- MAP LOAD")
    return (<Map />);

}

function Map() {
    const center = useMemo(() => ({ lat: 13.828253, lng: 100.528451 }), []);
    return (
        <GoogleMap zoom={15} center={center} mapContainerStyle={{width: "100%", height: "100%"}}>
            <Marker position={center} />
        </GoogleMap>
    );
}
