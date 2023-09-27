type Props = { children: React.ReactNode };

const LoadingPlaceholder = ({ children }: Props) => {
  return (
    <div className="loading">
      {children}
      <div className="loadingAnimation">
        <div className="loadingAnimation__dot"></div>
        <div className="loadingAnimation__dot"></div>
        <div className="loadingAnimation__dot"></div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
