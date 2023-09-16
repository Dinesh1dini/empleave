import HeroSection from "./components/HeroSection";
import Services from "./Services";
import Contact from "./Contact";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {


  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/api/carts');
      setCats(res.data);
    };
    getCats();
  }, []);


console.log(cats);

  return (
    <>
      <HeroSection />
      <Services cats={cats} />
      <Contact />
    </>
  );
};

export default Home;
