import './singleCharacterLayout.scss';
import { Helmet, HelmetProvider } from "react-helmet-async";

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <HelmetProvider>

        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} page`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>

        </HelmetProvider>
    )
}

export default SingleCharacterLayout;