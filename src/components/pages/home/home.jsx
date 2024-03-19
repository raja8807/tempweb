import { Image } from "react-bootstrap";
import styles from "./home.module.scss";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Banner = ({ data, length }) => {
  const { id, name, color } = data;

  const [style, setStyle] = useState({
    backgroundColor: color,
    position: "sticky",
    top: 0,
  });
  const initialOffsetTop = useRef();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    const lastDiv = `banner_${length}`;
    initialOffsetTop.current = document.getElementById(lastDiv).offsetTop;

    window.addEventListener("scroll", () => {
      const el = document.getElementById(`banner_${id}`);
      if (el.offsetTop > el.offsetHeight) {
        el.querySelector(`#vid_${id}`).play();
      }

      if (window.scrollY >= initialOffsetTop.current) {
        setStyle((prev) => ({ ...prev, position: "unset" }));
      } else {
        setStyle((prev) => ({ ...prev, position: "sticky" }));
      }
    });
  }, [length]);

  return (
    <div
      className={`${styles.banner} bannerScroll`}
      id={`banner_${id}`}
      style={style}
    >
      <div className={styles.wrap}>
        <video loop muted id={`vid_${id}`}>
          <source src={`/vid${id}.mp4`} type="video/mp4" />
        </video>
        <div className={styles.txt}>
          <motion.h2
            style={{
              scale: scaleProgress,
            }}
            ref={ref}
          >
            {name}
          </motion.h2>
        </div>

        <div className={styles.img}>
          <Image src={`/3.png`} fluid alt="x" />
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  const banners = [
    {
      id: "1",
      name: "LIME MINT",
      color: "green",
    },
    {
      id: "2",
      name: "STRAWBERRY",
      color: "red",
    },
    {
      id: "3",
      name: "LEMON",
      color: "orange",
    },
    // {
    //   id: "4",
    //   name: "Aaaaaa",
    //   color: "red",
    // },
  ];

  return (
    <div className={styles.holder}>
      <div className={styles.q}>gsr</div>
      {banners.map((b) => (
        <Banner key={b.id} data={b} length={banners.length} />
      ))}
      <div className={styles.q}>srgrs</div>
      <div className={styles.q}>srgrs</div>
    </div>
  );
};

export default HomeScreen;
