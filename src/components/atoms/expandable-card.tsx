interface Card {
    heading: string,
    description: string
}

interface ExpandableCardProps {
    content: Array<Card>
}

export const ExpandableCard = ({
    content
}: ExpandableCardProps) => {
    return <div className="home-accordian accordion">
        {
            content.map((c, i) => {
                return <div className="mb-3 bg-transparent accordion-item">
                    <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button
                            type="button"
                            aria-expanded="true"
                            className="accordion-button"
                        >
                            <span className="pe-2">{`0${i}`} </span>
                            {c.heading}
                        </button>
                    </h2>
                    <div className="accordion-collapse collapse show" style={{}}>
                        <div className="accordion-body">
                            {c.description}
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}