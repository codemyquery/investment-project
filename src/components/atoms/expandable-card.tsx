interface Card {
    heading: string,
    description: Array<string>
}

interface ExpandableCardProps {
    content: Array<Card>
}

export const ExpandableCard = ({
    content
}: ExpandableCardProps) => {
    const onExpandHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        const currentTarget = evt.currentTarget;
        const parent  = currentTarget?.parentElement?.parentElement;
        if(parent && currentTarget){
            const desc = parent.querySelector('.accordion-collapse.collapse')
            if(desc){
                if(desc.classList.contains('show')){
                    desc.classList.remove('show');
                    currentTarget.classList.add('collapsed')
                }else{
                    desc.classList.add('show')
                    currentTarget.classList.remove('collapsed')
                }
            }
        }
    }
    return <div className="home-accordian accordion">
        {
            content.map((c, i) => {
                return <div key={`${i}-${c.heading}`} className="mb-3 bg-transparent accordion-item">
                    <h2 className="text-white fw-600 fs-22 accordion-header">
                        <button onClick={onExpandHandler} type="button" aria-expanded="true" className="accordion-button collapsed">
                            <span className="pe-2">{`0${++i}`} </span>
                            {c.heading}
                        </button>
                    </h2>
                    <div className="accordion-collapse collapse" style={{}}>
                        <div className="accordion-body">
                            {c.description.map(desc => <p>{desc}</p>)}
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}