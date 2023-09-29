import "@styles/aboutPage.scss";
import LoadingPlaceholder from "../components/loadingPlaceholder/LoadingPlaceholder";
type Props = {};

const AboutPage = ({}: Props) => {
  return (
    <>
      <div className="page__header">
        <h1 className="page__title">
          <span>A</span>bout
        </h1>
      </div>
      <div className="page__body">
        <LoadingPlaceholder>
          Nothing is actually loading here
        </LoadingPlaceholder>
      </div>
    </>
  );
};

export default AboutPage;
