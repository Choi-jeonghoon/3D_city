import { motion } from "framer-motion";
import { useLoaderData, useParams } from "react-router-dom";
import { ContentComponent } from "../components/ContentComponent";

const CityPage = () => {
  const data = useLoaderData(); // loader에서 반환된 날씨 데이터
  const { city } = useParams(); // URL에서 도시 이름 추출
  console.log(city);

  return (
    <div className="layout-detail">
      <motion.section
        className="left"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{ x: "-100%", transition: { duration: 0.5 } }}
      >
        {/* <img src={`/images/${city.toLowerCase()}.jpg`} alt={city} /> */}
      </motion.section>
      <motion.section
        className="right"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{ x: "100%", transition: { duration: 0.5 } }}
      >
        <ContentComponent data={data?.weatherData} />
      </motion.section>
    </div>
  );
};

export default CityPage;
