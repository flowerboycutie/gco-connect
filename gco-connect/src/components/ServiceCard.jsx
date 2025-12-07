function ServiceCard({service}) {
    return (
        <div className="service-card">
            <div className="service-header">
                <img src={service.icon} alt={service.name} />
                <h3>{service.name}</h3>
            </div>
            <div className="service-description">
                <p>{service.description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
