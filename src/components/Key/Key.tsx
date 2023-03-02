interface KeyProps {
  className: string;
  content: string;
}

const Key = ({ className, content }: KeyProps): JSX.Element => {
  return <button className={className}>{content}</button>;
};

export default Key;
