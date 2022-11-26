import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }:LoaderProps) => (
    <div className={`lds-roller ${className}`}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
