import "@styles/homePage.scss";

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <>
      <div className="page__header">
        <h1 className="page__title">
          <span>H</span>ome
        </h1>
      </div>
      <div className="page__body"></div>
    </>
  );
};

export default HomePage;
