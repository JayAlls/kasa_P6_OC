import "./style.scss";

const Banner = ({banner, alt, text}) => {
    return (
    <div className="banner">
        <img src={banner} alt={alt} />
        <p>{text}</p>
    </div>)
}

export default Banner;