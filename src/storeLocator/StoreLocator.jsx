// import React, { useEffect, useRef } from 'react';

// const stores = [
//   {
//     name: "H&M Galleria",
//     lat: 41.702678,
//     lng: 44.799469
//   },
//   {
//     name: "H&M East Point",
//     lat: 41.713353,
//     lng: 44.885421
//   }
// ];

// const StoreLocator = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 41.7099, lng: 44.7920 },
//       zoom: 12,
//     });

//     stores.forEach(store => {
//       new window.google.maps.Marker({
//         position: { lat: store.lat, lng: store.lng },
//         map,
//         title: store.name,
//       });
//     });
//   }, []);

//   return <div style={{ height: '500px' }} ref={mapRef}></div>;
// };

// export default StoreLocator;
