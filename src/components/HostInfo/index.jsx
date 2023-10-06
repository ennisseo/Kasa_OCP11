import '../../styles/host.css';

const HostInfo = ({ name, picture }) => (
    <div className="host-info">
        <p>{name}</p>
        <img src={picture} alt={name} />
    </div>
);

export default HostInfo;
