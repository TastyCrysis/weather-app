import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      //console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather-App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Overlay */}

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />

        {/* Background Image */}

        <Image src="/wetter-bg.jpg" layout="fill" className="object-cover" />

        {/* Search */}

        <div className="px-2 md:px-0 relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
                type="text"
                placeholder="Search city"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={23} />
            </button>
          </form>
        </div>
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <Link href="/privacy">
            <p className="p-2 underline cursor-pointer">Datenschutz</p>
          </Link>
          <Link href="/imprint">
            <p className="p-2 underline cursor-pointer">Impressum</p>
          </Link>
          <div
            className="p-2 underline cursor-pointer"
            onClick={() => {
              window.klaro.show(window.klaroConfig);
            }}
          >
            <p>Cookie Konfiguration</p>
          </div>
        </div>

        {/* Weather */}

        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
