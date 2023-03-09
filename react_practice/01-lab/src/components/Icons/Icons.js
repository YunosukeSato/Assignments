export default function Icons({app}) {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${app.toLowerCase()}`} />
      </div>
      <span>{app}</span>
    </div>
  );
}
