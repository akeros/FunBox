import './App.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from "react";
import {RouteTable} from "./components/Route";



function App() {
    //
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     fetch("https://api.example.com/items")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },
    //             // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
    //             // чтобы не перехватывать исключения из ошибок в самих компонентах.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])
  return (
      <>
          <div className="block_center">
              <RouteTable/>
              <div style={{width:'50px'}}/>
              <header className="App-header">
                  <YMaps>
                      <div>
                          <Map
                              width={500}
                              height={500}
                              defaultState={{
                                  center: [54.32, 48.40],
                                  zoom: 9,
                                  controls: ["zoomControl", "fullscreenControl"]
                              }}
                              modules={["control.ZoomControl", "control.FullscreenControl","control.RoutePanel([parameters])"]}
                          >
                              <Placemark
                                  modules={["geoObject.addon.balloon"]}
                                  defaultGeometry={[54.32, 48.40]}
                                  properties={{
                                      balloonContentBody:
                                          "This is balloon loaded by the Yandex.Maps API module system",
                                  }}/>
                              {/*<RouteButton options={{ float: "right" }} />*/}
                          </Map>
                      </div>
                  </YMaps>
              </header>
          </div>
          <div className="light">
            <div className='light_x1'/>
            <div className='light_x2'/>
            <div className='light_x3'/>
            <div className='light_x4'/>
            <div className='light_x5'/>
            <div className='light_x6'/>
            <div className='light_x7'/>
            <div className='light_x8'/>
            <div className='light_x9'/>

    </div>
          </>
  );
}

export default App;
