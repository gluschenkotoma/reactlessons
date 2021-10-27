import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {/* если  title есть(приводится к true) то рендерить разметку*/}
      {/* <h2>{title}</h2> */}
      {title && <h2>{title}</h2>}
      {/* это дети <PaintingList items={paintings} /> */}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
