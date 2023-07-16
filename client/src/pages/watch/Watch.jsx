import { useLocation, Link } from "react-router-dom";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Watch = () => {
  const location = useLocation();
  console.log(location);
  const movie = location.state;
  console.log(movie.video);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        // src="https://imdb-video.media-imdb.com/vi4260021529/1434659607842-pgv4ql-1671555797044.mp4?Expires=1681913745&Signature=ESsHQsfcrMkt3cRAJubBFn42duhpNLB3h2KZ31t14UNLftDZcZ9b0C3xhcFgBloCZj8Snirh-2qOsKtA8NblIDSngFs4ePiMW-S15pLMfTeSTc0LB7K5ZX-m~f-gcH0mCM2xb4tvxYmz3cn6neUwioB-kJH7SvucqzNHuS7icuzPTkQhJazdCwNvgCrf8SnPVyhFMqxEBCD2P0aCT9g6rIW22Dhpw4Ww34hiPrQS0eT7KvGkCouBStRfcuOtGnkknJgFPetNAcHxca5lel~ejxd1YOgw2zSuftjHWTG7VkyTGFPr0NxQbi5avnYAZu2rfaUU-jGC9MJKUCh5625ZCg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
