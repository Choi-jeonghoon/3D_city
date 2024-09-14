import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { ContentComponent } from "../components/ContentComponent";

const SeoulPage = () => {
  const data = useLoaderData();

  return (
    <div className="layout-detail">
      <motion.section
        className="left"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{ x: "-100%", transition: { duration: 0.5 } }}
      >
        <img src="/images/01.jpg" alt="seoul" />
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

export default SeoulPage;
