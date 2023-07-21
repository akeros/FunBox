import './App.css';
import {
    YMaps,
    Map,
    Placemark,
    RouteButton,
    SearchControl,
    Polyline,
    GeoObject,
    RouteEditor,
} from '@pbe/react-yandex-maps';
import React, {useLayoutEffect, useRef, useState} from "react";
import {RouteTable} from "./components/Route";

const mapConfig = {lang: 'ru_RU', apikey: '77366a83-65b6-4ce2-badc-52e23afda1ef'}

const mapModules = [
    "control.ZoomControl",
    "control.FullscreenControl",
    "control.SearchControl",
    "control.RoutePanel",
    "multiRouter.MultiRoute",
]

const placeMarkModules = [
    "geoObject.addon.balloon",
]

const defaultMapState = {
    center: [54.330119, 48.354997],
    zoom: 14,
    controls: ["zoomControl", "fullscreenControl"]
}

// const mapState = { center: [55.750625, 37.626], zoom: 7 };

function App() {
    const [geometryList, setGeometryList] = useState([
        [54.330119, 48.354997],
        [54.322792, 48.348440],
        [54.320338, 48.382558],
        [54.320338, 48.382558],
    ])

    const [addressList, setAddressList] = useState([
        'улица Урицкого, 100Д',
        'Азовская ул., 78, Ульяновск',
        'переулок Робеспьера, 9',
    ])

    useLayoutEffect(() => {
        getRoute()
    }, [geometryList])

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

    const ref = useRef(null)

    const [ymaps, setYmaps] = useState(null);

    const routes = useRef(null);

    // В данном случае строим маршрут сразу, но можно изменить и строить по клику на кнопку
    const getRoute = ref => {
        if (ymaps) {
            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    // Описание опорных точек мультимаршрута.
                    referencePoints: geometryList,
                    // Параметры маршрутизации.
                    params: {
                        // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                        results: 1
                    }
                },
                {
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    // boundsAutoApply: true,
                    // Внешний вид линии маршрута.
                    routeActiveStrokeWidth: 6,
                    routeActiveStrokeColor: "#0053fa",
                    draggable: true,
                }
            );

            // Кладем полученный маршрут в переменную
            routes.current = multiRoute;
            ref?.geoObjects?.add(multiRoute);
        }
    };

    const getRoutes = () => {
        // Теперь в этой переменной можем получить инстанс маршрута
        console.log(routes.current.getWayPoints());
    };

    // console.warn(ref.current.options)

    return (
        <>
            <div className="block_center">
                <div className="App-header">
                    <YMaps query={mapConfig}>
                        <div>
                            <Map
                                // instanceRef={ref}
                                width={500}// '100vw'}
                                height={500}// '100vh'}
                                defaultState={defaultMapState}
                                modules={mapModules}
                                // modules={["multiRouter.MultiRoute"]}
                                onLoad={ymaps => setYmaps(ymaps)}
                                // state={mapState}
                                instanceRef={ref => ref && getRoute(ref)}
                            >
                                {/*{geometryList?.map((geometry) => (*/}
                                {/*    <Placemark*/}
                                {/*        key={geometry.join('-')}*/}
                                {/*        modules={placeMarkModules}*/}
                                {/*        defaultGeometry={geometry}*/}
                                {/*        properties={{*/}
                                {/*            balloonContentBody:*/}
                                {/*                "This is balloon loaded by the Yandex.Maps API module system",*/}
                                {/*        }}*/}
                                {/*        options={{*/}
                                {/*            draggable: true,*/}
                                {/*        }}*/}
                                {/*    />*/}
                                {/*))}*/}
                                {/*<GeoObject*/}
                                {/*    geometry={{*/}
                                {/*        type: "LineString",*/}
                                {/*        coordinates: geometryList,*/}
                                {/*    }}*/}
                                {/*    options={{*/}
                                {/*        geodesic: true,*/}
                                {/*        strokeWidth: 5,*/}
                                {/*        strokeColor: "#F008",*/}
                                {/*    }}*/}
                                {/*/>*/}
                                {/*<Polyline*/}
                                {/*    geometry={geometryList}*/}
                                {/*    options={{*/}
                                {/*        // geodesic: true,*/}
                                {/*        strokeWidth: 5,*/}
                                {/*        strokeColor: "#F008",*/}
                                {/*        InteractivityModelKey: 'default#layer'*/}
                                {/*    }}*/}
                                {/*/>*/}
                                {/*<RouteEditor options={{*/}
                                {/*    multiRoute: true*/}
                                {/*}}*/}
                                {/*instanceRef={ref} />*/}
                                {/*<SearchControl ds options={{float: "right"}} />*/}
                                {/*<RouteButton options={{float: "right"}} />*/}
                            </Map>
                        </div>
                        <button onClick={getRoutes}>Show route</button>
                    </YMaps>
                    <RouteTable list={addressList} />
                </div>
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
